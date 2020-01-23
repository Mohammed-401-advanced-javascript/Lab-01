'use strict';

const validator = require('./lib/validator.js');

// validator.isValid();


// 
validator.isValid = (schema, data) => {
    let valid = true;
    for (let fieldName in schema.fields) {
        let field = schema.fields[fieldName];
        // Am I required and set?
        let required = field.required
        ? validator.isTruthy(data[fieldName])
        : true;
        // Am I the right type (if we even care)
        let type = field.type
        ? validator.isCorrectType(data[fieldName], field)
        : true;
      // If anything is false ...
      if (!(required && type)) {
        valid = false;
        console.log(data)
    }
}    


return valid;
};
// console.log(validator.isArr([]))
