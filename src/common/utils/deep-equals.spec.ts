import { deepEqual } from './deep-equals'

describe('deepEquals', () => {
    it('should compare objects', () => {
        expect(
            deepEqual({ a: [1, 2], x: 1, s: 's', n: null }, { a: [1, 2], x: 1, s: 's', n: null })
        ).toStrictEqual(true)

        expect(
            deepEqual({ a: [1], x: 1, s: 's', n: null }, { a: [1, 2], x: 1, s: 's', n: null })
        ).toStrictEqual(false)

        expect(
            deepEqual({ nested: { x: { a: 1, b: 2 } } }, { nested: { x: { b: 2, a: 1 } } })
        ).toStrictEqual(true)
    })

    it('should compare object with partial', () => {
        expect(
            deepEqual(
                { a: [1, 2], x: 1, s: 's', n: null },
                { a: [1, 2] },
                { isExpectedPartial: true }
            )
        ).toStrictEqual(true)
    })
})
