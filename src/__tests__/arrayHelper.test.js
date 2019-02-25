import {
  addValueArray,
  deepImmutable,
} from '../arrayHelper'

describe('deepImmutable()', () => {
  it('should create a new copy of the array passed', () => {
    let example = [{
      hello: 'world',
      money: 1234,
      func: function () {
        return 1 + 1
      },
      obj: {
        moreProps: 'woot',
        anotherArray: [{
          getit: 'again',
        }]
      },
      arrayMe: ['12321', 3453],
      arrayObjects: [{
        lookAtIt: {
          yessir: 'may I have another',
        }
      }]
    }, {
      hello: 'world',
      money: 1234,
      func: function () {
        return 1 + 1
      },
      obj: {
        moreProps: 'woot',
        anotherArray: [{
          getit: 'again',
        }]
      },
      arrayMe: ['12321', 3453],
      arrayObjects: [{
        lookAtIt: {
          yessir: 'may I have another',
        }
      }]
    }]

    const res = deepImmutable(example)
    // change original to verify
    example[0].obj.anotherArray[0].getit = 'changed'
    example[1].obj.anotherArray[0].getit = 'changed'
    expect(res).not.toEqual(example)
    expect(example[0].obj.anotherArray[0].getit).toEqual('changed')
    expect(res[0].obj.anotherArray[0].getit).toEqual('again')
    expect(res[0].func()).toEqual(2)
  })

  it('should verify array of arrays', () => {
    const example = [
      [{
        name: 'Jason',
        func: () => 1 + 1
      }],
      ['1234', 1111]
    ]
    const res = deepImmutable(example)
    // change to verify
    example[0][0].name = 'I changed'
    example[0][0].func = () => 2 + 2
    expect(res).not.toEqual(example)
    expect(res[0][0].func()).toEqual(2)
    expect(example[0][0].func()).toEqual(4)
  })

  it('should verify when objOnly is set to true', () => {
    const example = [{
      name: 'jason',
      num: 1234,
      inner: ['1234'],
      innerObj: [{
        woot: 'woot'
      }]
    }]
    const res = deepImmutable(example, true)
    example[0].name = 'frank'
    example[0].innerObj[0]['newKey'] = 'Added'
    expect(res).not.toEqual(example)
  })
})

describe('addValueArray()', () => {
  it('should return a new array with the value added', () => {
    const arr = [{
      name: 'Jason',
    }]
    const obj = {
      name: 'Frank',
    }
    const expected = [{
      name: 'Jason',
    }, {
      name: 'Frank',
    }]
    const res = addValueArray(arr, obj)
    // change original and verify
    arr[0].name = 'Tony'
    expect(res).toEqual(expected)
  })
})
