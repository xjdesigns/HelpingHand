export function addValueArray (arr: {}[], value: {}): {}[] {
  const newArr: {}[] = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    newArr.push(immutableObject(arr[i]))
  }
  newArr.push(value)
  return newArr
}

export function immutableObject (obj: {}): {} {
  return {...obj}
}

export function deepImmutable (arr: {}[], objOnly: boolean): {}[] {
  if (objOnly) {
    return JSON.parse(JSON.stringify(arr))
  } else {
    return recursiveCopy(arr)
  }
}


export function recursiveCopy (arr: {}[]): {}[] {
  const newArr = loopArray(arr)

  return newArr
}

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

export function loopObject (obj: {}): {} {
  let newObj: any = {}

  for (let key in obj) {
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

export function isObject (val: any): boolean {
  return typeof val === 'object' && val !== null
}
