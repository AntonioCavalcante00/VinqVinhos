import Map from '../layout/Map';

import s from './About.module.css'

function About() {
    return (
        <>
            <div className={s.Container}>
                <div className={s.Title}>
                    <h1>Quem Somos?</h1>
                </div>

                <p>A VinQ - Vinhos destaca-se no cenário vinícola ao apresentar uma
                    abordagem única e distintiva. Com uma minuciosa escolha dos mais refinados rótulos globais,
                    um atendimento personalizado e apoio constante aos nossos clientes, buscamos forjar uma experiência integral
                    e gratificante para todos aqueles que apreciam o universo do vinho. Seja para presentear, comemorar ou
                    simplesmente desfrutar de momentos agradáveis,
                    confie na VinQ - Vinhos para guiá-lo em sua jornada pelo fascinante mundo dos vinhos.</p>
                <p>Local do Vinhedo</p>
                <Map />

            </div>
        </>
    )
}

export default About;