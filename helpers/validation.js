exports.validateMethod = (method, type) => {
  console.log('method', method, type);
  if (method !== type) {
    throw new Error("The requested method not allowed");
  }
}