import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as AlphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', AlphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('password_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)
    defineRule('tos', required)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} most have only alphabitecs and spaces.`,
          email: `The filed ${ctx.field} must have a valid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is too high.`,
          password_mismatch: `The passwords don't match`,
          excluded: `You are not allowed to use this value for a ${ctx.field} field.`,
          country_excluded: `Due to restraction, your country is not allowed.`,
          tos: `You must have agreed with our term of services`
        }
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : 'The field is not valid'
        return message
      },
      validateOnChange: true,
      validateOnInput: false,
      validateOnBlur: true,
      validateOnModelUpdate: true
    })
  }
}
