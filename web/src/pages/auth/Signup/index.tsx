import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import styles from './styles.module.scss';
import { validationsSignUp } from "./validation";
import { useFormik } from "formik";

import * as Yup from 'yup';
import { useAuth } from "../../../hooks/useAuth";

import iconImg from '../../../img/680ed9ad3e25665eb9f5d9f598a119b7.jpg';
import { Link, useNavigate } from 'react-router-dom';

export function Signup() {
    const navigate = useNavigate();
    const { userSignUp } = useAuth();

    const formik = useFormik({
        onSubmit: async values => {
            try {
                const data = {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    url: values.url,
                }
                console.log('data: ', data);

                const response = await userSignUp(data);
                console.log('response: ', response);

                if (response) {
                    navigate('/');
                }
            } catch (err) {
                alert(err);
            }
        },
        validationSchema: Yup.object(validationsSignUp),
        validateOnMount: true,
        initialValues: {
            name: '',
            email: '',
            password: '',
            url: '',
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.description}>
                        <img src={iconImg} alt="controle ps" />
                        <h2>WELCOME!</h2>
                        <p>Bem vindo ao fórum sobre Games 🎮</p>
                    </div>
                    
                    <Input
                     name="name"
                     type={'text'} 
                     placeholder={'Name'}
                     value={formik.values.name}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     disabled={formik.isSubmitting}
                    />
                    {(formik.touched.name && formik.errors.name) && (
                        <span className={styles.error}>{formik.errors.name}</span>
                    )}

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

                    <Input
                     name="url"
                     type={'url'} 
                     placeholder={'url da sua foto (opcional)'} 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     disabled={formik.isSubmitting}
                    />

                    <Button
                     type="submit"
                     disabled={formik.isSubmitting || !formik.isValid}
                    >
                        {formik.isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>

                    <p>já possui uma conta?<Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    );
}