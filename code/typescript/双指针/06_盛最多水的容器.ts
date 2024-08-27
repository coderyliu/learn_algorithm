function maxArea(height: number[]): number {
  // 双指针
  let l: number = 0;
  let r: number = height.length - 1;
  let area: number = 0;
  while (l < r) {
    area = Math.max(area, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return area;
}

export {};
