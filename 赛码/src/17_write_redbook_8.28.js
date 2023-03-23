const readline = require('readline-sync')

let line
let flag = false
let res = []
let n, p,k
let ans=0


// ?3.一对一
while(line=readline.question()){
  if(!flag){
    const arr = line.split(' ').map(i => Number(i))
    n = arr[0]
    k = arr[1]
    res = []
    ans=0
    flag = true
  }else{
    const ret = line.split(' ').map(i => Number(i))

    // todo 超时


    flag=true
    console.log()
  }
}

// ?2.法术
// while(line=readline.question()){
//   if(!flag){
//     const arr = line.split(' ').map(i => Number(i))
//     n = arr[0]
//     k = arr[1]
//     res = []
//     ans=0
//     flag = true
//   }else{
//     const ret = line.split(' ').map(i => Number(i)).sort((a,b)=>a-b)

    // todo 超时
    // const set=new Set()
    
    // for(let i=0;i<ret.length;i++){
    //   for(let j=i+1;j<ret.length;j++){
    //     if(ret[i]===ret[j]) continue
    //     if((ret[i]*ret[j])>=k){
    //       set.add(`${ret[i]},${ret[j]}`)
    //       set.add(`${ret[j]},${ret[i]}`)
    //     }
    //   }
    // }

//     flag=true
//     console.log(map.size*2)
//   }
// }


// ?1.排队
// while (line = readline.question()) {
//   if (!flag) {
//     const arr = line.split(' ').map(i => Number(i))
//     n = arr[0]
//     p = arr[2]
//     res = []
//     flag = true
//   } else {
//     const sum = line.split(' ').map(i => Number(i)).reduce((pre, cur) => cur + pre, 0)
//     res.push(sum)
//     n--

//     if (n === 0) {
//       let cur = res[p - 1]
//       for (let i = 0; i < res.length; i++) {
//         if (res[i] > cur) {
//           ans++
//         } else if (res[i] === cur && i < p - 1) {
//           ans++
//         }
//       }


//       flag = false
//       console.log(ans + 1)
//     }
//   }
// }