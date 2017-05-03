/**
 * Created by liushuai on 2017/5/3.
 */
/**
 * 计数排序
 * @param needSort
 * @param type
 * @returns {Array}
 */
function count(needSort, type = 'asc') {
    let maxNum = Math.max(needSort);
    let mixNum = Math.min(needSort);
    let countArray = [];
    for (let i = 0; i < needSort.length; i++) {
        if (countArray[needSort[i]] === undefined) {
            countArray[needSort[i]] = 1;
        } else {
            countArray[needSort[i]]++;
        }
    }
    let result = [];
    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] !== undefined) {
            for (let j = 0; j < countArray[i]; j++) {
                if (type === 'asc') {
                    result.push(i);
                } else {
                    result.unshift(i);
                }
            }
        }
    }
    return result;
}

export default count;