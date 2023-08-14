/**
 * 判断某个实例是否属于某个构造函数或者父类型的实例
 * 
 * @param {Object} left 对象实例
 * @param {Object} right 构造函数或者父类型实例
 * @returns {boolean}
 */
const instanceOf = (left, right) => {
    right = right.prototype
    left = left.__proto__

    while (true) {
        if (left === null) {
            return false
        } 
        
        if (left === right) {
            return true
        } 
        
        left = left.__proto__
    }
}