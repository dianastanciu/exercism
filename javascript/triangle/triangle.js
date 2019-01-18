export default class Triangle {
  constructor(lat1, lat2, lat3) {
    this.lat1 = lat1;
    this.lat2 = lat2;
    this.lat3 = lat3;
  }

  kind() {
    let params = [
      this.lat1,
      this.lat2,
      this.lat3
    ];

    let max = Math.max(...params);
    let paramsDupe = params.slice(0);
    paramsDupe.splice(paramsDupe.indexOf(max), 1);

    let paramsDupeSum = paramsDupe.reduce((a,b) => a + b, 0);

    if (max > paramsDupeSum || max === 0) { throw new Error(); }

    let unique = params.filter(function(item, i, ar) { 
      return ar.indexOf(item) === i; 
    });

    switch (unique.length) {
      case 1:
        return 'equilateral';
        break;
      case 2:
        return 'isosceles';
        break;
      case 3:
       return 'scalene';
       break;
    }
  }
};
