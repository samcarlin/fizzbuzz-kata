const FIZZ = "fizz"
const BUZZ = "buzz"

function fizzbuzz(input) {
    if (isMultipleOf(input, 3) && (isMultipleOf(input, 5))) {
        return FIZZ + BUZZ
    }

    if (isMultipleOf(input, 3)) {
        return FIZZ
    }

    if (isMultipleOf(input, 5)) {
        return BUZZ
    }

    return input.toString()
}

function isMultipleOf(dividend, divisor) {
    return dividend % divisor === 0
}

module.exports = fizzbuzz
