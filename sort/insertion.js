/**
 * Created by liushuai on 2017/5/1.
 */

/**
 * 插入排序
 * @param needSort 待排序数组
 * @param type
 */
function insertion(needSort, type = 'asc') {

    let typeArray = ['asc', 'des'];
    if (!typeArray.includes(type)) {
        throw 'type can be "asc" or "des", default is "asc"';
    }

    for (let i = 1; i < needSort.length; i++) {
        let key = needSort[i];
        let j = i - 1;
        for (; j >= 0 && continueSort(needSort[j], key, type); j--) {
            needSort[j + 1] = needSort[j];
        }
        needSort[j + 1] = key;

    }
    return needSort;
}

/**
 * 判定是否继续排序
 * @param needSort
 * @param j
 * @param key
 * @param type
 * @returns {boolean}
 */
function continueSort(j, key, type) {
    if (type === 'des' && j < key) {
        return true;
    } else if (type === 'asc' && j > key) {
        return true;
    }
    return false;
}

export default insertion;