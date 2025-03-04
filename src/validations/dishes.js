import { Joi } from "express-validation";

const validateDishesSchema = (query) => {
  const schema = Joi.object({
    diet: Joi.object({
      eq: Joi.string().optional(),
      ne: Joi.string().optional(),
      gt: Joi.string().optional(),
      lt: Joi.string().optional(),
      gte: Joi.string().optional(),
      lte: Joi.string().optional(),
    }).optional(),

    prep_time: Joi.object({
      eq: Joi.number().optional().strict(false),
      ne: Joi.number().optional().strict(false),
      gt: Joi.number().optional().strict(false),
      lt: Joi.number().optional().strict(false),
      gte: Joi.number().optional().strict(false),
      lte: Joi.number().optional().strict(false),
    }).optional(),

    cook_time: Joi.object({
      eq: Joi.number().optional().strict(false),
      ne: Joi.number().optional().strict(false),
      gt: Joi.number().optional().strict(false),
      lt: Joi.number().optional().strict(false),
      gte: Joi.number().optional().strict(false),
      lte: Joi.number().optional().strict(false),
    }).optional(),

    flavor_profile: Joi.object({
      eq: Joi.string().optional(),
      ne: Joi.string().optional(),
      gt: Joi.string().optional(),
      lt: Joi.string().optional(),
      gte: Joi.string().optional(),
      lte: Joi.string().optional(),
    }).optional(),

    course: Joi.object({
      eq: Joi.string().optional(),
      ne: Joi.string().optional(),
      gt: Joi.string().optional(),
      lt: Joi.string().optional(),
      gte: Joi.string().optional(),
      lte: Joi.string().optional(),
    }).optional(),

    state: Joi.object({
      eq: Joi.string().optional(),
      ne: Joi.string().optional(),
      gt: Joi.string().optional(),
      lt: Joi.string().optional(),
      gte: Joi.string().optional(),
      lte: Joi.string().optional(),
    }).optional(),

    region: Joi.object({
      eq: Joi.string().optional(),
      ne: Joi.string().optional(),
      gt: Joi.string().optional(),
      lt: Joi.string().optional(),
      gte: Joi.string().optional(),
      lte: Joi.string().optional(),
    }).optional(),
  }).unknown(false);

  return schema.validate(query, { abortEarly: false });
};

export { validateDishesSchema };
