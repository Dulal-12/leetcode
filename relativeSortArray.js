const relativeSortArray = function(arr1, arr2) {
   
    const len = arr2.length;
    let arr3 = [];
    let i = 0 ; 
    while( i < len){

        const nums = arr1.filter(ele=> ele === arr2[i]);
        let arr4 = [...arr3 , ...nums];
        arr3 = [...arr4];
        i++;
    }
    let arr4 = []
    for(let i = 0; i < arr1.length; i ++){
        if(arr3.indexOf(arr1[i]) === -1){
            arr4.push(arr1[i]);
        }
    }
    arr4 = arr4.sort((a , b)=> a-b)
    return[... arr3 , ...arr4]
};

const  arr1 = [2,3,1,3,2,4,6,7,9,2,19];
const arr2 = [2,1,4,3,9,6];
const result = relativeSortArray (arr1, arr2);
console.log(result);