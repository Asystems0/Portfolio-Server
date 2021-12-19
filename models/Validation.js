//VALIDATION
const Joi = require("joi");

const registerValidtaion = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required().messages({
      "string.empty": `Name cannot be an empty field`,
      "string.min": `Name should have a minimum length of 6 characters`,
      "any.required": `Name is a required field`,
    }),
    email: Joi.string().min(6).required().email().messages({
      "string.empty": `Email cannot be an empty field`,
      "string.min": `Email should have a minimum length of 6 characters`,
      "any.required": `Email is a required field`,
    }),
    phone: Joi.string()
      .regex(/^[0-9]{10}$/)
      .messages({
        "string.pattern.base": `Phone number must have 10 digits.`,
        "any.required": `Email is a required field`,
      })
      .required(),

    message: Joi.string().allow(null, ""),
  });

  return schema.validate(data);
};
module.exports.registerValidtaion = registerValidtaion;
