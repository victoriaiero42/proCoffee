module.exports = {
  env: {
    browser: true,

    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
  },
};
