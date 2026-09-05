const id =1;
const anoterId = 12;
// console.log(id === anoterId);
const idd=Symbol("id");

// console.log(Symbol("id")==Symbol("idd"));

function functionnamefunction() {
    console.log("function is called");
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
     console.log(nane);
}
test2(9);












