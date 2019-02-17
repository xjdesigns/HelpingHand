export function joinValues (prev: string, next: string): string {
  const val = next ? (prev += next) : prev
  return val
}

export function sanitizeNumInput (val: string): string {
  const cleanVal = val.replace('.', '')
  return cleanVal
}

export function removeAllLeadingZeros (val: string): string {
  return val.replace(/^0+/, '')
}

export function sliceLeadingZero (val: string): string {
  if (val.charAt(0) === '0') {
    val = val.slice(1)
  }
  return val
}

export function removeLastChar (val: string): string {
  const newVal = val.substring(0, val.length - 1)
  return newVal
}

export function stringToNum (val: string): number {
  return +val
}

export function getPercentAsDecimal (percent: number, val: number): number {
  const newVal = percent / 100 * val
  return newVal
}

export function formatValueToDecimal (val: number): string {
  return val ? val.toFixed(2) : '0.00'
}

export function dollarsToPennies (amount: string): number {
  return Math.round(100 * parseFloat(amount.replace(/[$,]/g, '')))
}

export function penniesToDollars (amount: number): string {
  if (amount > 100) {
    const dollar = amount / 100
    return formatValueToDecimal(dollar)
  }
  return (amount / 100).toString()
}
