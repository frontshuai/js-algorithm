/**
 *
 * Created by liushuai on 2017/4/28.
 */
import 'babel-polyfill';
import bubble from '../sort/bubble';
import insertion from '../sort/insertion';
import merge from '../sort/merge';
import heap from '../sort/heap';
import selection from '../sort/selection';
import quick from '../sort/quick';
import radix from '../sort/radix';
import count from '../sort/count';
import chai from 'chai';

let expect = chai.expect;

describe('冒泡排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(bubble(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(bubble(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});


describe('插入排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(insertion(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(insertion(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});

describe('归并排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(merge(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(merge(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});

describe('堆排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(heap(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(heap(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});

describe('选择排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(selection(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(selection(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});

describe('快速排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(quick(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(quick(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});


describe('基数排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(radix(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(radix(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});


describe('计数排序测试', function() {
    it('生成的数组应该是升序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(count(needSort)).to.be.eql([0, 21, 32, 33, 2323, 3323]);
    });

    it('生成的数组应该是降序的', function() {
        let needSort = [33, 0, 2323, 32, 21, 3323];
        expect(count(needSort, 'des')).to.be.eql([3323, 2323, 33, 32, 21, 0]);
    });
});