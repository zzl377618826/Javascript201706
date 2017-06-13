/**
 * Created by liwenli on 2017/6/13.
 */
var utils = (function () {
    /**
     * listToAry: 将类数组转化为数组
     * @param likeAry 类数组
     * @returns newAry 转化后的数组
     */
    function listToAry(likeAry) {
        try {
            return [].slice.call(likeAry, 0);
        }catch (e) {
            var arr = [];
            for(var i = 0; i < likeAry.length; i++){
                arr.push(likeAry[i]);
            }
            return arr;
        }
    }
    return {
       listToAry: listToAry
    }
})();