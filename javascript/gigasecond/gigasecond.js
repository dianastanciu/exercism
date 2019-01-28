// export default 
function gigasecond(initialDate) {
  this.initialDate = initialDate;
  this.gigasecond = Math.pow(10, 9);
};

gigasecond.prototype.date = () => {
  return new Date(Number(this.initialDate) + this.gigasecond * 1000)
}