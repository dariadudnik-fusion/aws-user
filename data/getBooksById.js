const axios = require('axios');

exports.getBooksById = async () => {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=g59Xh7VjCWgEum3wFd1Z40KSslAtksJA`
    const { data } = await axios(url);
    const result = typeof data === "string" ? JSON.parse(data) : data;
  
    return result.results;
  } catch (e) {
    throw e;
  }
};