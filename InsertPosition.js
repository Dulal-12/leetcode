const searchInsert = function(nums, target) {

    let index = 0;
    for(let i = 0;i < nums.length ; i++){
        if(nums[i] < target){
            [nums[i] , nums[index]] = [nums[index] , nums[i]];
            index++;
        }
    }
    return index;
};
const   nums = [1,3,5,6] ;
const    target = 2;
const result = searchInsert(nums , target);
console.log(result);