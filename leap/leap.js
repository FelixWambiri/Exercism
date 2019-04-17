// My solution
export const isLeap = (year) => {
  if( year%4===0 && year%100!==0 || year%400===0){
    return true
  }
  return false
}

// Other solutions
// solution 1
export const isLeap = year => (year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0;

// solution 2
export const isLeap = (year) => {
  return year % 4 == 0 && !(year % 100 == 0) || year % 400 == 0
};

// solution 3
export const isLeap = (year) => {
  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
};