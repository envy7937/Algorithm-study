// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

const solution = (num, total) => {
  let min = Math.ceil(total / num) - Math.floor(num/2);
  let answer = []

  for (let i=0; i<num; i++) {
    answer.push(min + i);
  }

  return answer;
}