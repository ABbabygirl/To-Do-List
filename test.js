// let data = [
// { thetext: "i will be going to the church", thedate: "2024-02-26", thetime: "18:20" },


// { thetext: "i will be going to the market", thedate: "2024-02-14", thetime: "19:20" },


// { thetext: "i will be going to the gym", thedate: "2024-02-16", thetime: "13:20" },

 
// { thetext: "i will be going to the parry", thedate: "2024-02-23", thetime: "14:20" },


// { thetext: "i will be leaving for church", thedate: "2024-02-07", thetime: "13:29" },

// ]

// //let result = data.find(function(each){ return each.thetext == "i will be going to the gym"})
// // console.log(result);

// // let result = data.filter(function(each){ return each.thetext == "i will be going to the gym"})
// // console.log(result);

//                         // to delete
// let result = data.filter(function(each){ return each.thetext !== "i will be going to the gym"})
// console.log(result);






// for(all of data){
//     // console.log(all.thetext)

//     let p = document.createElement("p")
//     p.innerText = all.thetext
//     document.getElementById("tasks").appendChild(p)

// }


// let today =  new Date("2025/12/12")
let today =  new Date()

// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.toLocalDateString());
// console.log(today.toLocalTimeString());


document.getElementById("date").innerText = new Date().getFullYear()
