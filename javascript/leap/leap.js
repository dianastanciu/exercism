export const isLeap = (num) => {
    if(num % 4 === 0) {

        if(num % 100 !== 0) {
            return true;
        } else if (num % 100 === 0 && num % 400 !== 0) {
            return false;
        }

        if(num % 400 === 0) {
            return true;
        }

        if (num % 200 === 0 && num % 400 !== 0) {
            return false;
        }

        return true;

    } else {
        return false;
    }
};
