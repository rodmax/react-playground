import { pick } from './pick'

describe('pick', () => {
    it('creates sub-object with passed keys', () => {
        expect(pick({ a: 1, b: 2 }, ['a'])).toStrictEqual({ a: 1 })
    })
})
