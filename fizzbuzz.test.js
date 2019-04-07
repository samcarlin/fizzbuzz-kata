const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    test('returns 1 when fizzbuzz of 1', () => {
        let result = fizzbuzz(1)
        expect(result).toBe(1)
    })
})