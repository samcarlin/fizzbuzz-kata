const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    test('returns 1 when fizzbuzz of 1', () => {
        let result = fizzbuzz(1)
        expect(result).toBe("1")
    })

    test('returns 2 when fizzbuzz of 2', () => {
        let result = fizzbuzz(2)
        expect(result).toBe("2")
    })

    test('returns fizz when fizzbuzz of 3', () => {
        let result = fizzbuzz(3)
        expect(result).toBe("fizz")
    })

    test('returns 4 when fizzbuzz of 4', () => {
        let result = fizzbuzz(4)
        expect(result).toBe("4")
    })

    test('returns buzz when fizzbuzz of 5', () => {
        let result = fizzbuzz(5)
        expect(result).toBe("buzz")
    })

    test('returns fizz when fizzbuzz of 6', () => {
        let result = fizzbuzz(6)
        expect(result).toBe("fizz")
    })

    test('returns fizz when fizzbuzz of 9', () => {
        let result = fizzbuzz(9)
        expect(result).toBe("fizz")
    })

    test('returns buzz when fizzbuzz of 10', () => {
        let result = fizzbuzz(10)
        expect(result).toBe("buzz")
    })

    test('returns fizzbuzz when fizzbuzz of 15', () => {
        let result = fizzbuzz(15)
        expect(result).toBe("fizzbuzz")
    })

    test('returns fizzbuzz when fizzbuzz of 30', () => {
        let result = fizzbuzz(30)
        expect(result).toBe("fizzbuzz")
    })

    test('returns buzz when fizzbuzz of 100', () => {
        let result = fizzbuzz(100)
        expect(result).toBe("buzz")
    })
})
