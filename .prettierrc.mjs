export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-vue"],
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.vue",
      options: {
        parser: "vue",
      },
    },
  ],
}
