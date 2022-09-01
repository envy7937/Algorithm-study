const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let N = 0;

function addSum(round, n) {
    if (n <= 1) {
        return 1;
    }

    if (round === 1) {
        return n + addSum(round, n-1);
    } else if (round === 2) {
        let sum = 0;

        for(let i=0; i<n; i++) {
            if (i === 0) {
                sum += 1;
            } else {
                sum += sum;
            }
        }

        return sum;
    }
}

function getFestivalGrade(round, score) {
    let grade = 0;
    let n = 1;
    let sum = 0;

    if (+score === 0) {
        return grade;
    }

    while(true) {
        if (round === 1) {
            sum = addSum(round, n);

            if (+score <= sum) {
                grade = n;
                break;
            }

            n++;
        } else if (round === 2) {
            sum += addSum(round, n);

            if (+score <= sum) {
                grade = n;
                break;
            }

            n++;
        }
    }

    return grade;
}

function getFestivalReward(round, score) {
    let reward = 0;
    let grade = getFestivalGrade(round, score);

    if (round === 1) {
        switch (grade) {
            case 1:
                reward = 5000000;
                break;
            case 2:
                reward = 3000000;
                break;
            case 3:
                reward = 2000000;
                break;
            case 4:
                reward = 500000;
                break;
            case 5:
                reward = 300000;
                break;
            case 6:
                reward = 100000;
                break;
        }
    } else if (round === 2) {
        switch (grade) {
            case 1:
                reward = 5120000;
                break;
            case 2:
                reward = 2560000;
                break;
            case 3:
                reward = 1280000;
                break;
            case 4:
                reward = 640000;
                break;
            case 5:
                reward = 320000;
                break;
        }
    }

    return reward;
}

rl.on('line', line => {
    if (!N) {
        N = +(line.trim());
    } else {
        input.push(line.trim().split(' '));
    }

    if (input.length === N) {
        rl.close();
    }
});

rl.on('close', () => {
    input.map(item => {
        console.log(getFestivalReward(1, item[0]) + getFestivalReward(2, item[1]));
    });
});