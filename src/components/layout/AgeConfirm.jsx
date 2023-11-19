import s from './AgeConfirm.module.css'

import Logo from '../public/a.png'

export default function AgeConfirm() {
    return (
        <div className={s.MainContainer}>

            <img className={s.Logo} src={Logo} alt="VinqVinhos" />
            <div className={s.Title}>
                <p>Você tem mais de 18 anos?</p>
            </div>
            <div className={s.Buttons}>
                <button>Sim</button>
                <button>Não</button>
            </div>
        </div>
    )
}