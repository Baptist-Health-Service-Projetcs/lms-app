import chroma from 'chroma-js';
const MAX_VARIANTS = 5;

/**
 * App colors
 */
const appColors = {
    blue: "#38ffd8",
};

/**
 * Main app theme
 */
const appTheme = generateTheme(appColors);


/**
 * Generate the variants for a give color   
 * @param {string} colorName 
 * @param {string} colorCode 
 * 
 * @return {object}: Variants of each color in the app
 */
const generateVariant = (colorName, colorCode) => {
    const variants = {}; // blue100: #f3ff1e
    for (let counter = 1; counter <= MAX_VARIANTS; counter++) {
        const newColor = `${colorName}${counter}00`; // e.g blue-100 ...
        variants[newColor] = chroma(colorCode).darken().saturate(counter).hex();
    }

    return variants;
}


/**
 * Get the generated variants for each color
 * And merge them to form a single them object
 * For the application
 * @param {Object} colorListObject 
 * @returns {Object} the generated theme
 */
const generateTheme = colorListObject => {
    const theme = {};
    for (const [colorName, colorValue] of colorListObject) {
        theme = { theme, ...generateVariant(colorName, colorValue) }
    }
    return theme;
}


export default appTheme;