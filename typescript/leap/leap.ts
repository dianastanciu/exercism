function isLeapYear( num: number ) {
    if ( num % 4 === 0 ) {
        return ( num % 100 === 0 ) ? num % 400 === 0 : true;
    }

    return false;
}

export default isLeapYear