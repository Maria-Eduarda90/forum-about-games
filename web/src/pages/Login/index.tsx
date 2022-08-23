import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

import iconImg from '../../img/680ed9ad3e25665eb9f5d9f598a119b7.jpg';
import { Link } from 'react-router-dom';

export function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form>
                    <img src={iconImg} alt="controle ps" />
                    <h1>WELCOME!</h1>
                    <p>Bem vindo de volta ao fórum sobre Games 🎮</p>
                    <Input type={'email'} placeholder={'E-mail'} />
                    <Input type={'password'} placeholder={'Password'} />

                    <Button>
                        Login
                    </Button>

                    <span>ainda não possui uma conta?<Link to="/cadastrar">Signup</Link></span>
                </form>
            </div>
        </div>
    );
}