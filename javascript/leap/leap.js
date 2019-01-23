export const isLeap = (num) => {
  return ((num % 100 !== 0 && num % 4 === 0) || num % 400 === 0) ;
};
