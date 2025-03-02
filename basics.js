// let func = function(){
//     console.log("hey");
//     //return 'a';
// }

//  let z = func();
// console.log(z);

// let x =1234567890123457;
// console.log(x);



// console.log(Number(null))
//  console.log(Number(undefined))
//   console.log(null!=undefined);
// console.log(null==undefined);
// console.log(null<=1);
// console.log(0<=null) 
//  console.log(null==1)
//  console.log(null>=1)
//  console.log(null<=1)
// console.log(null>=0)
// console.log(null==null)
// console.log(null>null)
// console.log(null>null)



// console.log(undefined!=null);
// console.log(undefined<=null);
// console.log(undefined>=20.8);
// console.log(undefined>=20.8);
// console.log(undefined>=1);
// console.log(undefined>=0);
// console.log(undefined==0);
// console.log(undefined=="vs");
// console.log(undefined=="string");
// console.log(undefined==100.0);
// console.log(undefined==undefined)
// console.log(undefined>=undefined)
// console.log(undefined>=undefined)



// let a1=0;
// let a2="1";
// let a3=0
// console.log(a1==a2==a3)




//  let a =[1,2,3,4,5];
// console.log(a);
// console.log(a.slice(2,8));
// a.splice(1,0,200);
// console.log(a);
// let b=structuredClone(a);
// console.log(b==a);
// console.log(b===a);
// let s ='abcd';
// console.log(s.concat(s));
// console.log(s.concat('dddcccc'));
// console.log(s); //strings are imutuable
// console.log(s.substr(1,3))
// let a2=[10,20,30];
// let a3 =[2,3,4]
// console.log(a)
//a.push(a2)
//a.push(a2,a3)
// a.push(a2)
// a2.push(a3)
// console.log(a)
// console.log(a.flat(1))



// let obj1 ={
//   name:'anshi',
//   sec:1,
//   rollno:27,
// }
// let obj2 ={
//   name:'anshik',
//   sec:1,
//   rollno:20,
// }
// let obj=obj2
//  obj2=obj1  
// console.log(obj1==obj2) 
// console.log(obj1===obj2) 
// console.log(obj==obj2) 
// console.log(obj1==obj2) 



//objects


// const obj ={
//     name:"Anshika",
//     branch:"cs",
//     rollno:27,
// }

// let obj2={
//     name:"Anshika",
//     branch:"cs",
//     rollno:27,
// }
// obj2.name="hey"
// obj2=obj;
// console.log(obj2)
// console.log(obj==obj2);

// let obj2 = Object.assign({},obj);
// console.log(obj2==obj);



// const obj ={
//     name:"Anshika",
//     branch:"cs",
//     rollno:27,
//     add:{
//         pin:23444,
//         city:"siyana",
//         1:23,
//         mainAdd:{
//             a:1,
//             a:16
//         }
//     }
// }


// const {name , branch, add:{pin,mainAdd:{a}}} = obj
// const {name:fullName,add:{pin,mainAdd:{a}},...obj3,} =obj
// console.log(obj3)
// console.log(fullName,obj3,1,"ans")
// console.log(name,branch,pin,a)


// let obj2 = Object.assign({},obj);
// obj2.name="goel",
// obj2.add.pin=1111,
// obj2.add.mainAdd['1']=111111111,
// obj2.add.mainAdd['4']=0+"o",
// console.log(obj)

// let obj2 = {...obj}
// obj2.branch=2,
// obj2.add.mainAdd['1']="xxx",
// console.log(obj)


// console.log(obj.name)
// console.log(obj['name'])
// console.log(obj["name"])
// console.log(obj.add[1])
// console.log(obj.prototype)

// let arr=[1,2,3,4];
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(Array.prototype)
// console.log(arr.__proto__.__proto__.__proto__)



//DATE

// console.log(new Date().toDateString());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getMonth());
// console.log(new Date().getFullYear());
console.log(((((new Date().setDate(20))/60)/60)/60)%24);