let markBMI, jhonBMI, jMass, mMass, mHeight, jHeight, markHigherBMI;

console.log("-----Test data 1-----")

mMass = 78;
mHeight = 1.69;

jMass = 92;
jHeight = 1.95

markBMI = mMass / mHeight ** 2;
jhonBMI = jMass / jHeight ** 2;

markHigherBMI = markBMI > jhonBMI

console.log("Mark mass is ", mMass, ", height is ", mHeight, " and his BMI is ", markBMI, "\nJhon mass is ", jMass, ", height is ", jHeight, " and his BMI is ", jhonBMI, "\n", markBMI > jhonBMI ? "Mark BMI is greater than Jhon BMI" : "Jhon BMI is greater than Mark BMI");

console.log("-----Test data 2-----")

mMass = 95;
mHeight = 1.88;

jMass = 85;
jHeight = 1.76

markBMI = mMass / mHeight ** 2;
jhonBMI = jMass / jHeight ** 2;

markHigherBMI = markBMI > jhonBMI

console.log("Mark mass is ", mMass, ", height is ", mHeight, " and his BMI is ", markBMI, "\nJhon mass is ", jMass, ", height is ", jHeight, " and his BMI is ", jhonBMI, "\n", markBMI > jhonBMI ? "Mark BMI is greater than Jhon BMI" : "Jhon BMI is greater than Mark BMI");