import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import {useSelector} from "react-redux";
import {Station} from "../../store/actions/types";
import CreateCustomPopup from "./CustomPopup";
import {useNavigate} from "react-router-dom";

const Map = () => {
    // @ts-ignore
    const allStations = useSelector((state) => state.stations.allStations)

    const navigate = useNavigate();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/light-v9', // style URL
            center: [24.93, 60.16], // starting position [lng, lat]
            zoom: 12, // starting zoom// display the map as a 3D globe
        });
        map.on('style.load', () => {
            // @ts-ignore
            map.setFog({}); // Set the default atmosphere style
        });
        allStations.forEach( (station : Station) => {
            const popup = CreateCustomPopup(station.Osoite, station.Kapasiteet )

            const marker = new mapboxgl.Marker()
                .setLngLat([station.x, station.y])
                .setPopup(popup)
                .addTo(map);

            marker.getElement().addEventListener('click', () => {
            navigate(`/stations/${station.ID}`)
            });

        })
    }, [])
    return (
        <div id={'map'} style={{ width: '100%', height: '100vh'}}/>
    );
};

export default Map;
