// https://school.programmers.co.kr/learn/courses/19344/lessons/242258

/**
 * 붕대감기
 * t(초) * x(hp) 회복
 * t(초) 연속 붕대감기 성공 -> y(hp)만큼 추가 회복
 *
 * 공격 당하면 연속 성공 시간 0으로 초기화
 *
 * 공격을 받으면 정해진 피해량만큼 hp 감소
 *
 * hp가 0 이하가 되면 캐릭터 사망, 회복 불가
 *
 * bandage: 1초당 회복량(x), 추가 회복량(y)를 담은 1차원 정수 배열
 *   bandage = [t, x, y]
 *   1 <= t <= 50
 *   1 <= x <= 100
 *   1 <= y <= 100
 * health: 최대 체력 정수
 *   1 <= health <= 1000
 * attacks: 몬스터의 공격 시간과 피해를 담은 2차원 정수 배열
 *   1 <= attacks <= 100
 *   attacks[] = [t, damage]
 *
 * 모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 작성
 * 캐릭터 체력이 0 이하가 되어 사망시 -1 return
 */
function solution(bandage, health, attacks) {
    const [t, x, y] = bandage
    const attackMap = new Map(attacks);
    let currentHealth = health;
    let lastAttackTime = attacks[attacks.length - 1][0];
    let durationTime = 0;

    // 마지막 공격 시간까지 반복
    for (let i = 1; i <= lastAttackTime; i++) {
        if (attackMap.has(i)) {
            // 공격, 데미지 적용
            currentHealth -= attackMap.get(i);
            durationTime = 0;
        } else {
            // 붕대감기
            currentHealth += x; // 회복
            durationTime++; // 붕대감기 지속시간 증가

            // 붕대 감기 지정된 시간만큼 연속 성공
            if (durationTime === t) {
                currentHealth += y; // 추가 회복
                durationTime = 0; // 지속시간 초기화
            }

            // 초기 입력 받은 체력을 넘어 회복할 수 없음
            if (currentHealth > health) {
                currentHealth = health;
            }
        }

        if (currentHealth < 1) {
            return -1;
        }
    }

    return currentHealth;
}