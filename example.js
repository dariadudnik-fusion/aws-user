exports.handler = async (event) => {
  const { pathParameters } = event;
  const id = pathParameters.userId;
  validateParameter(id, "userId");

  const data = await queryDataFromApi(id);
  const dataDB = await queryDataFromDB(data.id);
  const result = mapResult(data, dataDB);

  return result;
};
