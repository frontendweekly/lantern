const toml = require('toml');

// Plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const navigationPlugin = require('@11ty/eleventy-navigation');
const md = require('@frontendweekly/eleventy-plugin-markdown');

module.exports = function (eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(navigationPlugin);

  // I like toml...
  eleventyConfig.addDataExtension('toml', contents => toml.parse(contents));

  // markdown-it config
  eleventyConfig.setLibrary('md', md);

  return {
    dir: {
      input: '11ty',
      output: 'dist',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
}
