import {
  searchDataByKeys,
} from '../searchUtils'

describe('searchDataByKeys()', () => {
  it('should return data from search term and keys', () => {
    const data = [{
      name: 'Jason'
    }, {
      name: 'Trevor'
    }]

    const res = searchDataByKeys(data, 'Jas', ['name'])
    expect(res.length).toEqual(1)
  })

  it('should return no results when search does not match', () => {
    const data = [{
      name: 'Jason'
    }, {
      name: 'Trevor'
    }]

    const res = searchDataByKeys(data, 'Jason', ['firstName'])
    expect(res.length).toEqual(0)
  })

  it('should return no results when search does not match, 2 levels', () => {
    const data = [{
      name: 'Jason',
      job: {
        title: 'Engineer'
      }
    }, {
      name: 'Trevor',
      job: {
        title: 'Engineer'
      }
    }]

    const res = searchDataByKeys(data, 'Engineer', ['job.description'])
    expect(res.length).toEqual(0)
  })

  it('should return data from search term and nested keys, number to string conversion', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40'
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25'
      }
    }]

    const res = searchDataByKeys(data, '4', ['person.age'])
    expect(res.length).toEqual(1)
  })

  it('should return all data when missing search keys', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40'
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25'
      }
    }]

    const res = searchDataByKeys(data, '4', [])
    expect(res.length).toEqual(2)
  })

  it('should return all data when search term is empty', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40'
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25'
      }
    }]

    const res = searchDataByKeys(data, '4', [])
    expect(res.length).toEqual(2)
  })

  it('should return matches when allowed nesting is set to true, 3 levels', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40',
        date: {
          month: '05'
        }
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25',
        date: {
          month: '02'
        }
      }
    }]

    const res = searchDataByKeys(data, '5', ['person.date.month'], { allowNested: true })
    expect(res.length).toEqual(1)
  })

  it('should return matches when allowed nesting is set to true, 2 levels', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40',
        date: {
          month: '05'
        }
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25',
        date: {
          month: '02'
        }
      }
    }]

    const res = searchDataByKeys(data, '4', ['person.age'], { allowNested: true })
    expect(res.length).toEqual(1)
  })

  it('should return all when no search term passed', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40'
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25'
      }
    }]

    const res = searchDataByKeys(data, '', ['person.age'])
    expect(res.length).toEqual(2)
  })

  it('should correctly return no values for no match', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40'
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25'
      }
    }]

    const res = searchDataByKeys(data, '1', ['person.age'])
    expect(res.length).toEqual(0)
  })

  it('should return no results if allow nesting is not true and lookup is more then 2', () => {
    const data = [{
      name: 'Jason',
      person: {
        age: '40'
      }
    }, {
      name: 'Trevor',
      person: {
        age: '25'
      }
    }]

    const res = searchDataByKeys(data, '1', ['person.date.month'])
    expect(res.length).toEqual(0)
  })

  it('should handle default values when no args are passed', () => {
    const res = searchDataByKeys()
    expect(res.length).toEqual(0)
  })
})
