export const throttle = (fn, delay) => {
    let previous = 0
    let timer = null

    return function () {
        const context = this
        const args = arguments

        let now = Date.now()
        if (now - previous >= delay) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }

            previous = now
            fn.apply(context, args)
        } else if (!timer) {
            timer = setTimeout(function () {
                fn.apply(context, args);
                previous = now
            }, delay)
        }
    }
}