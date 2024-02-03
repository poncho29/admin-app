import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

import { Buttom, InputText, SpanLink } from "../../components"

export const RecoverPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ingrese un correo valido')
        .required('El correo es requerido')
    }),
    onSubmit: (values) => {
      console.log(values);

      localStorage.setItem('teleprompterToken', 'true');

      navigate('/auth/login');
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

      <section className="mt-4">
        <Buttom type="submit">Recuperar contraseña</Buttom>

        <SpanLink onClick={() => navigate('/auth/login')}>Iniciar sesión</SpanLink>
      </section>
    </form>
  );
};
