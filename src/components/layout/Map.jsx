import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import s from './Map.module.css'

const Map = () => {
    useEffect(() => {
        // Inicialize o mapa
        const mymap = L.map('map').setView([-31.5990774, -53.328602], 19);

        // Adicione uma camada de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(mymap);

        L.marker([-31.5990774, -53.328602]).addTo(mymap);
    }, []);

    return (
        <div id="map" className={s.Maps}></div>
    )
};

export default Map;
