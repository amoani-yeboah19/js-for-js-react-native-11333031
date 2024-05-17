const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfile } = require('./userInfo');

const numbers = [1, 2, 3, 4, 5];
const strings = ['hello', 'world', 'JavaScript', 'is', 'awesome'];

const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
const userProfiles = createUserProfile(strings, formattedStrings);

console.log(userProfiles);