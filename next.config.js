const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  mdxOptions: {
    remarkPlugins: [require("./remark-card")],
  },
});

module.exports = withNextra();
