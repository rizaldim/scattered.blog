module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	return {
		dir: {
			input: "src",
			// ⚠️ These values are both relative to the input directory.
			includes: "_includes",
			layouts: "_layouts"
		}
	}
};
