class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;  // Operational errors (known errors like validation, DB issues)
        Error.captureStackTrace(this, this.constructor);
    }
}
  
export default AppError;
