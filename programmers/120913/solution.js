https://school.programmers.co.kr/learn/courses/30/lessons/120913

const solution = (my_str, n) => {
  let answer = [];
  let length = my_str.length

  for(let i = 0; i < length; i = i + n) {
    let end = (i + n > length) ? length : i + n;
    answer.push(my_str.slice(i, end))
  }

  return answer;
}