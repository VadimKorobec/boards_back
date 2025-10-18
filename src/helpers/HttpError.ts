interface HttpError extends Error {
  status: number;
}

const HttpError = (status: number, message: string) => {
  const error = new Error(message) as HttpError;
  error.status = status;
  return error;
};

export default HttpError;
