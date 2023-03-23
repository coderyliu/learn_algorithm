process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
  const res = []
  const map = new Map()

  const arr = JSON.parse(input)
  for (const item of arr) {
    const id = item.id
    const pid = item.pid

    if (!pid) {
      const obj = {
        id,
        child: []
      }

      map.set(id, obj)
    }

    if (map.has(pid)) {
      const newObj = map.get(pid)
      const child = newObj.child
      let flag = false
      for (const items of child) {
        if (items.id === item.id) {
          flag = true
        }
      }

      if (!flag) {
        newObj.child.push(item)
      }
    }
  }

  res.push(map.get(1))
  console.log(res);
});

// function combinationSum(array, target) {
//   array.sort((a, b) => a - b);
//   if (array[0] > target) return [];
//   let path = [];
//   let set = new Set();

//   function backTracking() {
//     const sum = path.reduce((pre, cur) => pre + cur, 0);
//     if (sum === target) set.add(path.sort((a, b) => a - b).join());

//     if (sum > target) return;

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > target) continue;
//       path.push(array[i]);
//       backTracking();
//       path.pop();
//     }
//   }

//   backTracking();

//   return Array.from(set).map(i => i.split(',').map(i => Number(i)));
// }

// console.log(combinationSum([2, 3, 5], 8))