import defaultResponse from './defaultresponse';

const errorResponse = (message, statusCode = 400) => defaultResponse({
    error: message
}, statusCode);

export default defaultResponse;