const taxForms = [
    {
        realName: "Bruce Wayne",
        income: 750000,
        wealth: 300000
  },
    {
        realName: "John Blake",
        income: 440000,
        wealth: 832000
  },
    {
        realName: "Selina Kyle",
        income: 640000,
        wealth: 432000
  }
];

//this filters heroes from taxForms who has income higher than 500000
//and maps their real name
var out = taxForms.filter(hero => hero.income >= 500000)
.map(hero => hero.realName)

console.log(out)
