// https://school.programmers.co.kr/learn/courses/30/lessons/120924?language=javascript

const solution = c => (c[1] - c[0] === c[2] - c[1])
  ? (c[c.length - 1] + (c[1] - c[0]))
  : (c[c.length - 1] * (c[1] / c[0]))