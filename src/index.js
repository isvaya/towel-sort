
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    return matrix.reduce((a, b, index) => {
        if (index % 2 === 0) {
            return a.concat(b);
        } else {
            return a.concat(b.reverse());
        }
    }, []);
}
