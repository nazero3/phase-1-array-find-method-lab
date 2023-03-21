// code your solution here
function superbowlWin(arr) {

    const year = arr.find(element => element.result === 'W');
    if (year === undefined)
        return undefined;
    else if (year.result === 'W' && year.result !== undefined)
        return year.year;

    
        
}