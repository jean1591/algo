import {
    elevenToOne,
    singleElementArray,
    tenToOne,
    tenToOneShuffled,
    randomNumbers,
    oneToTen,
    oneToEleven,
    randomNumbersSorted,
} from './arrays';
import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
    it.each`
        unsortedArray         | expected
        ${[]}                 | ${[]}
        ${singleElementArray} | ${singleElementArray}
        ${tenToOne}           | ${oneToTen}
        ${tenToOneShuffled}   | ${oneToTen}
        ${elevenToOne}        | ${oneToEleven}
        ${randomNumbers}      | ${randomNumbersSorted}
    `(
        'sorts the array $unsortedArray',
        ({
            unsortedArray,
            expected,
        }: {
            unsortedArray: number[];
            expected: number[];
        }) => {
            expect(bubbleSort(unsortedArray)).toEqual(expected);
        },
    );
});
