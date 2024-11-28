// https://school.programmers.co.kr/learn/courses/30/lessons/340213

// [PCCP 기출문제] 1번 / 동영상 재생기

// 동영상 재싱기 기능 3가지
// 1. 10초 전으로 이동: 현재 위치가 10초 미만이면 처음으로
// 2. 10초 후로 이동: 남은 시간이 10초 미만이면 마지막으로
// 3. 오프닝 뛰어넘기: 오프닝 재생 구간에 있으면 별도 명령 없이 op_end 시점으로

// 제한사항
// video_len, pos, op_start, op_len
// 길이 5
// format: "mm:ss", mm분 ss초
// 0 <= mm <= 59, 0 <= ss <= 59
// commands 배열의 원소는 prev, next
// 1 <= commands.length() <= 100

function solution(video_len, pos, op_start, op_end, commands) {
    const video_sec = setTimeToSeconds(video_len);
    const op_start_sec = setTimeToSeconds(op_start);
    const op_end_sec = setTimeToSeconds(op_end);
    let pos_sec = setTimeToSeconds(pos);

    commands.forEach((command) => {
        pos_sec = compareOpTime(pos_sec, op_start_sec, op_end_sec);

        if (command === 'prev') {
            pos_sec -= 10;
            if (pos_sec < 0) pos_sec = 0;
        }

        if (command === 'next') {
            pos_sec += 10;
            if (pos_sec > video_sec) pos_sec = video_sec;
        }

        pos_sec = compareOpTime(pos_sec, op_start_sec, op_end_sec);
    });


    return setFormatTimeToString(pos_sec);
}

function setTimeToSeconds(time) {
    let [min, sec] = time.split(":")
    return 60 * parseInt(min) + parseInt(sec);
}

function setFormatTimeToString(seconds) {
    let min = String(Math.floor(seconds / 60)).padStart(2, "0");
    let sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`
}

function compareOpTime(pos, op_start, op_end) {
    return (pos >= op_start && pos < op_end) ? op_end : pos;
}