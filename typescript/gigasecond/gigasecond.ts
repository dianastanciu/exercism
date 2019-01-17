const gigasecond = Math.pow(10, 12);

export default class Gigasecond {
    constructor ( private start: Date ) {  }

    public date = (): Date => new Date(this.start.getTime() + gigasecond);
}
