import { isType } from './utils.js';

/**
 * @description 深拷贝
 * @param {Object} obj
 * @returns {Object}
 */
export const deepCopy = obj => {
    const isObject = isType('Object')
    const isArray = isType('Array')

    if (!isObject(obj) && !isArray(obj)) {
        return obj
    }

    const newObj = isArray(obj) ? [] : {}

    for (let key in obj) {
        const value = obj[key]
        if (obj.hasOwnProperty(key)) {
            newObj[key] = (isObject(value) || isArray(value)) ? deepCopy(value) : value
        }
    }

    return newObj
}