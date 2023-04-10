import joi from "joi";
export var movieSchema = joi.object({
    name: joi.string().required(),
    streaming: joi.string().required(),
    gender: joi.string().required(),
    status: joi.string().required(),
    note: joi.number(),
    summary: joi.number(),
});
