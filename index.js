const num2mm = (num) => {
    num = num.toString()
    const numbers = {0: "၀", 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉"}
    Object.keys(numbers).forEach(function (item) {
        const re = new RegExp(item, "g");
        num = num.replace(re, numbers[item]);
    });
    return num
}

const num2en = (num) => {
    num = num.toString()
    // check for wa lone cases
    num = num.replace(/([၁၂၃၄၅၆၇၈၉၀])ဝ/g, '$10');
    num = num.replace(/ဝ([၁၂၃၄၅၆၇၈၉၀])/g, '0$1');

    const numbers = {"၀": 0, "၁": 1, "၂": 2, "၃": 3, "၄": 4, "၅": 5, "၆": 6, "၇": 7, "၈": 8, "၉": 9}
    Object.keys(numbers).forEach(function (item) {
        const re = new RegExp(item, "g");
        num = num.replace(re, numbers[item]);
    });
    return num
}

module.exports = {
    num2mm: num2mm,
    num2en: num2en
}