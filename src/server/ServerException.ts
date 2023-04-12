export class ServerException extends Error {
	status: number

	constructor(status: number, message: string) {
		super(message)
		this.status = status
	}
}