module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-danger': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-no-undef': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/self-closing-comp': 'off',
    'react/prop-types': 'off',
    'jsx-one-expression-per-line': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-noninteractive-element-interactions': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-useless-return': 'off',
    'no-trailing-spaces': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'implicit-arrow-linebreak': 'off',
    'click-events-have-key-events': 'off',
    'max-len': 'off',
    'arrow-body-style': 'off',
  },
};
