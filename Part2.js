const  girlsPowerToplami = (num) =>(num*1.0/2 + 3);
const  girlsPower = (arr, func) =>{
    let newAr = [];
    for (const arrElement of arr) {
        newAr.push(func(arrElement));
    }
    return newAr;
};

const ar = [2,3,4];
console.log(girlsPower(ar,girlsPowerToplami));

