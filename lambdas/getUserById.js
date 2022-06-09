const { responseBuilder, errorBuilder } = require("../helpers/response");
const { getUserById } = require("../data/getUserById");
const { validateMethod } = require('../helpers/validation');

exports.handler = async (event) => {
    try {
        const { pathParameters, requestContext } = event;
        const httpMethod = requestContext.http.method;
        const id = pathParameters.id;
        validateMethod(httpMethod, "GET");

        const list = await getUserById(id);

        return responseBuilder("200", list);
    } catch (error) {
        return errorBuilder(error);
    }
};



