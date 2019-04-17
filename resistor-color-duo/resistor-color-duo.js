const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

// My solution
/**
 * Not the best solution since it can only
 * compute for two array values
 *
 * @param {Array} param0
 */
export const value = ([color1, color2]) => (
  parseInt(`${COLORS.indexOf(color1)}${COLORS.indexOf(color2)}`, 10)
)

// More elegant solutions
// solution1

/**
 *
 * Map function returns a new Array
 * The join function converts the array into a string
 * The + operator converts the string into an number
 *
 * @param {Array} colorArray
 */
export function value1(colorArray) {
  return + colorArray.map(color => COLORS.indexOf(color)).join('')
}

// solution2
/**
 *
 * Mutates the array not the best method to
 * use especially for redux
 * @param {Array} arr
 *
 */
export const value3 = (arr) => {
  let valueArr = [];

  arr.array.forEach(el => {
    valueArr.push(COLORS.indexOf(el.toLowerCase()))
  });

  return +valueArr.join('')
}

// solution3
/**
 * The trick done here is to multiply the first value by 10
 *
 * @param {Array} colors
 */
export const value2 = (colors) => COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);

// solution4
/**
 *
 * @param {array} colors
 */
export const value4 = colors => Number(colors.map(color => COLORS.indexOf(color)).join(''));
