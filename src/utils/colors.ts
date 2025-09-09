const WHITE = '#d6d3d1'
const BLACK = '#1c1917'

const hexToRgb = (hex: string): [number, number, number] => {
    return [
        parseInt(`${hex[1]}${hex[2]}`, 16),
        parseInt(`${hex[3]}${hex[4]}`, 16),
        parseInt(`${hex[5]}${hex[6]}`, 16),
    ]
}

const luminance = (r: number, g: number, b: number): number => {
    // https://www.w3.org/TR/AERT/#color-contrast
    return (299 * r + 587 * g + 114 * b) / 1000
}

export const randomColor = (): string => {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8)
}

export const textColor = (bg: string): string => {
    return luminance(...hexToRgb(bg)) > 125 ? BLACK : WHITE
}
