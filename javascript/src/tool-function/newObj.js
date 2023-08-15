import { isType } from './utils.js';

/**
 * 模拟 new 操作符实现
 * 
 * 实现步骤：
 * 1. 创建新对象 obj;
 * 2. 给新对象 obj 的内部属性赋值，⽐如 [[Prototype]] 构造原型链；（如果构造函数的原型是对象类型，则指向构造函数的原型;
 *    否则指向 Object 的原型。obj.proto = F.prototype）
 * 3. 执行构造函数中的代码，新对象会绑定到函数调用的 this; 
 * 4. 如果构造函数内部返回对象类型数据，则返回该对象类型；否则返回新对象 obj。
 */
export const newObj = () => {
    const isObject = isType('Object')

    const obj = new Object()
    const constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = constructor.prototype
    const result = constructor.apply(obj, arguments)
    return isObject(result) ? result : obj
}