function evalRPN(tokens: string[]): number {
  // 典型的栈：先进后出
  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case "+":
        if (stack.length >= 2) {
          const v1 = stack.pop();
          const v2 = stack.pop();
          stack.push(v1! + v2!);
        }
        break;
      case "-":
        if (stack.length >= 2) {
          const v1 = stack.pop();
          const v2 = stack.pop();
          stack.push(v2! - v1!);
        }
        break;
      case "*":
        if (stack.length >= 2) {
          const v1 = stack.pop();
          const v2 = stack.pop();
          stack.push(v2! * v1!);
        }
        break;
      case "/":
        if (stack.length >= 2) {
          const v1 = stack.pop();
          const v2 = stack.pop();
          if (v1 === 0 || v2 === 0) {
            stack.push(0);
          } else if (v2! / v1! > 0) {
            stack.push(Math.floor(v2! / v1!));
          } else {
            stack.push(Math.ceil(v2! / v1!));
          }
        }
        break;
      default:
        stack.push(Number(tokens[i]));
        break;
    }
  }

  return stack.pop()!;
}

export {};
