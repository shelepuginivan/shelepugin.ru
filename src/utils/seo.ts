const website = 'https://shelepugin.ru'

export const ogDate = (date: Date): string => {
    return date.toISOString()
}

export const ogImage = (prefix: string, id: string): string => {
    return `https://shelepugin.ru/__social/${prefix}/${id}.png`
}

export const ogTitle = (title: string): string => {
    return `${title} | Иван Шелепугин`
}

export const ogURL = (prefix: string, id: string): string => {
    return `${website}/${prefix}/${id}`
}
