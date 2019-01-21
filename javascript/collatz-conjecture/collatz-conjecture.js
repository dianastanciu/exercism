let counter = 0;
let currentValue;

export const steps = (num) => {
  if (num > 0) {
    if (num % 2 == 0) {
      counter++;
      currentValue = num / 2;
      return steps(currentValue);
    } else {
      if (num !== 1) {
        counter++;
        currentValue = num * 3 + 1;
        return steps(currentValue);
      } else {
        currentValue = counter;
        return currentValue;
      }
    }
  }
  
  throw new Error('Only positive numbers are allowed');
}
