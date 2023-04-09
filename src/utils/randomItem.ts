export const randomItem = <T>(array: T[]): T => {
	const randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}