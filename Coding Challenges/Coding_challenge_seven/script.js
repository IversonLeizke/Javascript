'stric mode'

const john = {
    fullName: "Johm Smith",
    heigth: 1.95,
    mass: 92,
    BMI: 0,
    calcBMI: function() {
        this.BMI = this.mass / (this.heigth ** 2);
    }
}

const mark = {
    fullName: "Mark Miller",
    heigth: 1.69,
    mass: 78,
    BMI: 0,
    calcBMI: function() {
        this.BMI = this.mass / (this.heigth ** 2);
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john)
console.log(mark)

if (john.BMI > mark.BMI) {
    console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})!`)
} else if (mark.BMI > john.BMI) {
    console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})!`)
}