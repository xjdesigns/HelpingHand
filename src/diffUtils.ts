import { isArray, isObject } from "./arrayHelper"

/**
 * @category Diff Utility
 */
export type IntType = { [key: string | number]: any }[]
/**
 * @category Diff Utility
 */
export type IntArrayType = { [key: string]: any }[]
/**
 * @category Diff Utility
 */
export type IntObjectType = { [key: string]: any }
/**
 * @category Diff Utility
 */
export type UpdateType = { [key: string]: any }[]
/**
 * @category Diff Utility
 */
export type UpdateObjectType = { [key: string]: any }
/**
 * @category Diff Utility
 */
export type DiffType = any
/**
 * @category Diff Utility
 */
export type DiffOptionsType = {
  allowUndefinedNull?: boolean,
  convertNullToUndefined?: boolean
}

/**
 * Get the difference from 2 array of objects
 *
 * ```ts
 * import { diffArray } from 'helping_hand'
 * const newDiffArray = diffArray(...);
 * ```
 * @category Diff Utility
 */
export function diffArray (int: IntType, update: UpdateType, options: DiffOptionsType = {}) {
  const ilen = int.length
  const theDiff: {}[] = []

  for (let i = 0; i < ilen; i++) {
    if (update[i] != null) {
      theDiff.push({})
      for(const key in int[i]) {
        _diffInnerCheck(int[i][key], update[i][key], theDiff[i], key, options)
      }
    }
  }

  return theDiff
}

/**
 * Get the difference from 2 objects
 *
 * ```ts
 * import { diffObject } from 'helping_hand'
 * const newDiffObject = diffObject(...);
 * ```
 * @category Diff Utility
 */
export function diffObject (int: {}, update: {}, options: DiffOptionsType = {}) {
  const theDiff: {} = {}

  if (update != null) {
    for(const key in int) {
      _diffInnerCheck(int[key], update[key], theDiff, key, options)
    }
  }

  return theDiff
}

function _diffInnerArray (int: IntArrayType, update: UpdateType, diffVal: DiffType) {
  const ilen = int.length
  for (let i = 0; i < ilen; i++) {
    if (update[i] != null) {
      diffVal.push({})
      for(const key in int[i]) {
        _diffInnerCheck(int[i][key], update[i][key], diffVal[i], key)
      }
    }
  }
}

function _diffInnerObject (int: IntObjectType, update: UpdateObjectType, diffVal: DiffType) {
  for(const key in int) {
    _diffInnerCheck(int[key], update[key], diffVal, key)
  }
}

function _diffInnerCheck (int: IntType, update: UpdateType, diffVal: DiffType, key: string, options: DiffOptionsType = {}) {
  if (update != null) {
    if (int !== update) {
      if (isArray(update)) {
        diffVal[key] = []
        _diffInnerArray(int, update, diffVal[key])
      } else if (isObject(update)) {
        diffVal[key] = {}
        _diffInnerObject(int, update, diffVal[key])
      } else {
        diffVal[key] = update
      }
    }
  }
  if (options?.allowUndefinedNull && update == null) {
    diffVal[key] = options?.convertNullToUndefined ? undefined : update
  }
}

interface LengthOfArg {
  length: number;
}
 
function logLength<Type extends LengthOfArg>(arg: Type): Type {
  console.log(arg.length); 
  return arg;
}