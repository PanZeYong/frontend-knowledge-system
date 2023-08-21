import { throttle } from './throttle';
import { deepCopy } from './deepCopy';
import {flattenObject } from './flattenObject'
import { flattenArray } from './flattenArray'
import { instanceOf } from './instanceOf'
import { newObj } from './newObj'
import { apply } from './apply'
import { call } from './call'
import { bind } from './bind'
import { createObj } from './createObj'

export { throttle, deepCopy, flattenObject, flattenArray, instanceOf, newObj, apply, call, bind, createObj };

// const path = require('path')
// const fs = require('fs')

// fs.readdir('./javascript/src/tool-function', (err, files) => {
//     console.log('Files: ', files)
//     files.filter(filename => !filename.includes('index.js')).forEach(filename => {

//     })
// })
