/**
 */

var lemonadeChange = function (bills) {
  let fiveCount = 0;
    let tenCount = 0;

    for (let bill of bills) {
        if (bill === 5) {
            fiveCount++;
        } else if (bill === 10) {
            if (fiveCount > 0) {
                fiveCount--;
                tenCount++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            if (tenCount > 0 && fiveCount > 0) {
                tenCount--;
                fiveCount--;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};

const bills1 = [5, 5, 5, 10, 20];
console.log(lemonadeChange(bills1));
