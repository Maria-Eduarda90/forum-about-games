import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import styles from './styles.module.scss';

import iconImg from '../../../img/680ed9ad3e25665eb9f5d9f598a119b7.jpg';
import { Link } from 'react-router-dom';

export function Signup() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form>
                    <img src={iconImg} alt="controle ps" />
                    <h1>WELCOME!</h1>
                    <p>Bem vindo ao fórum sobre Games 🎮</p>
                    <Input type={'text'} placeholder={'Name'} />
                    <Input type={'email'} placeholder={'E-mail'} />
                    <Input type={'password'} placeholder={'Password'} />
                    <Input type={'url'} placeholder={'url da sua foto (opcional)'} />
                    <Button>
                        Signup
                    </Button>

                    <span>já possui uma conta?<Link to="/">Login</Link></span>
                </form>
            </div>
        </div>
    );
}