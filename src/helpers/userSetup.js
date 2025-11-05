function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the config instantiated in /.eleventy.js.

  // --- ✅ Added Zoombox section ---
  eleventyConfig.addPassthroughCopy({ "src/user": "user" });

  eleventyConfig.addTransform("inject-zoombox", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const headTag = `<link rel="stylesheet" href="/user/zoombox.css">`;
      const bodyEndTag = `<script src="/user/zoombox.js"></script>`;

      let out = content.replace("</head>", `${headTag}\n</head>`);
      out = out.replace("</body>", `${bodyEndTag}\n</body>`);
      return out;
    }
    return content;
  });
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
