let numList: number[],
    sumOfList: number,
    poweredSumOfList: number;

export default class Squares {
    public numPar: number;

    constructor ( data: number ) { this.numPar = data; }

    public static squareOfSum(num: number, pow: number) {
        for(let i = 0; i < num; i++) { numList.push(i); }

        sumOfList = numList.reduce((a: number, b: number) => a + b);

        poweredSumOfList = Math.pow(sumOfList, pow);

        return poweredSumOfList;
    }

    public sumOfSquare() {
        //
    }
}
