// https://school.programmers.co.kr/learn/courses/30/lessons/120921

const solution = (A, B) => {
  if (A === B) {
    return 0
  }

  let answer = -1;
  let count = 0;

  for(let i in A) {
    if (A !== B) {
      count++
      A = A.slice(-1) + A.slice(0, -1);
    } else {
      answer = count;
      break;
    }
  }

  return answer;
}