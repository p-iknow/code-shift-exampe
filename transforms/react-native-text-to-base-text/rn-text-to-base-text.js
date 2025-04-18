export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  let textImportedFromRN = false;
  let localTextName = "Text"; // 기본값

  // 1. 'react-native'에서 Text import 찾기 및 제거
  root
    .find(j.ImportDeclaration, {
      source: { value: "react-native" },
    })
    .forEach((path) => {
      const textSpecifierIndex = path.value.specifiers.findIndex(
        (spec) =>
          spec.type === "ImportSpecifier" && spec.imported.name === "Text"
      );

      if (textSpecifierIndex !== -1) {
        textImportedFromRN = true;
        // alias가 사용되었는지 확인
        localTextName = path.value.specifiers[textSpecifierIndex].local.name;

        // Text specifier 제거
        path.value.specifiers.splice(textSpecifierIndex, 1);

        // specifier가 남아있지 않으면 import 구문 전체 제거
        if (path.value.specifiers.length === 0) {
          j(path).remove();
        }
      }
    });

  // 2. Text가 react-native에서 import 되었다면 BaseText import 추가 및 JSX 태그 이름 변경
  if (textImportedFromRN) {
    // 2a. BaseText import 추가 (이미 존재하는지 확인)
    const baseTextImportExists =
      root.find(j.ImportDeclaration, {
        source: { value: "react/components/text/base-text.tsx" },
      }).length > 0;

    if (!baseTextImportExists) {
      const newImport = j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier("BaseText"))],
        j.literal("react/components/text/base-text.tsx")
      );

      // 마지막 import 뒤에 추가하거나, import가 없으면 파일 맨 위에 추가
      const lastImport = root.find(j.ImportDeclaration).at(-1);
      if (lastImport.length > 0) {
        lastImport.insertAfter(newImport);
      } else {
        // 파일 맨 앞에 추가 (Program Body 시작)
        root.get().node.program.body.unshift(newImport);
      }
    }

    // 2b. JSX에서 Text 태그 이름 변경 (원래 import된 이름 기준 - alias 포함)
    root.find(j.JSXIdentifier, { name: localTextName }).forEach((path) => {
      // JSXOpeningElement 또는 JSXClosingElement의 일부인지 확인
      if (
        path.parent.node.type === "JSXOpeningElement" ||
        path.parent.node.type === "JSXClosingElement"
      ) {
        path.node.name = "BaseText";
      }
    });
  }

  return root.toSource({ quote: "single" });
}
