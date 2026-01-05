/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: "src/**",
  targets: ["svelte", "react", "customElement", "html", "liquid"],
  dest: "dist",
};
