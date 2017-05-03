/**
 * Created by liushuai on 2017/5/2.
 */
/**
 * 快速排序
 * @param needSort
 * @param type
 * @param start
 * @param end
 * @returns {*}
 */
function quick(needSort, type = 'asc', start = undefined, end = undefined) {

    if (start === undefined && end === undefined) {
        start = 0;
        end = needSort.length - 1;
    }
    if (start >= end) {
        return needSort;
    }
    let middleValue = needSort[start];
    let i = start;
    let j = end;
    while (i < j) {
        while (j > i && ((type === 'asc' && needSort[j] > middleValue) || (type === 'des' && needSort[j] < middleValue))) {
            j--
        }

        if (i < j) {
            needSort[i] = needSort[j];
            i++;
        }

        while (i < j && ((type === 'asc' && needSort[i] < middleValue) || (type === 'des' && needSort[i] > middleValue))) {
            i++;
        }

        if (i < j) {
            needSort[j] = needSort[i];
            j--;
        }

    }

    needSort[i] = middleValue;
    needSort = quick(needSort, type, start, i - 1);
    needSort = quick(needSort, type, i + 1, end);
    return needSort;
}
export default quick;