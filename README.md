# Codemods Collection

This repository contains a collection of `jscodeshift` codemods for various code transformations.

## Project Structure

Each specific codemod resides in its own directory under `transforms/`. Each directory typically contains:

- `transform.js`: The codemod script itself.
- `fixtures/`: A directory with example code files (`.tsx`, `.js`, etc.) used for testing the transform.
- `README.md`: Detailed instructions on the purpose and usage of that specific codemod.

## Available Transforms

- **[React Native Text to BaseText](./transforms/react-native-text-to-base-text/README.md)**
  - Migrates React Native's built-in `Text` component to a custom `BaseText` component.

## Contributing

(Optional: Add guidelines here if you plan for others to contribute new codemods.)

Feel free to add new transforms by creating a new directory under `transforms/` following the established structure.
