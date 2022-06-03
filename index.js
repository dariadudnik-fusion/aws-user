const { responseBuilder, errorBuilder } = require("./helpers/response.js");
const { getBooksById } = require("./data/getBooksById");
const { validateMethod } = require('./helpers/validation')

exports.handler = async (event) => {
    try {
        const { pathParameters, httpMethod } = event;
        const id = pathParameters.userId;
        validateMethod(httpMethod, "GET")

        const result = await getBooksById(id);

        return responseBuilder("200", result);
    } catch (error) {
        return errorBuilder(error);
    }
};
