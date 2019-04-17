// My solution
export const isLeap = (year) => {
  if( year%4===0 && year%100!==0 || year%400===0){
    return true
  }
  return false
}

// Other solutions
// solution 1
/**
 *
 * @param {number} year
 */
export const isLeap1 = year => (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0;

// solution 2
/**
 *
 * @param {number} year
 */
export const isLeap2 = (year) => {
  return year % 4 == 0 && !(year % 100 == 0) || year % 400 == 0
};

// solution 3
/**
 *
 * @param {number} year
 */
export const isLeap3 = (year) => {
  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
};