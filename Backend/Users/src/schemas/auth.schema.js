//este archivo valida la informacion que ingresa el cliente

//zod es una depedencia donde 'z', permite dar tipos de datos(tipar)

const { z } = require("zod");
//validar el registro
const registerSchema = z.object({
    name: z.string({ required_error: '  ❌ name is required' }),
    lastName: z.string({ required_error: '  ❌ last name is required' }),
    userName: z.string({ required_error: '  ❌ username is required' }),
    identificationCard: z.number().int().refine((value) => { const identificationCardNumber = value.toString(); return identificationCardNumber.length === 10; }, { message: '  ❌ identification Card number must have exactly 10 digits' }),
    email: z.string({ required_error: ' ❌ email is required' }).email({ message: ' ❌ invalid email' }),
    password: z.string({ required_error: ' ❌password is required' }).min(6, { message: ' ❌ Password must be at least 6 characters' }).max(14, { message: ' ❌ The password must have a maximum of 14 characters' }),
 

});

//validar el login  

const loginSchema = z.object({
    email: z.string({ required_error: ' ❌ Email is required', }).email({ message: ' ❌  Invalid email' }),
    password: z.string({ required_error: ' ❌ password is required' }).min(6, { message: ' ❌ Password must be at least 6 characters' }).max(14, { message: ' ❌ The password must have a maximum of 14 characters' }),
});

const MoneySchema= z.object({
    password: z.string({ required_error: ' ❌password is required' }).min(6, { message: ' ❌ Password must be at least 6 characters' }).max(14, { message: ' ❌ The password must have a maximum of 14 characters' }),
    identificationCard: z.number().int().refine((value) => { const identificationCardNumber = value.toString(); return identificationCardNumber.length === 10; }, { message: '  ❌ identification Card number must have exactly 10 digits' }),
    balance: z.number().int().refine((value) => value > 0  && value <= 1000000, {message: "Balance must be a non-negative integer or less than or equal to one million.", }),
})


const transferSchema= z.object({
  
    balance: z.number().int().refine((value) => value > 0  && value <= 100000, {message: "Balance must be a non-negative integer or less than or equal to one million.", }),
})



module.exports = { registerSchema,  loginSchema,MoneySchema,transferSchema };