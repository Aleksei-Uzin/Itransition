export class ValidationOptionsError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationOptionsError'
  }
}
