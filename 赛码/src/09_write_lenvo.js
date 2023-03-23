// 不一样的小目标
let line
let t
let flag=false
let res=[]

while(line=read_line()){
  if(!flag){
    t=Number(line)
    flag=true
    res=[]
  }else{
    res.push(line.split(' ').map(i=>Number(i)))
    t--
    if(t===0){
      let ret=[]
      for(let i=0;i<res.length;i++){
       let arr=res[i]
       let m=Math.floor(arr[2]/arr[0])*arr[1]
       let n=Math.floor(arr[5]/arr[3])*arr[4]
       if(m>n){
        ret.push('B')
       }else if(m<n){
         ret.push('A')
       }else{
         ret.push('A&B')
       }
      }
      flag=false
      console.log(ret.join('\n'))
    }
  }
}

// 涂色
// const read_line=require('readline-sync')

// let flag=false
// let line
// let count=0

// while(line=read_line.question()){
//   if(!flag){
//     flag=true
//     count=Number(line)
//   }else{
//     flag=false

//     let rC=0
//     let bC=0
//     let l=0
//     let r=0
//     const str=line
//     for(let i=0;i<str.length;i++){
//       if(str[i]==='r'){
//         bC++
    //   }
    // }

    // for(let j=0;j<str.length;j++){
    //   if(str[j]==='b'){
    //     rC++
    //   }
    // }

    // let index=str.indexOf('b')
    // for(let m=0;m<index;m++){
    //   if(str[m]!=='r'){
    //     l++
    //   }
    // }

    // for(let n=index;n<str.length;n++){
    //   if(str[n]!=='b'){
    //     l++
    //   }
    // }

    // let i=str.split('').reverse().join('').indexOf('b')
    // i=str.length-i-1
    // for(let m=0;m<i;m++){
    //   if(str[m]!=='b'){
    //     r++
    //   }
    // }

    // for(let n=i+1;n<str.length;n++){
    //   if(str[n]!=='r'){
    //     r++
    //   }
    // }
    // console.log(Math.min(l,r,rC,bC))

//   }
// }