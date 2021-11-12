import * as Yup from 'yup'


export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    passWord: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
    rePassWord: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('passWord')], 'Password & Confirm Password does not match'),
  })

  