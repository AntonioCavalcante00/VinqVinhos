import { Link } from 'react-router-dom';
import Logo from '../public/b.png';
import s from './Header.module.css';

export function Header() {

    return (
        <div className={s.MainContainer} >
            <div className={s.Container}>
                <div></div>
                <div className={s.Icon}>
                    <Link to='/'>
                        <img src={Logo} alt="VinqVinhos" />
                    </Link>
                </div>
                <div className={s.Links}>
                    <ul>
                        <li>
                            <Link to='/' className={s.Links}>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className={s.Links}>
                                VINHOS
                            </Link>
                        </li>
                        <li>
                            <Link to='/funcionarios' className={s.Links}>
                                FUNCIONÁRIOS
                            </Link>
                        </li>
                        <li>
                            <Link to='/quemsomos' className={s.Links}>
                                QUEM SOMOS?
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
