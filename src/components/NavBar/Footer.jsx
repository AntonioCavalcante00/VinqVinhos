import { Link } from 'react-router-dom';
import s from './Footer.module.css'

import { FiInstagram } from "react-icons/fi";
import { BsTwitterX, BsFacebook } from "react-icons/bs";



import GrandCru from '../public/Sponsors/GrandCru.svg'
import Cantu from '../public/Sponsors/Cantu.png'
import Wine from '../public/Sponsors/Wine.svg'
import Vino from '../public/Sponsors/vino_mundi.png'
import ParkStreet from '../public/Sponsors/parkstreet.png'



export default function Footer() {
    return (
        <>
            <div className={s.Container}>
                <p>Patrocinadores</p>
                <div className={s.Sponsors}>
                    <img src={GrandCru} alt="GrandCru" />
                    <img src={Cantu} alt="Cantu" />
                    <img src={Wine} alt="Wine" />
                </div>
                <div className={s.Sponsors}>
                    <img src={Vino} alt="Vino Mundi" />
                    <img src={ParkStreet} alt="ParkStreet" />
                </div>

                <p>Conecte-se</p>
                <div className={s.Social}>
                    <Link className={s.Link} to='https://www.instagram.com/vinq.vinhos?igshid=MTNiYzNiMzkwZA%3D%3D'><FiInstagram style={{ marginRight: 10 }} />Instagram</Link>
                    <Link className={s.Link} to='https://www.facebook.com/profile.php?id=61553710023404&mibextid=ZbWKwL'><BsFacebook style={{ marginRight: 10 }} />Facebook</Link>
                    <Link className={s.Link} to='https://www.twitter.com/'><BsTwitterX style={{ marginRight: 10 }} />Twitter</Link>
                </div>
            </div>
            <div className={s.Right}>
                <span>© 2023 VinQ-Vinhos</span>
            </div>
        </>

    )
}

