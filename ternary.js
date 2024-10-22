const age = 21;

// if (age >=18){
//     console.log('You can vote place');
// }
// else{
//     console.log('Tmi akhono bacca');
// }

// age >=18 ? console.log('You can vote Place') : console.log('tmi akhono baccha');

let price = 900;
const isLeader = true;

// if(isLeader===true){
//     price =0;
// }
// else {
//     price=price+100;
// }
// console.log(price);

// price = isLeader===true ? 0 : price+100;
// console.log(price);

// if(isLeader===true){
//     if(price>=1000){
//         price=price/2;
//     }
//     else{
//         price=0;
//     }
// }
// else{
//     price +=100;
// }
// console.log(price);

price = isLeader === true ? price >= 1000 ? price / 2 : price = 0 : price + 100;
console.log(price);
