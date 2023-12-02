import { Box, Divider } from "@mui/material"

import AreaCard from "../layout/AreaCard"


import s from './Team.module.css'

import dono from '../public/TeamPhoto/dono.jpg'
import joao from '../public/TeamPhoto/joao.jpg'
import pedro from '../public/TeamPhoto/pedro.png'
import marcone from '../public/TeamPhoto/marcone.jpg'
import calebe from '../public/TeamPhoto/calebe.jpg'
import antonio from '../public/TeamPhoto/antonio.jpg'
import amauri from '../public/TeamPhoto/amauri.jpg'


function Team() {
    return (
        <>
            <div className={s.Container}>
                <div className={s.Title}>
                    <h1>Funcionários</h1>
                </div>
                <div className={s.MainCard}>
                    <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(4, 1fr)' }} >
                        <AreaCard name='Zeias' profession='Proprietario das Terras' imageUrl={dono} />
                        <AreaCard name='Pedro Nobre' profession='Controle de Qualidade' imageUrl={pedro} />
                        <AreaCard name='Marcone' profession='Sommelier' imageUrl={marcone} />
                        <AreaCard name='Antonio Cavalcante' profession='Departamento Financeiro' imageUrl={antonio} />
                        <AreaCard name='Calebe Melo' profession='Gerente de Produção' imageUrl={calebe} />
                        <AreaCard name='João Lucas' profession='Enólogo' imageUrl={joao} />
                        <AreaCard name='Amauri' profession='Gerente de Vendas' imageUrl={amauri} />
                    </Box>
                </div>
            </div>

            <Box sx={{ width: '100', marginLeft: 5, marginRight: 5, marginTop: 10 }}>
                <Divider sx={{ backgroundColor: '#800000', height: 1.3 }} />
            </Box>
        </>
    )
}

export default Team