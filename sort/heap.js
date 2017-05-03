/**
 * Created by liushuai on 2017/5/2.
 */
/**
 * 堆排序
 * @param needSort
 * @param type
 * @returns {*}
 */
function heap(needSort, type = 'asc') {

    for (let i = needSort.length; i > 0; i--) {

        needSort = maxHeap(needSort, i, type);

    }
    return needSort;
}

function maxHeap(needSort, end, type) {
    if (end === 1) {
        return needSort;
    }
    let level = Math.floor(end/2) - 1;
    for (let i = level;i >= 0; i--) {

        let changeIndex = level;
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        if (right < end) {
            if ((type === 'asc' && needSort[left] >= needSort[right]) || (type === 'des' && needSort[left] <= needSort[right])) {
                changeIndex = left;
            } else {
                changeIndex = right;
            }
        } else {
            changeIndex = left;
        }
        if ( (type === 'asc' && needSort[changeIndex] > needSort[i]) || (type === 'des' && needSort[changeIndex] < needSort[i]) ) {
            let tmp = needSort[changeIndex];
            needSort[changeIndex] = needSort[i]
            needSort[i] = tmp;
        }
    }

    let tmp = needSort[0];
    needSort[0] = needSort[end - 1];
    needSort[end - 1] = tmp;

    return needSort;
}

export default heap;
