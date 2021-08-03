export const bubbleSort = (arr: number[]): number[] => {
    for (
        let indexOfKthLargestValue = arr.length - 1;
        indexOfKthLargestValue > 0;
        indexOfKthLargestValue--
    ) {
        for (
            let tempIndexOfKthLargestValue = 0;
            tempIndexOfKthLargestValue < indexOfKthLargestValue;
            tempIndexOfKthLargestValue++
        ) {
            if (
                arr[tempIndexOfKthLargestValue] >
                arr[tempIndexOfKthLargestValue + 1]
            ) {
                const temp = arr[tempIndexOfKthLargestValue + 1];
                arr[tempIndexOfKthLargestValue + 1] =
                    arr[tempIndexOfKthLargestValue];
                arr[tempIndexOfKthLargestValue] = temp;
            }
        }
    }

    return arr;
};
