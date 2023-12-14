import { Box, Divider } from '@mui/material';


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
            </div>


            <iframe
                width="450"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBaEjgWsMCHt8L7KW_mD1G35L9R018RpPo&q=Space+Needle,Seattle+WA">

            </iframe>


        </>
    )
}

export default About;