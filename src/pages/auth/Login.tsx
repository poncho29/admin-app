import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { Buttom, InputText, SpanLink } from "../../components";

import { ILoginForm } from "../../interfaces";

const initialValues: ILoginForm = {
  email: '',
  password: '',
}

export const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ingrese un correo valido')
        .required('El correo es requerido'),
      password: Yup.string().required('La contraseña es requerido')
    }),
    onSubmit: (values) => {
      const email = values.email;

      localStorage.setItem('teleprompterToken', 'true');
      localStorage.setItem('TelepromterUser', email);

      navigate('/dashboard');
    }
  });

  return (
    <form className="w-full max-w-96" onSubmit={formik.handleSubmit}>
      <InputText
        label="Correo electrónico *"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        errorMessage={formik.errors.email}
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

      <section className="mt-4">
        <Buttom type="submit">Entrar</Buttom>

        <div className="flex flex-col justify-around md:flex-row">
          <SpanLink onClick={() => navigate('/auth/register')}>Crear una cuenta</SpanLink>
          <SpanLink onClick={() => navigate('/auth/recover')}>Olvide mi contraseña</SpanLink>
        </div>
      </section>
    </form>
  )
}
