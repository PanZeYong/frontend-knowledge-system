import { isType } from './utils.js';

const isNeedFlatten = (value) => isType('Object')(value) || isType('Array')(value)

const flatten = (targetObj, value, key) => {
    for (let k in value) {
        const v = value[k]
        if (isNeedFlatten(v)) {
            flatten(targetObj, v, `${key}.${k}`)
        } else {
            targetObj[`${key}.${k}`] = value[k]
        }
    }
}
/**
 * 对象扁平化
 * 
 * @param {Object} obj 
 */
export const flattenObject = obj => {
    const newObj = {}

    for (let key in obj) {
        const value = obj[key]
        if (isNeedFlatten(value)) {
            flatten(newObj, value, key)
        } else {
            newObj[key] = value
        }
    }

    return newObj
}