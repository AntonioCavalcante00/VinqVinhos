import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Polygon, Tooltip } from 'react-leaflet'; // Importe Polygon e Tooltip do pacote 'react-leaflet'

import s from './Map.module.css';

const Map = () => {
    const multiPolygon = [
        [
            [-31.5990774, -53.328607],
            [-31.6000774, -53.328903],
            [-31.5990774, -53.329904],
        ],
    ];

    useEffect(() => {
        // Inicialize o mapa
        const mymap = L.map('map').setView([-31.5990774, -53.328602], 13);

        // Adicione uma camada de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);

        // Adicione polígonos ao mapa
        multiPolygon.forEach((polygonCoords) => {
            const polygon = L.polygon(polygonCoords, { color: 'purple' }).addTo(mymap);

            // Adicione Tooltip ao polígono
            polygon.bindTooltip('Sticky Tooltip for Polygon', { sticky: true }).openTooltip();
        });
    }, []);

    return <div id="map" className={s.Maps}></div>;
};

export default Map;
