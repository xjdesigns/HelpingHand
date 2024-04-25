import {
  remapData,
} from '../functionUtils'

describe('remapData()', () => {
  it('should return data remapped to the new structure, ex 1', () => {
    const data = [{
      name: 'Jason'
    }, {
      name: 'Trevor'
    }]

    const remap = {
      firstname: 'name'
    }

    const result = [{
      firstname: 'Jason'
    }, {
      firstname: 'Trevor'
    }]

    const res = remapData(data, remap)
    expect(res).toEqual(result)
  })

  it('should return data remapped to the new structure, ex 2', () => {
    const data = [{
      name: 'Jason',
      address: '11111'
    }, {
      name: 'Trevor',
      address: '22222'
    }]

    const remap = {
      firstname: 'name',
      location: 'address'
    }

    const result = [{
      firstname: 'Jason',
      location: '11111'
    }, {
      firstname: 'Trevor',
      location: '22222'
    }]

    const res = remapData(data, remap)
    expect(res).toEqual(result)
  })
})
