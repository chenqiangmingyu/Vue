module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": [2, "never"],
    "no-cond-assign": [2, "always"],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [1, "functions"],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 1,
    "valid-typeof": 2,

    // Best Practices
    "accessor-pairs": 1,
    "consistent-return": 2,
    "curly": [2, "all"],
    "default-case": 1,
    "guard-for-in": 1,
    "no-alert": 2,
    "no-else-return": 1,
    "no-labels": 1,
    "no-eval": 1,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 1,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-redeclare": [1, { "builtinGlobals": true }],
    "no-return-assign": [2, "always"],
    "no-self-compare": 2,
    "no-with": 2,
    "radix": 2,
    "wrap-iife": [2, "any"],

    // Strict Mode
    "strict": [2, "never"],

    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    // Stylistic Issues
    "array-bracket-spacing": 2,
    "block-spacing": [2, "never"],
    "brace-style": 2,
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "func-names": 1,
    "id-length": [1, { "min": 2, "properties": "always", "exceptions": ["i", "j", "e", "_", "v", "u"] }],
    "id-match": 0,
    "indent": [2, 4, {"SwitchCase": 1}],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "lines-around-comment": [1, { "beforeBlockComment": true, "afterBlockComment": false, "beforeLineComment": true, "afterLineComment": false }],
    "new-parens": 2,
    "newline-after-var": [2, "always"],
    "no-array-constructor": 2,
    "no-continue": 1,
    "no-inline-comments": 1,
    "no-lonely-if": 1,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, { "max": 2 }],
    "no-negated-condition": 0,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-unneeded-ternary": 2,
    "quote-props": 0,
    "quotes": [2, "single"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "semi": [2, "always"],
    "space-in-parens": [1, "never"],
    "space-infix-ops": [2, { "int32Hint": false }],
    "keyword-spacing": 2,
    "space-unary-ops": [1, { "words": true, "nonwords": false }],
    "wrap-regex": 1,

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
