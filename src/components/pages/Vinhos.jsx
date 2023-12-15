import { Box, Divider } from '@mui/material'
// import CardVinhos from '../layout/CardVinhos'

import s from './Vinhos.module.css'

// import PlanetaEtna from '../public/Wines/PlanetaEtna.png'
// import ChateauBaret from '../public/Wines/ChâteauBaret.png'
// import Puleta from '../public/Wines/Puleta.png'
// import Pizzorno from '../public/Wines/Pizzorno.png'


export default function Vinhos() {
    return (
        <>
            <div className={s.Container}>
                <div className={s.Title}>
                    <h1>Vinhos</h1>
                </div>

                <Box sx={{ width: '100', marginLeft: 5, marginRight: 5, marginTop: 10 }}>
                    <Divider sx={{ backgroundColor: '#800000', height: 1.3 }} />
                </Box>


                <h1 className={s.Breve}>EM BREVE!</h1>

                <div className={s.MainCard}>
                    {/* <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(4, 2fr)' }} >
                        <CardVinhos className={s.Cards} Title='Planeta Etna Rosso DOC 2020 750mL' Continent='Itália · Nerello Mascalese'
                            Price='385,99' imageUrl={PlanetaEtna} />
                        <CardVinhos className={s.Cards} Title='Château Baret Pessac-Léognan AOC 2012 750mL' Continent='França · Blend'
                            Price='372,94' imageUrl={ChateauBaret} />
                        <CardVinhos className={s.Cards} Title='Pulenta Estate Gran Malbec X 2019 750mL' Continent='Argentina · Malbec'
                            Price='632,32' imageUrl={Puleta} />
                        <CardVinhos className={s.Cards} Title='Pizzorno El Conta Reserva Tannat 2021 750mL' Continent='Uruguai · Tannat'
                            Price='80,00' imageUrl={Pizzorno} />
                        <CardVinhos className={s.Cards} Title='Em Breve' Continent='Em Breve' />
                        <CardVinhos className={s.Cards} Title='Em Breve' Continent='Em Breve' />
                        <CardVinhos className={s.Cards} Title='Em Breve' Continent='Em Breve' />
                        <CardVinhos className={s.Cards} Title='Em Breve' Continent='Em Breve' />
                        <CardVinhos className={s.Cards} Title='Em Breve' Continent='Em Breve' />
                        <CardVinhos className={s.Cards} Title='Em Breve' Continent='Em Breve' />
                    </Box> */}

                </div>
            </div>
        </>
    )
}