// Code your solution in this file!
const returnFirstTwoDrivers = (array) => array.slice(0,2);
const returnLastTwoDrivers = (array) => array.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (array, selectionFunc) => {
    return selectionFunc(array);
}

function createFareMultiplier(factor){
    return (fare) => (fare * factor);
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

