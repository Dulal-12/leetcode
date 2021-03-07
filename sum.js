const twoSum = function(nums, target) {
    let i = 0 ;
    let arr = []
    while(i < 1){
        for(let j = 0 ; j < num.length ; j++){
            for(let k = j+1 ; k < num.length ; k++){
                if(num[j] + num[k] === target)
                    {
                        arr.push(j);
                        arr.push(k);
                        i++;
                    }
            }
        }
    }
    return arr;
};

const result = twoSum([2,7,9,11] , 9);
console.log(result);