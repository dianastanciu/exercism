export const reverseString = (string) => {
  let result;
  let split;
  let reversed;
  if (string === '') {
    result = '';
  } else {
    split = string.split('');
    reversed = split.reverse();
    result = reversed.join('');
  }
  return result;
};
