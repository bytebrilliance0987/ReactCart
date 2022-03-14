/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
	plugins: [cssnano, autoprefixer, tailwindcss],
};
