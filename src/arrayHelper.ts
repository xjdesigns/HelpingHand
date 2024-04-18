/**
 * Add immutable values to an array
 *
 * ```ts
 * import { addValueArray } from 'helping_hand'
 * const newArray = addValueArray(...);
 * ```
 * @category Array Helper
 */
export function addValueArray (arr: {}[], value: {}): {}[] {
  const newArr: {}[] = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    newArr.push(immutableObject(arr[i]))
  }
  newArr.push(value)
  return newArr
}

/**
 * Create an immutable object of 1 level deep
 *
 * ```ts
 * import { immutableObject } from 'helping_hand'
 * const newObject = immutableObject(...);
 * ```
 * @category Array Helper
 */
export function immutableObject (obj: {}): {} {
  return {...obj}
}

/**
 * Create a deep immutable object
 *
 * ```ts
 * import { deepImmutable } from 'helping_hand'
 * const newDeep = deepImmutable(...);
 * ```
 * @category Array Helper
 */
export function deepImmutable (arr: {}[], objOnly: boolean): {}[] {
  if (objOnly) {
    return JSON.parse(JSON.stringify(arr))
  } else {
    return recursiveCopy(arr)
  }
}

/**
 * Copy and array of objects recursively
 *
 * ```ts
 * import { recursiveCopy } from 'helping_hand'
 * const copy = recursiveCopy(...);
 * ```
 * @category Array Helper
 */
export function recursiveCopy (arr: {}[]): {}[] {
  const newArr = loopArray(arr)

  return newArr
}

/**
 * Loops through an array checking for types, creating a new array
 *
 * ```ts
 * import { loopArray } from 'helping_hand'
 * const looped = loopArray(...);
 * ```
 * @category Array Helper
 */
export function loopArray (arr: any[]): any[] {
  const len: number = arr.length
  const newArr: any[] = []
  let newVal

  for (let i = 0; i < len; i++) {

    if (Array.isArray(arr[i])) {
      newVal = loopArray(arr[i])
      newArr.push(newVal)
    } else if (isObject(arr[i])) {
      newVal = loopObject(arr[i])
      newArr.push(newVal)
    } else {
      newArr.push(arr[i])
    }
  }

  return newArr
}

/**
 * Loops through an object checking for types, creating a new object
 *
 * ```ts
 * import { loopObject } from 'helping_hand'
 * const looped = loopObject(...);
 * ```
 * @category Array Helper
 */
export function loopObject (obj: {}): {} {
  const newObj: any = {}

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = loopArray(obj[key])
    } else if (isObject(obj[key])) {
      newObj[key] = loopObject(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

/**
 * Checks value for object type
 *
 * ```ts
 * import { isObject } from 'helping_hand'
 * const isTrue = isObject(...);
 * ```
 * @category Array Helper
 */
export function isObject (val: any): boolean {
  return typeof val === 'object' && val !== null
}
