// https://school.programmers.co.kr/learn/courses/30/lessons/340212

// 제한시간(limit) 내에 n개의 퍼즐을 모두 해결하기 위한 숙련도(level)의 최솟값을 구하시오.

// diff: 난이도
// time_cur: 현재 퍼즐의 소요 시간
// time_prev: 이전 퍼즐의 소요 시간
// level: 숙련도

// diff <= level: time_cur
// diff > level: (diff - level) * (time_cur + time_prev) + time_cur

// 제한사항
// 1 <= diffs.length = times.length = n <= 300,000
// diffs[i]: i번째 퍼즐의 난이도, times[i]: i번째 퍼즐의 소요시간
// diffs[0] = 1
// 1 <= diffs[i] <= 100,000
// 1 <= times[i] <= 10,000
// 1 <= limit <= 10^15

// 시도2. 이진 탐색으로 시도.
function solution(diffs, times, limit) {
    let left = 1;
    let right = diffs.reduce((max, cur) => Math.max(max, cur), -Infinity)
    let result = left;

    const calcTotalTime = (diffs, times, level) => {
        let total_time = 0;

        for (let i = 0; i < diffs.length; i++) {
            if (diffs[i] <= level) {
                total_time += times[i];
            } else {
                total_time += (diffs[i] - level) * (times[i] + times[i - 1]) + times[i];
            }
        }

        return total_time;
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let total_time = calcTotalTime(diffs, times, mid)

        if (total_time <= limit) {
            right = mid - 1;
            result = mid;
        } else {
            left = mid + 1;
        }
    }

    return result;
}

// 시도1.
// 멍청하게 반복문으로 시도. 실행 시간 초과로 실패
// 이진 탐색으로 굴려야할듯.
function solution1(diffs, times, limit) {
    let max_diff = diffs[0];

    for (let diff of diffs) {
        if (diff > max_diff) {
            max_diff = diff;
        }
    }

    let min_level = max_diff;

    for (let i = 1; i <= max_diff; i++) {
        let total_time = 0;

        for (let j = 0; j < diffs.length; j++) {
            if (diffs[j] <= i) {
                total_time += times[j];
            } else {
                total_time += (diffs[j] - i) * (times[j] + times[j - 1]) + times[j];
            }
        }

        if (total_time <= limit && i <= min_level) {
            min_level = i;
            break;
        }
    }

    return min_level;
}