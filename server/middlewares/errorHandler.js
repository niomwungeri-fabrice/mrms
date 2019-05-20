import serverResponses from "./serverResponses";

const { INTERNAL_SERVER_ERROR } = serverResponses.statusCode;
const { INTERNAL_SERVER_ERROR_MESSAGE } = serverResponses.errorMessage;

const errorHandler = controller => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      console.log("=============", error, "=============");
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: INTERNAL_SERVER_ERROR_MESSAGE
      });
    }
  };
};

export default errorHandler;
