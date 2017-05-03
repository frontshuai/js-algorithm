/**
 * Created by liushuai on 2017/4/28.
 */
function BubbleSort(needSort, type = 'asc') {
    if (!Array.isArray(needSort)) {
        throw 'needSort param must be array';
    }
    let typeArray = ['asc', 'des'];
    if (!typeArray.includes(type)) {
        throw 'type can be "asc" or "des", default is "asc"';
    }

    for (let i = 0; i <= needSort.length - 1; i++) {
        for (let j = needSort.length - 1; j > i; j--) {
            if ((type == 'asc' && needSort[j - 1] > needSort[j]) || (type == 'des' && needSort[j - 1] < needSort[j])) {
                let tmp = needSort[j];
                needSort[j] = needSort[j-1];
                needSort[j-1] = tmp;
            }
        }
    }
    return needSort;
}

export default BubbleSort;