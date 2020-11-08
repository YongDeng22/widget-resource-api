export const createErrorResponse = (error: Error) => {
    return {
        error: error.message
    };
}