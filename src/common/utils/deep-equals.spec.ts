import { deepEqual } from './deep-equals'

describe('deepEquals', () => {
    it('compares objects', () => {
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

    it('compares object with partial', () => {
        expect(
            deepEqual(
                { a: [1, 2], x: 1, s: 's', n: null },
                { a: [1, 2] },
                { isExpectedPartial: true }
            )
        ).toStrictEqual(true)
    })

    it('handle primitive/not classic objects passing', () => {
        expect(deepEqual(12, null)).toStrictEqual(false)
        expect(deepEqual('a', 'a')).toStrictEqual(true)
        expect(deepEqual({ a: 'a' }, 'a')).toStrictEqual(false)
        expect(deepEqual([1, 2], [1, 2])).toStrictEqual(true)
    })
})
