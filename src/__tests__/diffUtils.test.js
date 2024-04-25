import {
  diffArray,
  diffObject,
} from '../diffUtils'

describe('diff()', () => {
  it('should diff two array datasets, ex 1', () => {
    const M1 = [
      {
        name: 'Jason',
        age: 39,
        title: 'Engineer',
        check: 1,
        empty: 'Nope',
        data: {
          worker: true,
          daysAvailable: 1
        },
        arr: [
          {
            name: 'Marc'
          }
        ],
        unCheck: 'Remove this'
      }
    ]

    const M2 = [
      {
        name: 'Jason',
        age: 40,
        title: 'Hello',
        check: 0,
        empty: 'Nope',
        data: {
          worker: true,
          daysAvailable: 0
        },
        arr: [
          {
            name: 'Mike'
          }
        ],
        unCheck: null
      }
    ]

    const final = [
      {
        age: 40,
        title: 'Hello',
        check: 0,
        data: {
          daysAvailable: 0
        },
        arr: [
          {
            name: 'Mike'
          }
        ],
        unCheck: null
      }
    ]

    const res = diffArray(M1, M2, { allowUndefinedNull: true })
    expect(res).toEqual(final)
  })

  it('should diff two array datasets, handle null to undefined', () => {
    const M1 = [
      {
        name: 'Jason',
        age: 39,
        title: 'Engineer',
        check: 1,
        empty: 'Nope',
        data: {
          worker: true,
          daysAvailable: 1
        },
        arr: [
          {
            name: 'Marc'
          }
        ],
        unCheck: 'Remove this',
        nullConvert: 'Convert this'
      }
    ]

    const M2 = [
      {
        name: 'Jason',
        age: 40,
        title: 'Hello',
        check: 0,
        empty: 'Nope',
        data: {
          worker: true,
          daysAvailable: 0
        },
        arr: [
          {
            name: 'Mike'
          }
        ],
        unCheck: undefined,
        nullConvert: null
      }
    ]

    const final = [
      {
        age: 40,
        title: 'Hello',
        check: 0,
        data: {
          daysAvailable: 0
        },
        arr: [
          {
            name: 'Mike'
          }
        ],
        unCheck: undefined,
        nullConvert: undefined
      }
    ]

    const res = diffArray(M1, M2, { allowUndefinedNull: true, convertNullToUndefined: true })
    expect(res).toEqual(final)
  })

  it('should diff two object datasets', () => {
    const M1 = {
      name: 'Jason',
      age: 39,
      title: 'Engineer',
      check: 1,
      empty: 'Nope',
      data: {
        worker: true,
        daysAvailable: 1
      },
      arr: [
        {
          name: 'Marc'
        }
      ],
      unCheck: 'Remove this',
      nullConvert: 'Convert this'
    }

    const M2 = {
      name: 'Jason',
      age: 40,
      title: 'Hello',
      check: 0,
      empty: 'Nope',
      data: {
        worker: true,
        daysAvailable: 0
      },
      arr: [
        {
          name: 'Mike'
        }
      ],
      unCheck: undefined,
      nullConvert: null
    }

    const final = {
      age: 40,
      title: 'Hello',
      check: 0,
      data: {
        daysAvailable: 0
      },
      arr: [
        {
          name: 'Mike'
        }
      ],
      unCheck: undefined,
      nullConvert: undefined
    }

    const res = diffObject(M1, M2, { allowUndefinedNull: true, convertNullToUndefined: true })
    expect(res).toEqual(final)
  })
})
