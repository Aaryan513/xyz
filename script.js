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


<<<<<<< HEAD
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
=======

let x=3;
console.log((x<5)&&(x>0));
console.log((x<5)&&(x>6));

console.log((x>2)||(x>5));
console.log((x>3)||(x<0));

console.log(!(x==3));
console.log(!(x<2));

//if statement//
let age=20;
let text="maka kalana";
if (age>18){
    text="maka kayta";
}
console.log(text);


//if else statement//
let hour=18;
if (hour<12){
    greeting="good day";
}
else
{
    greeting="good night";
}
console.log(greeting);


let marks=75;
if (marks>=90)
{
    console.log("congratulations")
}
else if(marks>=70)
{
    console.log("first class")
}
else if(marks>=50)
{
    console.log("second class")
}
else 
{
    console.log("fail")
}



let trafficlight=prompt("enter the traffic light:");
let message=""
switch(trafficlight){
    case "Red":
        message="Rav re eka zagyar";
        break;
    case "yellow":
        message="sovkas rav";
        break;
    case "green":
        message="chal mare konak ravlay";
        break;
    default:
        message="no trafficlight";
}
console.log(message)






while(1){
let day=prompt("enter the day:")
if(day==1){
    console.log("sunday")
}
else if(day==2){
    console.log("monday")
}
else if(day==3){
    console.log("tuesday")
}
else if(day==4){
    console.log("wednesday")
}
else if(day==5){
    console.log("thursday")
}
else if(day==6){
    console.log("friday")
}
else if(day==7){
    console.log("saturday")
}
else{
    console.log("invalid day")
    return 0;
}
}



let sum=0;
const n=10;

for(let i=1;i<=10;i++){
    sum += i;
}
console.log("sum:",sum)


>>>>>>> 907da00d9de3ddf67c10964373bb3f30b842c913
