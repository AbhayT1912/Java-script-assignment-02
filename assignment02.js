//question 1
console.log("output 1")
const square=(a)=>{
    console.log("sq fxn");
    return a*a;
}

console.log(square(2))
console.log()

//question 2
console.log("output 2")
const ages=[19,22,19,24,20,25,26,24,25,24]
console.log(ages.sort((a,b)=>a-b))
min=ages[0]
max=ages[9]
sum =0
for(i=0;i<ages.length;i++){
    sum = sum+ages[i]
}
median_age=((ages[4]+ages[5])/2)
console.log(median_age)
console.log(sum)
avg_age=sum/ages.length
console.log(`average age is: ${avg_age}`)

range = max-min
console.log(range)
compare1 = Math.abs(min - avg_age)
compare2 = Math.abs(max - avg_age)
if(compare1>compare2){
    console.log(`min abs value is greater i.e. ${compare1}`)
}
else{
    console.log(`max abs value is greater i.e. ${compare2}`)
}
console.log()

// question 3
console.log("output 3")
const map1 = new Map();
map1.set("name","abhay");
map1.set("age",20);
map1.set("email","abc1234@gmail.com");
map1.set("location","Bhopal");
function contact_detail(name){
    console.log(map1)
}
contact_detail("abhay")
console.log()

// question 4
console.log("output 4")
const person1 ={
    name : "Abhay",
    age : 20,
}
const person2 = {
    name : "Abhi",
    age:19,
}
function intro(){
    console.log(`"Hello, I'm ${this.name} and I'm ${this.age} year old"`)
}
intro.call(person2)
console.log()
// question 5
console.log("output 5")
const uniqueno = new Set([2,4,6,7,8,9]);
const sqofunique = new Map();
uniqueno.forEach(no => {
    sqofunique.set(no,no*no)
})

console.log(sqofunique)
console.log()

// question 6
console.log("output 6")

function displayInfo(name,role){
    console.log(`name = ${name} and role = ${role}`)
}

displayInfo.call(null,"abhay","developer")
displayInfo.apply(null,["abhi", "assistent developer"])
const objname={
    name : "Abhay"
}
function greet(){
    console.log(`hello, ${this.name}`)
}
const boundgreet=greet.bind(objname)
boundgreet()
console.log()

// question 7
console.log("output 7")

const calculator={
    add : function(a,b){
        return a+b;
    },
    subtract : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },
    calculate : function(name,a,b){
        if(name === "add"){
            return this.add(a,b)
        }
        else if(name === "subtract"){
            return this.subtract(a,b)
        }
        else if (name === "multiply"){
            return this.multiply(a,b)
        }
        else{
            console.log("enter valid operation")
        }
    }
}
console.log(calculator.calculate.call(calculator,"add",5,3))
const mul=calculator.calculate.apply(calculator,["multiply",2,3])
console.log(mul)

const discountcalculator={
    discountpercentage : 5,
    applydiscount : function(value){
        console.log(value-(value*this.discountpercentage)/100)
    }
}
let bountdiscount = discountcalculator.applydiscount.bind(discountcalculator)
bountdiscount(100)
