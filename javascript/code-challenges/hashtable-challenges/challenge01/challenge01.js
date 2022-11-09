// Write here the code challenge solution
function Checker (tree, integer) {
    let indexOne = 0;
    let indexTwo = 1;
    while (indexOne < tree.length) {
        while (indexTwo < tree.length) {
            if (tree[indexOne] + tree[indexTwo] === integer) {
                return true;
            }
            indexTwo++;
        }
        indexOne++;
        indexTwo = indexOne + 1;
    } return false;

}
module.exports = Checker;
