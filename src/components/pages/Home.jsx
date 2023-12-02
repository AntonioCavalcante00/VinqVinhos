import { Box } from '@mui/material';
import SimpleSlider from '../layout/Slider'
import wallpaper from '../public/natal.jpg'
import styles from './Home.module.css'

import Divider from '@mui/material/Divider';
// import VinhosHome from '../layout/VinhosHome'

export function Home() {
    return (
        <>

            <div className={styles.Slider}>
                <SimpleSlider />
            </div>

            <Box sx={{ width: '100', marginLeft: 5, marginRight: 5 }}>
                <Divider sx={{ backgroundColor: '#800000', height: 1.3 }} />
            </Box>


            <div className={styles.Container}>
                <div className={styles.Wallpaper}>
                    <img src={wallpaper} />
                </div>

                <div className={styles.Introducion}>
                    <h2>Brinde ao Natal com Elegância: VinQ - Vinhos Celebra a Magia do Vinho!</h2>
                    <div>
                        <p>Neste Natal, a VinQ - Vinhos convida você a elevar seus momentos festivos a um patamar de sofisticação e sabor.
                            Embarque conosco em uma jornada sensorial, onde cada gole é uma celebração e cada garrafa conta uma história única.</p>

                        <p>Para tornar suas festividades ainda mais especiais, apresentamos nossa promoção exclusiva de Natal.
                            Descubra uma seleção cuidadosamente curada de vinhos finos que são a personificação do artesanato,
                            paixão e tradição. Seja para presentear amigos queridos,
                            impressionar os convidados em sua ceia ou simplesmente saborear momentos inesquecíveis,
                            a VinQ - Vinhos é a escolha perfeita.</p>
                    </div>
                </div>
            </div>


            {/* <div className={styles.VinhosHome}>
                <VinhosHome />
            </div> */}

        </>
    )
}