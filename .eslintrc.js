module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    '@typescript-eslint',
    "react",
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:react/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/member-delimiter-style': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '(next)|(returns)|(of)|(type)|(_\\w)', ignoreRestSiblings: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'array-bracket-spacing': ['warn', 'never'],
    'arrow-parens': 'off',
    'comma-spacing': ['warn', {"before": false, "after": true}],
    "indent": ['warn', 2, { SwitchCase: 1 }],
    'interface-name': 'off',
    'interface-over-type-literal': 'off',
    'jsx-no-multiline-js': 'off',
    'keyword-spacing': ['warn', { before: true, after: true }],
    'max-classes-per-file': 'off',
    'max-len': ['warn', { 'code': 120, ignoreRegExpLiterals: true, ignoreUrls: true, ignorePattern: '^(import|export)\\s.+\\sfrom\\s.+;?$' }],
    'member-ordering': 'off',
    'new-parens': 'warn',
    'no-angle-bracket-type-assertion': 'off',
    'no-bitwise': 'warn',
    'no-consecutive-blank-lines': 'off',
    'no-console': 'off',
    'no-multi-spaces': ['warn', { exceptions: { 'Property': false } }],
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-empty': 'warn',
    'no-extra-semi': 'off',
    'no-return-await': 'off',
    'no-shadowed-variable': 'off',
    'no-trailing-whitespace': 'off',
    'no-useless-escape': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'object-literal-sort-keys': 'off',
    'ordered-imports': 'off',
    'prefer-const': 'warn',
    'quotemark': 'off',
    'semi': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'space-infix-ops': ['warn', { 'int32Hint': false }],
    'trailing-comma': 'off',
    'variable-name': 'off',
  },
  ignorePatterns: [
    '**/node_modules/*',
    'dist',
    'extras',
  ]
};
