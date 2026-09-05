const id =1;
const anoterId = 12;
// console.log(id === anoterId);
const idd=Symbol("id");

// console.log(Symbol("id")==Symbol("idd"));

function functionnamefunction() {
    // console.log("function is called");
}


// console.log(typeof functionnamefunction);
// console.log(functionnamefunction);
// functionnamefunction();

//*************************************** */

function test(){
    // test();
    console.log("wow");
}
// test();

function test2(nane){

    if(nane===0){
        return 0;
    }
    // console.log(nane);
    test2(nane-1);
    //  console.log(nane);
}
test2(9);


let userone={
    name:"John",
    age:30,
};
// console.log(userone.name);

let usertwo= userone;
usertwo.name="Peter";
// console.log(usertwo.name);
// console.log(userone.name);

let userthree={
    name:"noor",
    age:30,
};
let userfour={...userthree};   // spread operator works for copying the object
userfour.name="Hanan";
// console.log(userthree.name);
// console.log(userfour.name);
let userfive={...userone,...usertwo}; 
// userfive.name="Spreaded";
// userfive.age=100;
// userfive.gender="female";
//  console.log(userfive.name);
// console.log(userfive.age);
// console.log(userfive.gender);
console.log(userfive);