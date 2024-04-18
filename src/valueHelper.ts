/**
 * Join values together when next is truthy
 *
 * ```ts
 * import { joinValues } from 'helping_hand'
 * const joined = joinValues(...);
 * ```
 * @category Value Helper
 */
export function joinValues (prev: string, next: string): string {
  const val = next ? (prev += next) : prev
  return val
}

/**
 * Sanitize a number input, removing  `.`
 *
 * ```ts
 * import { sanitizeNumInput } from 'helping_hand'
 * const sanitized = sanitizeNumInput(...);
 * ```
 * @category Value Helper
 */
export function sanitizeNumInput (val: string): string {
  const cleanVal = val.replace('.', '')
  return cleanVal
}

/**
 * Remove all leading zeros from an input
 *
 * ```ts
 * import { removeAllLeadingZeros } from 'helping_hand'
 * const removed = removeAllLeadingZeros(...);
 * ```
 * @category Value Helper
 */
export function removeAllLeadingZeros (val: string): string {
  return val.replace(/^0+/, '')
}

/**
 * Slice the leading 0 from the input
 *
 * ```ts
 * import { sliceLeadingZero } from 'helping_hand'
 * const sliced = sliceLeadingZero(...);
 * ```
 * @category Value Helper
 */
export function sliceLeadingZero (val: string): string {
  if (val.charAt(0) === '0') {
    val = val.slice(1)
  }
  return val
}

/**
 * Remove the last character from the string
 *
 * ```ts
 * import { removeLastChar } from 'helping_hand'
 * const removed = removeLastChar(...);
 * ```
 * @category Value Helper
 */
export function removeLastChar (val: string): string {
  const newVal = val.substring(0, val.length - 1)
  return newVal
}

/**
 * Convert a string to a number
 *
 * ```ts
 * import { stringToNum } from 'helping_hand'
 * const num = stringToNum(...);
 * ```
 * @category Value Helper
 */
export function stringToNum (val: string): number {
  return +val
}

/**
 * Convert a percentage to a decimal format
 *
 * ```ts
 * import { getPercentAsDecimal } from 'helping_hand'
 * const decimal = getPercentAsDecimal(...);
 * ```
 * @category Value Helper
 */
export function getPercentAsDecimal (percent: number, val: number): number {
  const newVal = percent / 100 * val
  return newVal
}

/**
 * Format a value to a decimal string
 *
 * ```ts
 * import { formatValueToDecimal } from 'helping_hand'
 * const decimal = formatValueToDecimal(...);
 * ```
 * @category Value Helper
 */
export function formatValueToDecimal (val: number): string {
  return val ? val.toFixed(2) : '0.00'
}

/**
 * Convert dollars to pennies
 *
 * ```ts
 * import { dollarsToPennies } from 'helping_hand'
 * const pennies = dollarsToPennies(...);
 * ```
 * @category Value Helper
 */
export function dollarsToPennies (amount: string): number {
  return Math.round(100 * parseFloat(amount.replace(/[$,]/g, '')))
}

/**
 * Convert pennies to dollars
 *
 * ```ts
 * import { penniesToDollars } from 'helping_hand'
 * const dollars = penniesToDollars(...);
 * ```
 * @category Value Helper
 */
export function penniesToDollars (amount: number): string {
  if (amount > 100) {
    const dollar = amount / 100
    return formatValueToDecimal(dollar)
  }
  return (amount / 100).toString()
}
