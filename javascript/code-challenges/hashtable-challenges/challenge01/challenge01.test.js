// Write your test here

const Checker = require('./challenge01.js');

describe('Checker', () => {
    it('returns true if the tree has two elements that their summation is the given integer', () => {
        let tree1 = [7,2,9,1,5,null,14];
        let integer = 3;
        expect(Checker(tree1, integer)).toEqual(true);
    });
    it('returns true if the tree has two elements that their summation is the given integer', () => {
        let tree2 = [7,2,9,2,5,null,14];
        let integer = 3;
        expect(Checker(tree2, integer)).toEqual(false);
    });
}   
);
