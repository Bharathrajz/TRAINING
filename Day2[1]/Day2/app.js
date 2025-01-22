//^ var let const

// var a = 10;
// a = 30;//! re-initializaion is possible
// console.log(a);

// let b = 20;
// b = 30;//! re-initialization is possible
// console.log(b);

// const c = 20;
// c = 30;//! re-initialization is not possible
// console.log(b);

// var a = 10;
// var a = 30;//! re-declaration is possible
// console.log(a);

// let b = 20;
// let b = 30;//! re-declaration is not possible
// console.log(b);

// const c = 30;//! re-declaration is not possible
// const c = 20;
// console.log(b);

//^ Primitive and Non-Primitive Types

//* Primitive Types 
//& String

// let str1 = "Double Quotes"
// console.log(str1)
// console.log(typeof(str1))

// let str2 = "Single Quotes"
// console.log(str2)
// console.log(typeof(str2))

// let str3 = "Double Quotes"
// console.log(str3)
// console.log(typeof(str3))

// //& Number 

//  let num1 = 10;
//  console.log(num1);

// //& boolean
 
// let bool = true;
// console.log(bool);
// //& Undefined
// let a;
// console.log(a , typeof(a));
// //& null
// let b = null;
// console.log(b , typeof(b));
// console.log(10);

// let p1 = new Promise(()=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("boom boom shakalaka");
// });
// console.log(p2);

// let p3 = new Promise((reject , resolve)=>{
//     reject("setmet");
// });
// console.log(p3);

// let p2 = new promise((rsolve, reject)=>{
//     resolve("success");
// });
// console.log(p2);
// p2.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("finally printing for both"))

// let p3=new promise((resolve, reject)=>{
//     reject("Failures");
// });
// console.log(p3)

function fetchusers(){
    let x = fetch("https://jsonplaceholder.typicode.com/users");
    x.then((response)=>{
        return response.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            data.map((user)=>{
                store.innerhtml += 
                <tr>
                    <td>
                    </td>
                </tr>
 
            })
        })
    })
    .catch(err=>console.log(err))
}
fetchusers();

