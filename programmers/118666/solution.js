// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript
function solution(survey, choices) {
  var answer = '';
  let type = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N']
  let score = Array.from({length: 8}, () => 0);

  survey.map((item, index) => {
    let surveyItem = item.split('');
    let typeIndex = 0;

    if (choices[index] <= 4) {
      typeIndex = type.indexOf(surveyItem[0]);
    } else {
      typeIndex = type.indexOf(surveyItem[1]);
    }

    score[typeIndex] += Math.abs(choices[index] - 4);
  })

  for(let i=0; i<score.length; i+=2) {
    if (score[i] > score[i+1]) {
      answer += type[i];
    } else if (score[i] < score[i+1]) {
      answer += type[i+1];
    } else {
      answer += type[i];
    }
  }

  return answer;
}