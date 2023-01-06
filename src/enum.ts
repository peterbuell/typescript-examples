enum ColorCode {
    black,
    brown,
    red
}

type Color = keyof typeof ColorCode;

const decodedValue = ([first, second]: Color[]): number => {
    return Number(`${ColorCode[first]}${ColorCode[second]}`)
}

export {decodedValue};
