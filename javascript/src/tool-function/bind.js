/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 * 
 * bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
 * 而其余参数将作为新函数的参数，供调用时使用。
 * 
 * 非构造函数版本
 */
export function bindWithoutConstrcutor () {

    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    // this 指原始函数 a，即 a.bind
    const self = this
    const args = Array.prototype.slice.call(arguments, 1)
    // bind 第一个参数
    const context = arguments[0]

    console.log('This: ', this, context)

    return function () {
        const bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(context ,args.concat(bindArgs))
    }
}

/**
 * 构造函数模拟版本
 */
export function bind () {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    const context = arguments[0]
    const self = this
    const args = Array.prototype.slice.call(arguments, 1)

    const fNOP = function () {}

    const fBind = function () {
        const bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
    }

    fNOP.prototype = this.prototype
    fBind.prototype = new fNOP()

    return fBind
}