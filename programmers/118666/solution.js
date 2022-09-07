// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript
// TODO:: 수정필요, 채점시 40/100
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

    score[typeIndex] = getScore(choices[index]);
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

function getScore(choice) {
  let score = 0;

  if (choice === 1 || choice === 7) {
    score = 3;
  } else if (choice === 2 || choice === 6) {
    score = 2;
  } else if (choice === 3 || choice === 5) {
    score = 1;
  }

  return score;
}