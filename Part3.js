// method 1
const reverse1 = (str) =>{
    if(str.length === 1 || str.length === 0)
        return str;
    return reverse1(str.substr(1)) + str.charAt(0);
}

//method 2
const reverse2 = (str) =>{
    let s2 = "";
    for (let i = 0; i < str.length; i++) {
        s2 =  str.charAt(i) + s2;
    }
    return s2;
}

// method 3
const reverse3 = (str) => {
    return str.split("").reverse().join("");

}

// method 4

const reverse4 = (str) => {
  return str === "" ? "" : reverse4(str.substr(1)) + str.charAt(0);
}
console.log(reverse4("patika"))
