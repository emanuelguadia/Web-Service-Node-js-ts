const Joi = require("joi");
class Employee {
  constructor(id, name, age, country, position, wage) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.country = country;
    this.position = position;
    this.wage = wage;
  }
  validatePost() {
    const result = Joi.valid(this, Employee.validationSchemaPost, {
      abortEarly: false,
    });
    return result.error ? result.error.details.map((err) => err.message) : null;
  };
  validatePUt() {
    const result = Joi.valid(this, Employee.validationSchemaPut, {
      abortEarly: false,
    });
    return result.error ? result.error.details.map((err) => err.message) : null;
  };
  
}
Employee.validationSchemaPost = {
  id: Joi.number(),
  name: Joi.string().required().min(3).max(50),
  age: Joi.number().required().min(3).max(50),
  country: Joi.string().required().min(3).max(50),
  position: Joi.string().required().min(3).max(50),
  wage: Joi.number().required().min(0).max(100000),
};
Employee.validationSchemaPut = {
  id: Joi.number().required(),
  name: Joi.string().required().min(3).max(50),
  age: Joi.number().required().min(3).max(50),
  country: Joi.string().required().min(3).max(50),
  position: Joi.string().required().min(3).max(50),
  wage: Joi.number().required().min(0).max(100000),
};

module.exports = Employee;
