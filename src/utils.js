export function getRandomChar(min, max) {
    const limit = max - min + 1
    return String.fromCharCode(Math.floor(Math.random() * limit) + min)
}

// will get a random number(eg:4), then add it with minimum number(minimum ascii value (0=48)) , 48+4=52, 52 is the ascii value of 4. It will be returned as a string.

export function getSpecialChar() {
    const specialChar = "!@#$%&^*()-_=+{}[\\]|;:'`~,<.>/?"
    return specialChar[Math.floor(Math.random() * specialChar.length)]
}

