/**
 * 模拟 call 函数实现
 * 
 * 实现步骤如下：
 * 1. 将函数设置为对象属性
 * 2. 执行函数
 * 3. 删除函数
 */
export function call (context, ...args) {
    var context = context || window
    context.fn = this

    return context.fn(...args)
}