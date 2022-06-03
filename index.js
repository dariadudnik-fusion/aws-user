const { responseBuilder, errorBuilder } = require("./helpers/response.js");
const { getBooksById } = require("./data/getBooksById");

exports.handler = async (event) => {
    try {
        const { pathParameters, httpMethod } = event;
        const id = pathParameters.userId;
        validateMethod(httpMethod, "GET")
        validateParameter(id, "userId");

        const result = await getBooksById(id);

        return responseBuilder("200", result);
    } catch (error) {
        return errorBuilder(error);
    }
};
