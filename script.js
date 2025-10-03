let car="Porshe",
gear="mannual",
year=2025,
type="null"
console.log(typeof(type))
console.log(typeof(car))
console.log(typeof(year))
console.log(typeof(gear))

let a="harry"
let b="10"
console.log(typeof(a+b))

let fruits=["mango","apple","jackfruit","pineapple"];
console.log(fruits)
console.log("total fruits:",fruits.length)
console.log(fruits[0])
fruits.push("graps");
console.log("the new array is:",fruits)

let student={
    name:"Aaryan",
    age:20,
    course:"HTML and javascript",
    isEnrolled:true
    
}
console.log(student)
console.log(student.name)

let x=2;
console.log("Addition: x+3=",x+3)
console.log("Subtraction: x-3=",x-3)
console.log("exponential: x**3=",x**3)
console.log("increment: x++=",x++)
console.log("decrement: x--=",x--)
console.log("division: x/3=",x/3)
console.log("module; x%3=",x%3)


let x=2;
console.log(" x==3=",x==3)
console.log(" x===3=",x===3)
console.log(" x!=3=",x!=3)
console.log(" x!==3=",x!==3)
console.log(" x>3=",x>3)
console.log(" x<3=",x<3)
console.log(" x>=3",x>=3)


let sum=0;
const n=10;
for(let i=1;i<=n;i++){
    sum += i;
}
console.log("sum:",sum);



let num=2;
while(num<=20){
    console.log(num)
    num=num+2;
}


let i=prompt("enter the number:");
do{
    console.log(i);
    i--;
}
while(i>0)