let getConcatenation = function(nums) {
    let arr=nums ;

    let l=nums.length;

    for(let i=0 ; i<l;i++){
        arr.push(nums[i]);
    }

    return (arr);
};

let nums = [1,3,2,1]
console.log(getConcatenation(nums));