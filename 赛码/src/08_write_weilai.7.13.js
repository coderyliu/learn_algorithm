// ?1.乘积
var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
//     console.log(input)
});

process.stdin.on('end', function () {
    input_array = input.split(" ");
    const str=input_array[input_array.length-1]
    input_array[input_array.length-1]=str.slice(0,str.length-1)
//     console.log(input_array)
    let arr=[Number(input_array[0]),Number(input_array[1])]
    let a=Number(input_array[2])
    let b=Number(input_array[3])
    let res=0
    function backTracking(sum,l){
//         console.log(sum,l)
        if(sum>b){
            return
        }    
        if(sum===b&&res===0){
            res=l
        }
        if(sum===b&&res!==0){
            res=Math.min(res,l)
        } 
        for(let i=0;i<arr.length;i++){
            sum+=a*arr[i]
            backTracking(sum,l+1)
            sum-=a*arr[i]
        }
    }
    backTracking(0,0)
    console.log(res)
});