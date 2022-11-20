'use strict';


const { repeatedwords } = require('./challenge02.js');

describe('Repeated Word', () => {
    it('should return the first repeated word', () => {
        expect(repeatedwords("I am learning programming at ASAC")).toStrictEqual("No Repetition");
        expect(repeatedwords("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toStrictEqual("ASAC");
    });
});