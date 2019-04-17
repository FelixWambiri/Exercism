/**
 *
 * @param {string} name
 */
export const twoFer = (name) => {
  try {
    if(!name){
      return "One for you, one for me."
    }else{
      return `One for ${name}, one for me.`
    }
  } catch (error) {
    return error;
  }
}

// Solution1
/**
 *
 * @param {string} name
 */
export const twoFer1 = (name = "you") => `One for ${name}, one for me.`

// Solution2
/**
 *
 * @param {string} name
 */
export const twoFer2 = (name) => {
  const nameVal = name || 'You'
  return `One for ${nameVal}, one for me.`
}
