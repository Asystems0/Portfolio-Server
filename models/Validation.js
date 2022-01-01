//VALIDATION
const Joi = require("joi");

const registerValidtaion = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).max(16).required().messages({
      "string.empty": `Name cannot be an empty field`,
      "string.min": `Name should have a minimum length of 6 characters`,
      "string.max": `Name should have a maximum length of 16 characters`,
      "any.required": `Name is a required field`,
    }),
    email: Joi.string().min(6).max(32).required().email().messages({
      "string.empty": `Email cannot be an empty field`,
      "string.min": `Email should have a minimum length of 6 characters`,
      "string.max": `Email should have a maximun length of 32 characters`,
      "any.required": `Email is a required field`,
    }),
    phone: Joi.string().min(8).max(10).required().messages({
      "string.empty": `Phone number cannot be an empty field`,
      "string.min": `Phone number should have a minimum length of 8 numbers`,
      "string.max": `Phone number should have a maximum length of 10 numbers`,
      "any.required": `Phone number is a required field`,
    }),

    // .message({
    //   "number.required": `Phone number is a required field`,
    //   "numer.min": `Phone number must have min 8 digits.`,
    //   "numer.max": `Phone number must have min 10 digits.`,
    // })

    // phone: Joi.string()
    //   .regex(/^[0-9]{7}$/)
    //   .messages({
    //     "string.pattern.base": `Phone number must have 10 digits.`,
    //     "any.required": `Email is a required field`,
    //   })
    //   .required(),

    // message: Joi.string().allow(null, ""),
  });

  return schema.validate(data);
};
module.exports.registerValidtaion = registerValidtaion;
