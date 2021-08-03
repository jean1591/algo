export const insertionSort = (arr: number[]): number[] => {
    for (
        let indexOfValueToPlace = 1;
        indexOfValueToPlace < arr.length;
        indexOfValueToPlace++
    ) {
        const valueOfindexOfValueToPlace = arr[indexOfValueToPlace];
        let checkIndex = indexOfValueToPlace - 1;

        while (
            arr[checkIndex] > valueOfindexOfValueToPlace &&
            checkIndex >= 0
        ) {
            arr[checkIndex + 1] = arr[checkIndex];
            checkIndex--;
        }

        arr[checkIndex + 1] = valueOfindexOfValueToPlace;
    }

    return arr;
};
