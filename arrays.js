const myarr = [1, 2, 3, 4, 5];

// console.log(myarr);
// console.log(myarr.length);
// console.log(myarr[3]);

const myarr2 = new Array(10,11,12,13,14 );
myarr2.push(55);
myarr2.pop();
// console.log(myarr2);
myarr2.unshift(99);

// console.log(myarr2.indexOf(12)); 
// console.log(myarr2.slice(1,5));  // 12,13 
// console.log(myarr2.splice(1,5));  // what spl
// console.log(myarr2);

const myarry =[1,2,[3,4,5,[1,2,3]]];
console.log(myarry[2][3][0]);  // how it works as it prints 1, it is because of the nested array, we are accessing the 2nd index of the main array which is [3,4,5,[1,2,3]], then we are accessing the 3rd index of that array which is [1,2,3], then we are accessing the 0th index of that array which is 1.