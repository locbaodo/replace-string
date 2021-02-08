// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { myString, newString } = require('./replace-string');

test('should replace the first o with 0 in myString', () => {
  expect(myString).toBe('Hello World!!!');
  expect(newString).toBe('Hell0 World!!!');
});