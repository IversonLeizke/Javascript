'strict mode';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (t1, t2) {
    t3 = t1.concat(t1, t2);

    min = t3[0];
    max = t3[0];

    for (i = 1; i < t3.length; i++) {
        if (typeof t3[i] !== 'number') continue;
        if (t3[i] > max) {
            max = t3[i];
        }
        if (t3[i] < min) {
            min = t3[i];
        }
    }

    return max - min;
};

console.log(
    `The amplitude of the temperature is ${calcTempAmplitude(
        temperatures,
        [8, -7, 9, 15, 18]
    )}°.`
);
