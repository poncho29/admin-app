import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Buttom, InputText, SpanLink } from "../../components";

import { IRegisterForm } from "../../interfaces";

const initialValues: IRegisterForm = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

export const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es requerido'),
      email: Yup.string()
        .email('Ingrese un correo valido')
        .required('El correo es requerido'),
      phone: Yup.string().optional(),
      password: Yup.string()
        .min(6, 'La contaseña debe tener minimo 6 caracteres')
        .required('La contraseña es obligatorio'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
        .min(6, 'La confirmación de contaseña debe tener minimo 4 caracteres')
        .required('La confirmación de contraseña es obligatorio'),
    }),
    onSubmit: (values) => {
      const email = values.email;

      localStorage.setItem('teleprompterToken', 'true');
      localStorage.setItem('TelepromterUser', email);

      navigate('/dashboard');
    }
  })

  return (
    <form className="w-full max-w-96" onSubmit={formik.handleSubmit}>
      <InputText
        label="Nombre completo *"
        name="name"
        type="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        errorMessage={formik.errors.name}
      />

      <InputText
        label="Correo electrónico *"
        name="email"
        type="email"
        classContainer="mt-4"
        value={formik.values.email}
        onChange={formik.handleChange}
        errorMessage={formik.errors.email}
      />

      <InputText
        label="Teléfono *"
        name="phone"
        type="tel"
        classContainer="mt-4"
        value={formik.values.phone}
        onChange={formik.handleChange}
        errorMessage={formik.errors.phone}
      />

      <InputText
        label="Contraseña *"
        name="password"
        type="password"
        classContainer="mt-4"
        value={formik.values.password}
        onChange={formik.handleChange}
        errorMessage={formik.errors.password}
      />

      <InputText
        label="Confirmar contraseña *"
        name="confirmPassword"
        type="password"
        classContainer="mt-4"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        errorMessage={formik.errors.confirmPassword}
      />

      <section className="mt-4">
        <Buttom type="submit">Crear cuenta</Buttom>

        <SpanLink onClick={() => navigate('/auth/login')}>Ya tengo una cuenta</SpanLink>
      </section>
    </form>
  );
};
