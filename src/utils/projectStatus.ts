export const projectStatus = (status: string): [string, string] => {
    switch (status) {
        case 'finished':
            return ['Завершен', '#83a598']
        case 'stable':
            return ['Стабильный', '#8ec07c']
        case 'wip':
            return ['В разработке', '#d3869b']
        default:
            return ['', '']
    }
}
