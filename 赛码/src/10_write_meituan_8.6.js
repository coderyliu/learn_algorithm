const read_line=require('readline-sync')

// todo 魔法石共鸣
// let line,flag=false
// let t
// let map1
// let map2
// let num=2

// // ?73%
// while(line=read_line.question()){
//   if(!flag){
//     t=Number(line)
//     flag=true
//     map1=new Map()
//     map2=new Map()
//   }else{
//     if(num===2){
//       const res=line.split(' ').map(i=>Number(i))
//       for(let i=0;i<res.length;i++){
//         map1.set(res[i],map1.has(res[i])?map1.get(res[i])+1:1)
//       }
//       num--
//     }else{
//       const res=line.split(' ').map(i=>Number(i))
//       for(let i=0;i<res.length;i++){
//         map2.set(res[i],map2.has(res[i])?map2.get(res[i])+1:1)
//       }
//       num--
//     }

//     if(num===0){
//       for(const item of map1){
//         if(item[1]>=Math.ceil(t/2)){
//           num=2
//           flag=false
//           console.log(0)
//         }
//       }

//       console.log(-1)
//     }
//   }
// }


// todo 礼盒包装 20%
// while(line=read_line.question()){
//   if(!flag){
//     t=Number(line)
//     res=[]
//     flag=true
//   }else{
//     res.push(line.split(' ').map(i=>Number(i)))
//     t--
//     if(t===0){
//       for(const item of res){
//         if(item[1]===0|| item[0]===0){
//           result.push(0)
//           continue
//         }

//         if(item[0]*2<=item[1]){
//           result.push(item[0])
//         }else{
//           const num=Math.floor(item[1]/2)
//           let sub0=item[0]-num
//           let sub1=item[1]-(num*2)
//           let sub2=sub0
//           let sub3=sub1

//           let i=0,j=0
//           while(sub0!==0&&sub1!==0){
//             sub0=sub0-2
//             sub1=sub1-1
//             if(sub0<0||sub1<0){
//               break
//             }
//             i++
//           }
//           while(sub2!==0&&sub3!==0){
//             sub2=sub2-1
//             sub3=sub3-2
//             if(sub2<0||sub3<0){
//               break
//             }
//             j++
//           }

//           result.push(Math.max(num+i,num+j))
//         }
//       }
//       console.log(result.join('\n'))
//       flag=true
//     }
//   }
// }