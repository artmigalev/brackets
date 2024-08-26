module.exports =function check(str, bracketsConfig) {
  // your solution

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let chair = str[i];
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j].some((item) => item === chair)) {
        if (stack.length === 0) {
          if (chair === bracketsConfig[j][0]) {
            stack.push(chair);
          } else if (bracketsConfig[j][1] === chair) {
            return false;
          }
        } else {
          let lastChair = stack[stack.length - 1];
          if (lastChair === chair && bracketsConfig[j].every((i) => i === chair)) {
            stack.pop();
            continue;
          }
          if (chair === lastChair) {
            stack.push(chair);
            continue;
          }
          if (chair !== lastChair && chair === bracketsConfig[j][0]) {
            stack.push(chair);
            continue
          } else if (chair === bracketsConfig[j][1] && lastChair !== bracketsConfig[j][0] && lastChair !== bracketsConfig[j][1]) {
            return false;
          } else if (chair === bracketsConfig[j][1] && lastChair === bracketsConfig[j][0]) {
            stack.pop();
            continue
          }
        }
      }
      continue
    }
  }
  return stack.length === 0 ? true : false;
}


