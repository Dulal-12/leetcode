const reverse = function(x) {
    if(x < 0){
        x = parseInt(Math.abs(x).toString().split('').reverse().join(''));
        if (x < (Math.pow(2, 31) * -1) || x > Math.pow(2, 31) - 1) return 0;
        else return x;
    }
    else{
        x =  parseInt(x.toString().split('').reverse().join(''));
        if (x < (Math.pow(2, 31) * -1) || x > Math.pow(2, 31) - 1) return 0;
        else return x;
    }

};

console.log(reverse(-123));