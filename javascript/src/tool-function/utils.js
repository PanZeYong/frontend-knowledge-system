const toString = Object.prototype.toString;

export const isType = type => value => toString.call(value) === `[object ${type}]`;