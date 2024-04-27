const fibonacci = function(num) {
    if(num < 0)
    {
        return "OOPS"
    }
    if(num == 0)
    {
        return 0;
    }
    if(num == 1 || num == 2)
    {
        return 1;
    }
    else
    {
        let arr = [1, 1, 2];
        for(let i = 0; i < num; i++)
        {
            arr[i + 2] = arr[i] + arr[i + 1];
        }
        return arr[num - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
