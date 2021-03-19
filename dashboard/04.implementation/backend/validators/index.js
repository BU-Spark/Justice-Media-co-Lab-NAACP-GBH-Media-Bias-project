import yup from 'yup';

export const validate = (shape) => async (
  req,
  res,
  next,
) => {
  const schema = yup.object().shape(shape);

  try {
    const validData = await schema.validate(req.body, { abortEarly: false });
    req.validData = validData;
    return next();
  } catch (error) {
    const errors = {  };
    error.inner.forEach((err) => {
      const { path, message } = err;
      errors[path] = message;
    });
    return res.status(400).json({
      errors,
      message: 'error validating request'
    })
  }
};