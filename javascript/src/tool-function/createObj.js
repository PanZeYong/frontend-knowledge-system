import { isType } from './utils.js';

/**
 * 模拟 Object.create 实现
 * 
 * @param { Object } proto 新创建对象的原型对象
 * @param { Object } propertiesObject 如果该参数被指定且不为 undefined，则该传入对象可枚举的自有属性将为新创建的对象添加具有对应属性名称的属性描述符
 * @returns 
 */
export const createObj = (proto, propertiesObject) => {
    const isObject = isType('Object')
    const isFunction = isType('Function')

    if (!isObject && !isFunction) {
        throw new TypeError('Object prototype may only be an Object: ' + proto)
    } 
    
    console.log(proto === null)
    function F () {}
    F.prototype = proto
    const obj = new F()

    if (proto === null) obj.__proto__ = proto

    if (propertiesObject !== undefined) {
        Object.defineProperties(obj, propertiesObject)
    }
    return obj
}