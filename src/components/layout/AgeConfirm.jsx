import s from './AgeConfirm.module.css'

import Logo from '../public/a.png'

export default function AgeConfirm({ onClose }) {

    const ClickButton = (escolha) => {
        if (escolha === 'Sim') {
            onClose();
        } else if (escolha === 'Não') {
            window.location.href = 'https://www.google.com';
        }
    }

    return (
        <div className={s.MainContainer}>
            <div className={s.Container}>
                <img className={s.Logo} src={Logo} alt="VinqVinhos" />
                <div className={s.Title}>
                    <p>Você tem mais de 18 anos?</p>
                </div>
                <div className={s.Buttons}>
                    <button onClick={() => ClickButton('Não')} className={s.ButtonNo}>Não</button>
                    <button onClick={() => ClickButton('Sim')} className={s.ButtonYes}>Sim</button>
                </div>
            </div>
        </div>
    )
}