// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

/*
 * 1. replace를 이용하여 일치하는 단어를 '' 으로 치환한 경우
 *    wyeoo 같은 단어는 ye가 먼저 제거되어 woo가 되고 이 단어 또한 일치하게된다.
 * 2. 정규식을 이용하여 해당 단어로만 이루어진 문장인지를 우선 체크하는 방법을 사용.
 * 3. 정규식을 쓰지 않을 경우 단어를 '' 으로 치환하는것이 아닌 특수문자 등으로 치환하여 검사하는 것도 가능.
 */
function solution(babbling) {
  let answer = 0;
  let canSpeakWords = ['aya', 'ye', 'woo', 'ma'];

  babbling.map(item => {
    // \b(경계 메타 문자)를 이용하여 주어진 단어로만 구성도니 문제인지를 확인
    let regex = new RegExp(`^\\b(${canSpeakWords.join('|')})+\\b`);

    if (regex.test(item)) {
      canSpeakWords.map(word => {
        item = item.replace(word, '');
      })

      if (item == '') answer += 1
    }
  })

  return answer;
}
