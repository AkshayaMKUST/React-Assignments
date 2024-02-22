export function calculateSI(principleamount, rate, time) {
  return new Promise((resolve, reject) => {
    if (isNaN(principleamount) || isNaN(rate) || isNaN(time)) {
      reject(new Error('Invalid input. Please enter valid numbers for principal amount, rate, and time.'));
    } else {
      const res = (principleamount * rate * time) / 100;
      resolve(res);
    }
  });
}


export function calculateCI(principalamount,rate,time,compoundingsPerYear) {
  return new Promise((resolve) => {
    setTimeout(() => {
    const finalAmount = principalamount * Math.pow((1 + rate / (100 * compoundingsPerYear)), compoundingsPerYear * time);
    const compoundInterest = finalAmount - principalamount;
    resolve(compoundInterest);
        }, 5000); 
    });
}




