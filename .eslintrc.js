module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'simple-import-sort/exports': 'off',
    'simple-import-sort/imports': 'off',
  },
}
