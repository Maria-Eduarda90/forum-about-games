import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import styles from './styles.module.scss';
import iconImg from '../../../img/680ed9ad3e25665eb9f5d9f598a119b7.jpg';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { validationsLogin } from "./validation";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../hooks/useAuth';

export function Login(){
    const navigate = useNavigate();
    const { userSignIn } = useAuth();

    const formik = useFormik({
        onSubmit: async (values) => {
            try {
                const data = {
                    email: values.email,
                    password: values.password,
                };

                const response = await userSignIn(data);

                if (response) {
                    navigate("/home");
                    return;
                }
            } catch (err) {
                alert("email ou senha incorreto");
            }
        },
        validationSchema: Yup.object(validationsLogin),
        validateOnMount: true,
        initialValues: {
            email: "",
            password: "",
        },
    });

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.description}>
                        <img src={iconImg} alt="controle ps" />
                        <h1>WELCOME!</h1>
                        <h2>Bem vindo de volta ao fórum sobre Games 🎮</h2>
                    </div>
                    <Input
                     name="email"
                     type={'email'} 
                     placeholder={'E-mail'}
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     disabled={formik.isSubmitting}
                    />
                    {(formik.touched.email && formik.errors.email) && (
                        <span className={styles.error}>{formik.errors.email}</span>
                    )}

                    <Input
                     name="password" 
                     type={'password'} 
                     placeholder={'Password'}
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     disabled={formik.isSubmitting}
                    />
                    {(formik.touched.password && formik.errors.password) && (
                        <span className={styles.error}>{formik.errors.password}</span>
                    )}

                    <Button
                     type="submit"
                     disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {formik.isSubmitting ? 'Entrando...' : 'Entrar'}
                    </Button>

                    <p>ainda não possui uma conta?<Link to="/cadastrar">Signup</Link></p>
                </form>
            </div>
        </div>
    );
}