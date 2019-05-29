export default {
  statusCode: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    GONE: 410,
    INTERNAL_SERVER_ERROR: 500
  },
  errorMessage: {
    INTERNAL_SERVER_ERROR_MESSAGE: "Oops! Something wrong with Internal Server",
    UNAUTHORIZED_MESSAGE: "Unauthorized! Access to this resource is denied",
    FORBIDDEN_MESSAGE: "Forbidden"
  }
};
