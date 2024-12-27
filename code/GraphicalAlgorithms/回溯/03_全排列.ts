// 某店铺将用于组成套餐的商品记作字符串 goods，其中 goods[i] 表示对应商品。
// 请返回该套餐内所含商品的 全部排列方式 。
// 返回结果无顺序要求，但不能含有重复的元素。

// 示例
// 输入：goods = "agew"
// 输出：["aegw","aewg","agew","agwe","aweg","awge","eagw","eawg","egaw","egwa","ewag","ewga","gaew","gawe","geaw","gewa","gwae","gwea","waeg","wage","weag","wega","wgae","wgea"]

function goodsOrder(goods: string): string[] {
  const res: string[] = [];
  const selected: boolean[] = [];

  backTrack([], goods, selected);

  // 回溯
  function backTrack(state: string[], choices: string, selected: boolean[]) {
    // 判断是否满足条件
    if (state.length === choices.length) {
      // 为解，添加到结果集
      res.push(state.join(""));
      // 不再继续搜索
      return;
    }
    const set = new Set();
    // 遍历所有选择
    for (let i = 0; i < choices.length; i++) {
      // 剪枝：是否符合情况 - 没有被选择过 && 重复元素
      if (!selected[i] && !set.has(choices[i])) {
        // 尝试：做出选择，更新状态
        state.push(choices[i]);
        selected[i] = true;
        set.add(choices[i]);
        // 进行下一轮选择
        backTrack(state, choices, selected);
        // 回退：恢复到之前的状态
        state.pop();
        selected[i] = false;
      }
    }
  }

  return res;
}

const goods = "agew";
console.log(goodsOrder(goods));

export {};
