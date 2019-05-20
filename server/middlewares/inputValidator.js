import Joi from "@hapi/joi";

const signUpSchema = Joi.object().keys({
  username: Joi.string()
    .min(5)
    .max(20)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(8)
    .required()
});
export const inputValidator = type => {
  return (req, res, next) => {
    let validate;
    if (type === "signup") {
      validate = Joi.validate(req.body, signUpSchema);
    }
    if (validate.error) {
      return res
        .status(400)
        .json({ message: validate.error.details[0].message });
    }
    next();
  };
};
