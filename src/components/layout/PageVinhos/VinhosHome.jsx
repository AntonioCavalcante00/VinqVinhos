import CardVinhos from '../CardVinhos'

import s from './VinhosHome.module.css'

import PlanetaEtna from '../public/Wines/PlanetaEtna.png'
import ChateauBaret from '../public/Wines/ChâteauBaret.png'
import Puleta from '../public/Wines/Puleta.png'
import Pizzorno from '../public/Wines/Pizzorno.png'


export default function VinhoHome() {
    return (
        <>
            <div className={s.Container}>
                <div className={s.MainCard}>
                    <CardVinhos Title='Planeta Etna Rosso DOC 2020 750mL' Continent='Itália · Nerello Mascalese'
                        Price='385,99' imageUrl={PlanetaEtna} />
                    <CardVinhos Title='Château Baret Pessac-Léognan AOC 2012 750mL' Continent='França · Blend'
                        Price='372,94' imageUrl={ChateauBaret} />
                    <CardVinhos Title='Pulenta Estate Gran Malbec X 2019 750mL' Continent='Argentina · Malbec'
                        Price='632,32' imageUrl={Puleta} />
                    <CardVinhos Title='Pizzorno El Conta Reserva Tannat 2021 750mL' Continent='Uruguai · Tannat'
                        Price='80,00' imageUrl={Pizzorno} />
                </div>
            </div>
        </>
    )
}