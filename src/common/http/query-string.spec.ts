import { queryString } from './query-string'

describe(`${queryString.name}`, () => {
    it('serialize params with string/number value', () => {
        expect(queryString({ num: 1, str: 'a' })).toStrictEqual('num=1&str=a')
    })

    it('serialize params with boolean value', () => {
        expect(queryString({ flag: true })).toStrictEqual('flag=true')
    })
    it('serialize object as JSON', () => {
        expect(queryString({ obj: { x: 1 } })).toStrictEqual(
            `obj=${encodeURIComponent(JSON.stringify({ x: 1 }))}`
        )
    })
    it('serialize array as multiple query string key-value pairs', () => {
        expect(queryString({ a: [1, 'a', false] })).toStrictEqual('a=1&a=a&a=false')
    })
    it('skip "",null,undefined values', () => {
        expect(queryString({ empty: '', null: null, undefined: undefined })).toStrictEqual('')
    })
    it('encode values', () => {
        expect(queryString({ a: ['='], s: '=' })).toStrictEqual('a=%3D&s=%3D')
    })
})
