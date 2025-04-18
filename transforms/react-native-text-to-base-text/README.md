# React Native Text to BaseText Codemod

## Purpose

This script transforms code that uses React Native's built-in `Text` component to use a custom `BaseText` component instead.

Specifically, it performs the following actions:

1.  Finds imports of `Text` from `'react-native'`.
2.  Removes the `Text` import specifier. If no other specifiers remain, the entire import declaration from `'react-native'` is removed.
3.  Adds an import for `BaseText` from `'react/components/text/base-text.tsx'` if it doesn't already exist.
4.  Renames JSX tags `<Text>` (or its alias if used during import) to `<BaseText>`.

## Usage in Another Project

To use this codemod in a different project:

**1. Install `jscodeshift`**

Add `jscodeshift` as a development dependency to the target project using your preferred package manager:

- **npm:**
  ```bash
  npm install --save-dev jscodeshift
  ```
- **yarn:**
  ```bash
  yarn add --dev jscodeshift
  ```
- **pnpm:**
  ```bash
  pnpm add -D jscodeshift
  ```

**2. Copy `transform.js`**

Copy the `rn-text-to-base-text.js` file from this directory (`transforms/react-native-text-to-base-text/rn-text-to-base-text.js`) into the root (or another suitable location) of the target project.

**3. Run the Codemod**

Open your terminal in the root of the target project and run the following command. Replace `<target_directory>` with the actual path to the folder containing the code you want to transform (e.g., `src/`, `app/components/`). Ensure the path to the transform script (`-t` argument) is correct based on where you copied it.

The command will target files with `.js`, `.jsx`, `.ts`, and `.tsx` extensions within the specified directory.

- **npm (using npx):**
  ```bash
  npx jscodeshift -t path/to/your/copy/of/rn-text-to-base-text.js <target_directory> --parser=tsx --extensions=js,jsx,ts,tsx
  ```
- **yarn:**
  ```bash
  yarn jscodeshift -t path/to/your/copy/of/rn-text-to-base-text.js <target_directory> --parser=tsx --extensions=js,jsx,ts,tsx
  ```
- **pnpm:**
  ```bash
  pnpm jscodeshift -t path/to/your/copy/of/rn-text-to-base-text.js <target_directory> --parser=tsx --extensions=js,jsx,ts,tsx
  ```

**Options:**

- `--parser=tsx`: Ensures correct parsing of JSX and TypeScript syntax.
- `--extensions=js,jsx,ts,tsx`: Limits the transformation to files with these extensions.
- `--dry`: Add this flag to perform a dry run without actually modifying any files, allowing you to preview the changes.

**Important:** It's highly recommended to commit your changes to version control (e.g., Git) before running the codemod, so you can easily revert if necessary.

---

## 다른 프로젝트에서 사용하기 (Korean)

이 codemod를 다른 프로젝트에서 사용하려면 다음 단계를 따르세요:

**1. `jscodeshift` 설치**

변환을 적용할 대상 프로젝트에 개발 의존성(dev dependency)으로 `jscodeshift`를 설치합니다. 사용하는 패키지 매니저에 맞춰 다음 명령어 중 하나를 실행하세요:

- **npm:**
  ```bash
  npm install --save-dev jscodeshift
  ```
- **yarn:**
  ```bash
  yarn add --dev jscodeshift
  ```
- **pnpm:**
  ```bash
  pnpm add -D jscodeshift
  ```

**2. `transform.js` 파일 복사**

이 디렉토리의 `rn-text-to-base-text.js` 파일 (`transforms/react-native-text-to-base-text/rn-text-to-base-text.js`)을 대상 프로젝트의 루트 디렉토리나 다른 적절한 위치로 복사합니다.

**3. Codemod 실행**

대상 프로젝트의 루트에서 터미널을 열고 다음 명령어를 실행합니다. `<target_directory>` 부분을 변환하려는 코드가 있는 실제 폴더 경로 (예: `src/`, `app/components/`)로 변경하세요. 또한, `-t` 인수로 지정하는 변환 스크립트 경로가 복사한 위치 (`path/to/your/copy/of/rn-text-to-base-text.js`)에 맞게 정확한지 확인하세요.

이 명령어는 지정된 디렉토리 내에서 `.js`, `.jsx`, `.ts`, `.tsx` 확장자를 가진 파일들을 대상으로 합니다.

- **npm (npx 사용):**
  ```bash
  npx jscodeshift -t path/to/your/copy/of/rn-text-to-base-text.js <target_directory> --parser=tsx --extensions=js,jsx,ts,tsx
  ```
- **yarn:**
  ```bash
  yarn jscodeshift -t path/to/your/copy/of/rn-text-to-base-text.js <target_directory> --parser=tsx --extensions=js,jsx,ts,tsx
  ```
- **pnpm:**
  ```bash
  pnpm jscodeshift -t path/to/your/copy/of/rn-text-to-base-text.js <target_directory> --parser=tsx --extensions=js,jsx,ts,tsx
  ```

**옵션:**

- `--parser=tsx`: JSX 및 TypeScript 구문을 올바르게 파싱하도록 보장합니다.
- `--extensions=js,jsx,ts,tsx`: 변환 대상을 이 확장자를 가진 파일로 제한합니다.
- `--dry`: 이 플래그를 추가하면 실제로 파일을 수정하지 않고 변경 사항을 미리 볼 수 있습니다 (dry run).

**중요:** codemod를 실행하기 전에 변경 사항을 버전 관리 시스템(예: Git)에 커밋하는 것이 좋습니다. 문제가 발생했을 때 쉽게 되돌릴 수 있습니다.
