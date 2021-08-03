export const mergeSort = (arr: number[]): number[] => {
    const { length } = arr;
    if (length === 1 || length === 0) return arr;

    const leftSorted = mergeSort(arr.slice(0, length / 2));
    const rightSorted = mergeSort(arr.slice(length / 2, length));

    return mergeSubArrays(leftSorted, rightSorted);
};

export const mergeSubArrays = (
    leftSorted: number[],
    rightSorted: number[],
): number[] => {
    const mergedArr: number[] = [];

    while (leftSorted.length && rightSorted.length) {
        if (leftSorted[0] < rightSorted[0]) {
            mergedArr.push(leftSorted.shift() as number);
        } else {
            mergedArr.push(rightSorted.shift() as number);
        }
    }

    return [...mergedArr, ...leftSorted, ...rightSorted];
};
