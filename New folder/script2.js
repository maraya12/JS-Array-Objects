//Objects syntax ES5
// let obj = {
//     fname:"John",
//     lname:"Doe",
//     age:16,
//     status:'married',
//     //method: a function inside an object
//     fullname: function(){
//         return `Hi! ${this.fname} ${this.lname}`
//     },
//     isMarried:function(){
//         if (this.status == 'married'){
//             return 'Yes'
//         }
//         else
//         {
//             return 'No'
//         }
//     },
//     Minor:function(){
//         if (this.age <18){
//             return 'Yes'
//         }
//         else
//         {
//             return 'No'
//         }
//     }

// }

//function - outside sa objects
//function num1()
//{
//    var x =23+15
//    return x
//}

//function num2(){

//}


//ES6 CLASS

class myclass{
    constructor (name,age,gender)
    {
        this.name = name,
        this.age = age,
        this.gender = gender
    }
    isMinor(){
        if(this.age <18)
        {
            return "Yes"
        }
            return "No"
    }
}

const myobj = new myclass('John',23,'Male');
let myobj2 = new myclass('Mark',12,'Male');