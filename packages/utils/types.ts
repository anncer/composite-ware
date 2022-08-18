import { isArray, isObject } from '@vue/shared'
import { isNil } from 'lodash'

import get from 'lodash/get'
import set from 'lodash/set'
import has from 'lodash/has'
import objectPick from 'lodash/pick'
import objectOmit from 'lodash/omit'

export {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol,
} from '@vue/shared'

export { get, set, has, objectPick, objectOmit }

export { isBoolean, isNumber } from '@vueuse/core'

export { isVNode } from 'vue'

export const isUndefined = (val: any): val is undefined => val === undefined

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val).length)

export const isElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false
  return e instanceof Element
}

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
  return isNil(prop)
}

// 检测是否是数组 不是则返回-1 是则返回长度
export const arrayLen = (arr: any[]) => {
  return isArray(arr) ? arr.length : -1;
};

// 检测对象是不是空对象
export const isEmptyObj = (obj: object) => {
  return Object.keys(obj).length <= 0;
};


// 判读是否非window对象
export const isWindow = (obj: any) => {
  return obj !== null && obj === obj.window;
};
// 判断参数是不是null
export const isNull = (ele: any) => {
  return ele === null;
};

// 判断参数是不是空，排除0
export const isNone = (some: any): boolean => {
  return some === 0 ? true : Boolean(some);
};

// 检测某个对象时候含有某个key
export function isProperty<T extends object>(obj: T, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


