'stric mode';

arr1 = [17, 21, 23];
arr2 = [12, 5, -5, 0, 4];

const printTemperature = function (arr) {
    let msg = '';
    for (i = 0; i < arr.length; i++) {
        msg += `... ${arr[i]}°C in ${i + 1} days `;
    }
    msg += '...';
    console.log(msg);
};

printTemperature(arr1);
printTemperature(arr2);
