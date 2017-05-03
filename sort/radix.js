/**
 * Created by liushuai on 2017/5/2.
 */
import 'babel-polyfill'

function radix(needSort, type = 'asc') {

    let typeArray = ['asc', 'des'];
    if (!typeArray.includes(type)) {
        throw 'type can be "asc" or "des", default is "asc"';
    }

    let max = needSort[0];
    for (let i = 1; i < needSort.length; i++) {
        if (needSort[i] > max) {
            max = needSort[i];
        }
    }
    let tmpArray = [];

    for (let i = 0; i < 10; i++) {
        tmpArray[i] = [];
    }
    let loop = (max + '').length;
    for (let j = 1; j <= loop; j++) {
        for (let i = 0; i < needSort.length; i++) {
            let tmpInt = needSort[i] + '';
            if (tmpInt.length < j) {
                tmpArray[0].push(parseInt(needSort[i]));
            } else {
                let index = parseInt(tmpInt[tmpInt.length - j]);
                tmpArray[index].push(parseInt(needSort[i]));
            }
        }
        let l = 0;
        if (type === 'asc') {
            for (let i = 0; i < 10; i++) {
                for (let k = 0; tmpArray[i].length > 0 && k < tmpArray[i].length; k++) {
                    needSort[l] = tmpArray[i][k];
                    l++;
                }
            }
        } else if (type === 'des') {
            for (let i = 9; i >= 0; i--) {
                for (let k = 0; tmpArray[i].length > 0 && k < tmpArray[i].length; k++) {
                    needSort[l] = tmpArray[i][k];
                    l++;
                }
            }
        }

        for (let i = 0; i < 10; i++) {
            tmpArray[i] = [];
        }
    }
    return needSort;
}


export default radix;