class Matrix {
    constructor (arr) {
        if ( Array.isArray(arr) ) { // проверка что arr массив
            let cols;

            for ( let i = 0; i < arr.length; i++ ) {

                if ( Array.isArray(arr[i]) ) { // проверка что элементы arr массивы

                    if ( !cols ) { // известно ли необходимое колличство элеменов в элементах arr
                        cols = arr[i].length;
                    }

                    if ( cols === arr[i].length ) { // проверка что длина массива соответствует требуемой

                        for ( let j = 0; j < arr[i].length; j++ ) {

                            if ( typeof arr[i][j] !== 'number' ) { // проверка что элементы массивы - number
                                return undefined
                            }

                        }

                    } else {
                        return undefined
                    }

                } else {
                    return undefined
                }

            }

            this.matrix = arr;
        } else {
            return undefined
        }
    }

    sortRowElements() {

        if ( this.matrix && this.matrix.length ) {

            for ( let i = 0; i < this.matrix.length; i++ ) {
                this.matrix[i].sort( (a, b) => a - b );
            }

        } else {
            console.log('sortRowElements ERROR');
        }

    }

    static sumMatrix(m1, m2) {

        if ( (m1 && m1.matrix) && (m2 && m2.matrix) &&
             (m1.matrix.length === m2.matrix.length) &&
             (m1.matrix[0].length === m2.matrix[0].length) ) {

            let result = [];

            for ( let i = 0; i < m1.matrix.length; i++ ) {

                result[i] = [];

                for ( let j = 0; j < m1.matrix[0].length; j++ ) {
                    result[i][j] = m1.matrix[i][j] + m2.matrix[i][j];
                }

            }

            return result

        } else {
            console.log('sumMatrix ERROR');
        }

    }

    static multiplicationMatrix(m1, m2) {

        if ( (m1 && m1.matrix) && (m2 && m2.matrix) &&
             (m1.matrix[0].length === m2.matrix.length) ) {

            let result = [];

            for ( let i = 0; i < m2.matrix.length; i++ ) {

                result[i] = [];

                for ( let j = 0; j < m2.matrix[0].length; j++ ) {

                    result[i][j] = 0;

                    for ( let k = 0; k < m2.matrix.length; k++ ) {
                        result[i][j] += m1.matrix[i][k] * m2.matrix[k][j]
                    }

                }

            }

            return result

        } else {
            console.log('multiplicationMatrix ERROR');
        }

    }
}

const A = new Matrix(
    [
        [5, 6, -1],
        [3, 0, 10],
        [2, -3, -8],
    ]
);

const B = new Matrix(
    [
        [2, -1, -1],
        [13, 10, -10],
        [5, 3, 0],
    ]
);

const C = new Matrix(
    [
        [5, 6, -1],
        [3, 0, 10],
    ]
);

const D = new Matrix(
    [
        [5, 6, -1],
        [3, 0, 10],
        1
    ]
);

const E = new Matrix(1);

const F = new Matrix(
    [
        [5],
    ]
);

const J = new Matrix(
    [
        [5, 6, -1],
        [3, 0, 10],
        [1, 2]
    ]
);

const K = new Matrix(
    [
        [5, 6, -1],
        [3, 0, '10'],
    ]
);

const M = new Matrix(
    [
        [5, 6],
        [3, 0],
    ]
);

const L = new Matrix(
    [
        [2, -1],
        [13, 10],
    ]
);

const N = new Matrix(
    [
        [2],
        [13],
    ]
);

console.log('A', A);
console.log('B', B);
console.log('C', C);
console.log('D', D);
console.log('E', E);
console.log('F', F);
console.log('J', J);
console.log('K', K);

console.log( Matrix.sumMatrix(A, A) );
console.log( Matrix.sumMatrix(A, C) );
console.log( Matrix.sumMatrix(A, F) );

console.log( Matrix.multiplicationMatrix(A, B) );
console.log( Matrix.multiplicationMatrix(M, L) );
console.log( Matrix.multiplicationMatrix(M, N) );

A.sortRowElements();
B.sortRowElements();
C.sortRowElements();
E.sortRowElements();
