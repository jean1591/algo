import { mergeSort } from './mergeSort';
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

describe('mergeSort', () => {
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
            expect(mergeSort(unsortedArray)).toEqual(expected);
        },
    );
});
