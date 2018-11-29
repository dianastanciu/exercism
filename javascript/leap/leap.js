export const isLeap = (num) => {
    if(num % 4 === 0 ) {
        if (num % 100 === 0) {
             return (num % 400 === 0);
        }
        return true;
    }
    return false;
};
