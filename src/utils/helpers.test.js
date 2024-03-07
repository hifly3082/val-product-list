import { filterUniqueById } from './helpers'

describe('TEST HELPERS', () => {
  it('testing filterUniqueById', () => {
    const result = filterUniqueById(testArray)
    console.log(result)
    expect(result).toEqual(correctResult)
  })
})

const testArray = [
  {
    brand: null,
    id: '9f2722a8-dac6-4f71-b877-1731d30ae6db',
    price: 8500,
    product: 'Золотое кольцо с бриллиантами и изумрудом'
  },
  {
    brand: null,
    id: '6543564e-ccc0-46f4-9af9-ab2d4bb16451',
    price: 26600,
    product: 'Золотое колье с бриллиантами и ониксом Pasquale Bruni'
  },
  {
    brand: 'Baraka',
    id: '6543564e-ccc0-46f4-9af9-ab2d4bb16451',
    price: 26600,
    product: 'Золотое колье с бриллиантами и ониксом Pasquale Bruni'
  },
  {
    brand: null,
    id: 'da6e21f9-3fa9-4fd0-bdd7-91d3399236a1',
    price: 34440,
    product: 'Золотое кольцо с бриллиантами и жемчугом'
  },
  {
    brand: 'Piaget',
    id: '91a4056d-462d-4469-b97d-1d442d1e2fbc',
    price: 23363,
    product: 'Золотое колье с рубинами и бриллиантами'
  }
]

const correctResult = [
  {
    brand: null,
    id: '9f2722a8-dac6-4f71-b877-1731d30ae6db',
    price: 8500,
    product: 'Золотое кольцо с бриллиантами и изумрудом'
  },
  {
    brand: null,
    id: '6543564e-ccc0-46f4-9af9-ab2d4bb16451',
    price: 26600,
    product: 'Золотое колье с бриллиантами и ониксом Pasquale Bruni'
  },
  {
    brand: null,
    id: 'da6e21f9-3fa9-4fd0-bdd7-91d3399236a1',
    price: 34440,
    product: 'Золотое кольцо с бриллиантами и жемчугом'
  },
  {
    brand: 'Piaget',
    id: '91a4056d-462d-4469-b97d-1d442d1e2fbc',
    price: 23363,
    product: 'Золотое колье с рубинами и бриллиантами'
  }
]
