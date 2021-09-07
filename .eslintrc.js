module.exports = {
  root: true,
  globals: {
    yfkConfig: true
  },
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-useless-escape": "off",
    "no-irregular-whitespace": "off",
    "vue/custom-event-name-casing": "off",
    "vue/no-v-model-argument": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/return-in-computed-property": "off",
    "prefer-rest-params": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-empty": "off"
  }
}
