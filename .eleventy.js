module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	return {
		dir: {
			// ⚠️ These values are both relative to the input directory.
			includes: "_includes",
			layouts: "_layouts"
		}
	}
};
