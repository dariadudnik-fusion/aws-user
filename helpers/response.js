const headers = {
  "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, user-pool-id",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PATCH, DELETE",
};

exports.responseBuilder = (statusCode, body) => {
  return {
    statusCode,
    headers,
    body: typeof body === "string" ? body : JSON.stringify(body),
  };
};

exports.errorBuilder = (error) => {
  const errorBody = {
    message: error.message.message || error.message,
    error: error.error || 'Internal server error',
    status: error.status || 500,
  }
  return {
    statusCode: error.status || 500,
    headers,
    body: JSON.stringify(errorBody)
  };
}; 