import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import s from './Map.module.css';

const Map = () => {
    const multiPolygon = [
        [
            [-31.5990774, -53.328602],
            [-31.6030000, -53.333600],
            [-31.6000000, -53.332000],
        ],
    ];

    useEffect(() => {
        const mymap = L.map('map').setView([-31.5990774, -53.328602], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(mymap);


        multiPolygon.forEach((multiPolygon) => {

            L.rectangle(multiPolygon, { color: 'blue' }).addTo(mymap);

        });
    }, []);

    return <div id="map" className={s.Maps}></div>;
};

export default Map;
