//Array 1
const person1 = [];
person1.push({namn:"Ougda", ålder: 29, längd: 207});
person1.push({namn:"Alexander", ålder: 35, längd: 203});
person1.push({namn:"Sandra", ålder: 22, längd: 163});
person1.push({namn:"Sanna", ålder: 51, längd: 158});
person1.push({namn:"Filip", ålder: 61, längd: 174});
person1.push({namn:"Aman", ålder: 19, längd: 205});
person1.push({namn:"Sohib", ålder: 42, längd: 167});
person1.push({namn:"Hanna", ålder: 27, längd: 204});

//Array 2
const person2 = [];
person2.push({namn:"Michael", ålder: 72, längd: 186});
person2.push({namn:"Christina", ålder: 55, längd: 172});
person2.push({namn:"Mohammed", ålder: 22, längd: 194});
person2.push({namn:"Selam", ålder: 43, längd: 174});

//Array 3
person2.push(...person1);

//Array 4
const långaPersoner = person2.filter(person2 => person2.längd >= 200);

//Array 5
långaPersoner.forEach(element => console.log(element));

//Switch 1
const fall1 = 2;
switch (fall1) {
  case 0:
    console.log('Nisse');
    break;
  case 1:
    console.log('Per');
    break;
  case 2:
    console.log('Johannes');
    break;
  case 3:
    console.log('Joakim');
    break;
  default:
    console.log('Hans');
}


//Switch 2
const fall = 10;
switch (true) {
  case 0:
    console.log('Umeå');
    break;
  case (fall>=1) && (fall<=5):
    console.log('Stockholm');
    break;
  case (fall>=6) && (fall<=9):
    console.log('Mora');
    break;
  case (fall>=10) && (fall<=14):
    console.log('Västerås');
    break;
  case (fall>=15) && (fall<=19):
    console.log('Göteborg');
    break;
  default:
    console.log('Malmö');
}
