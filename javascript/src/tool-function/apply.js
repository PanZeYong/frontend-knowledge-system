/**
 * 模拟实现 apply
 * 
 * 实现步骤：
 * 1. 将函数设置为对象的属性
 * 2. 执行函数
 * 3. 删除函数
 */
export function apply (context) {
    var context = Object(context) || window
    context.fn = this

    let result 
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }

    delete context.fn
    return result
}