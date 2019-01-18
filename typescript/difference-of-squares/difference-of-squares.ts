export default class Squares {
    constructor (public num: number) { }

    public squareOfSum (num: number = this.num) {
        const naturalNums: number[] = []
        for (let i: number = 0; i <= num; i++) {
            naturalNums.push(i)
        }

        const sum: number = naturalNums.reduce((a, b) => a + b)

        return sum ** 2
    }

    public sumOfSquares (num: number = this.num) {
        const naturalNums: number[] = []

        for (let i: number = 0; i <= num; i++) {
            naturalNums.push(i ** 2)
        }

        const sum: number = naturalNums.reduce((a, b) => a + b)

        return sum
    }

    public difference (num: number = this.num) {
        return this.squareOfSum(num) - this.sumOfSquares(num)
    }
}
