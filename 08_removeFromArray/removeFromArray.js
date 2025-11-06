const removeFromArray = function(array, ...cut) {
    let newarray = [];

    array.forEach((item) => {
        if(!cut.includes(item)) {
            newarray.push(item);
        }
    })

    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
