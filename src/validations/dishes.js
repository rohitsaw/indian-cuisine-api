import { Joi } from "express-validation";

const validateDishesSchema = (query) => {
  const schema = Joi.object({
    pageNumber: Joi.number().optional().default(1).strict(false).greater(0),
    pageSize: Joi.number().optional().default(10).strict(false).greater(0),

    diet: Joi.object({
      eq: Joi.string().lowercase().optional(),
      ne: Joi.string().lowercase().optional(),
      gt: Joi.string().lowercase().optional(),
      lt: Joi.string().lowercase().optional(),
      gte: Joi.string().lowercase().optional(),
      lte: Joi.string().lowercase().optional(),
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
      eq: Joi.string().lowercase().optional(),
      ne: Joi.string().lowercase().optional(),
      gt: Joi.string().lowercase().optional(),
      lt: Joi.string().lowercase().optional(),
      gte: Joi.string().lowercase().optional(),
      lte: Joi.string().lowercase().optional(),
    }).optional(),

    course: Joi.object({
      eq: Joi.string().lowercase().optional(),
      ne: Joi.string().lowercase().optional(),
      gt: Joi.string().lowercase().optional(),
      lt: Joi.string().lowercase().optional(),
      gte: Joi.string().lowercase().optional(),
      lte: Joi.string().lowercase().optional(),
    }).optional(),

    state: Joi.object({
      eq: Joi.string().lowercase().optional(),
      ne: Joi.string().lowercase().optional(),
      gt: Joi.string().lowercase().optional(),
      lt: Joi.string().lowercase().optional(),
      gte: Joi.string().lowercase().optional(),
      lte: Joi.string().lowercase().optional(),
    }).optional(),

    region: Joi.object({
      eq: Joi.string().lowercase().optional(),
      ne: Joi.string().lowercase().optional(),
      gt: Joi.string().lowercase().optional(),
      lt: Joi.string().lowercase().optional(),
      gte: Joi.string().lowercase().optional(),
      lte: Joi.string().lowercase().optional(),
    }).optional(),

    ingredients: Joi.string()
      .custom((value, helpers) => {
        const ingredientsArray = value
          .split(",")
          .map((item) => item.trim().toLowerCase());
        if (ingredientsArray.some((item) => !item)) {
          return helpers.error("any.invalid");
        }
        return ingredientsArray;
      })
      .optional(),
  }).unknown(false);

  return schema.validate(query, { abortEarly: false });
};

export { validateDishesSchema };
