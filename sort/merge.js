/**
 * Created by liushuai on 2017/5/1.
 */
/**
 * 归并排序
 * @param needSort
 * @param type
 * @returns {*}
 */
function merge(needSort, type = 'asc') {
    if (needSort.length === 1) {
        return needSort;
    }
    let mid = Math.floor(needSort.length / 2);
    let left = needSort.slice(0, mid);
    let right = needSort.slice(mid, needSort.length);
    let result = mergeArray(merge(left, type), merge(right, type), type);
    return result;
}

/**
 * 合并排序过的数组
 * @param left
 * @param right
 * @param type
 * @returns {Array.<*>}
 */
function mergeArray(left, right, type) {
    let result = [];
    while (left.length && right.length) {
        if ((type === 'asc' && left[0] >= right[0]) || (type === 'des' && left[0] <= right[0])) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }


    return result.concat(left, right);
}

export default merge;