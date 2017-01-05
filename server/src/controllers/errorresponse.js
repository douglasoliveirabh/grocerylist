import defaultResponse from './defaultresponse';

const errorResponse = (data, statusCode = 400) => defaultResponse({
    error: message
}, statusCode);

export default defaultResponse;