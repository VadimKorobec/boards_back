import Joi from 'joi';

export const boardsSchema = Joi.object({
  title: Joi.string().required(),
});
