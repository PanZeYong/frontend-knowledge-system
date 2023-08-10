import { isType } from './utils.js';

export const flattenArray = arr => {
    const isArray = isType('Array')

    if (!isArray(arr)) return arr

    return arr.reduce((result, item) => {
        if (isArray(item)) {        
            result.push(...flattenArray(item))
        } else {
            result.push(item)
        }
        return result
    }, [])

    // const flatten = (target, value) => {
    //     if (isArray(value)) {
    //         value.forEach(item => {
    //             if (isArray(item)) {
    //                 flatten(target, item)
    //             } else {
    //                 target.push(item)
    //             }
    //         })
    //     } else {
    //         target.push(value)
    //     }
    // }

    // const result = []

    // arr.forEach(item => {
    //     flatten(result, item)
    // })

    // return result
}