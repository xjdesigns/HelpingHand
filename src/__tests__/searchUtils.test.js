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

  it('should return no data when key search is beyond 2 levels of dot notation', () => {
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

    const res = searchDataByKeys(data, '4', ['person.date.month'])
    expect(res.length).toEqual(0)
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
})
