const object = {
    name : "noor ",
    roll_number : 1,
    age : 20,
    address : "123 main st",
    email : "noorex@ample.com",
}
// object.name="Hanan";
// console.log(object.name);  // ac

// console.log(object["name"]);  // 

const course = {
    courseInstr : "Hanan",
    courseName : "Maths"
}
 
// course.courseName
// console.log(course)
const {courseName :inst }= course
console.log(inst)// here we can write const {courseName}=course both are same;


const nav =(company) =>{

    console.log(`Welcome to ${company} company`)
}

nav(company="noracora");