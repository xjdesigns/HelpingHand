/**
 * Remap an arrays object keys
 *
 * ```ts
 * import { remapData } from 'helping_hand'
 * const remappedData = remapData(...);
 * ```
 * @category Data Utility
 * 
 * @example
 * This will remap the name key to firstname
 * ```ts
 * const data = [
 *  {
 *    name: 'Jason'
 *  }
 * ]
 * const dataMap = {
 *   firstname: 'name'
 * }
 * 
 * const remappedData = remapData(data, dataMap);
 * ```
 *
 */
export function remapData (data: {}[], dataMap: {}): {}[] {
  return data.map(d => {
    const mapped = {}
    for (const key in dataMap) {
      mapped[key] = d[dataMap[key]]
    }
    return mapped
  })
}

/**
 * Joins additional data to the provided data set
 *
 * ```ts
 * import { remapData } from 'helping_hand'
 * const remappedData = remapData(...);
 * ```
 * @category Data Utility
 * 
 * @example
 * This will remap the name key to firstname
 * ```ts
 * const data = [
 *  {
 *    name: 'Jason'
 *  }
 * ]
 * const dataMap = {
 *   firstname: 'name'
 * }
 * 
 * const remappedData = remapData(data, dataMap);
 * ```
 *
 */
export function addDataKeys (data: {}[], additionalData: {}): {}[] {
  return data.map(d => {
    const mapped = { ...d, ...additionalData }
    return mapped
  })
}
