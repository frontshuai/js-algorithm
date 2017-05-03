/**
 * Created by liushuai on 2017/5/2.
 */
function selection(needSort, type = 'asc') {
    let typeArray = ['asc', 'des'];
    if (!typeArray.includes(type)) {
        throw 'type can be "asc" or "des", default is "asc"';
    }

    for (let i = 0; i < needSort.length; i++) {
        let changeIndex = i;
        for (let j = i + 1;j < needSort.length; j++) {
            if ((type === 'asc' && needSort[j] < needSort[changeIndex]) || (type === 'des' && needSort[j] > needSort[changeIndex])) {
                changeIndex = j;
            }
        }

        if (changeIndex !== i) {
            let tmp = needSort[i];
            needSort[i] = needSort[changeIndex];
            needSort[changeIndex] = tmp;
        }
    }
    return needSort;
}

export default selection;