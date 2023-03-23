// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input = "";

// process.stdin.on('data', function (data) {
//     input += data;
// });

// process.stdin.on('end', function () {
//   let res=input.split(' ')
//   let str=res[0]
//   let start=res[1]
//   let end=res[2]

//   const index1=str.indexOf(start)
//   const index2=str.indexOf(end)

//   if(index1!==-1){
//     start=index1
//   }else{
//     start=0
//   }

//   if(index2!==-1){
//     end=index2
//   }else{
//     end=str.length-1
//   }

//   let ret=''
//   ret+=str.slice(0,start)
//   ret+=str.slice(start,end+1).split('').reverse().join('')
//   ret+=str.slice(end,str.length)

//   console.log(ret)
// });

// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
  let res=input.split(' ')
  let k=res.pop()

  const map=new Map()
  while(1){
    let l=res[0]
    let r=res[1]

    if(l>r){
      res.splice(1,1)
      res.push(r)
      map.set(l,map.has(l)?map.get(l)+1:1)
      if(map.get(l)>=k){
        console.log(l)
        break
      }
    }else{
      res.splice(0,1)
      res.push(l)
      map.set(r,map.has(r)?map.get(r)+1:1)
      if(map.get(r)>=k){
        console.log(r)
        break
      }
    }
  }
});