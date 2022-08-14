import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import {useSelector} from "react-redux";


const SingleMap = ({x , y}: { x: number, y: number}) => {
    // @ts-ignore
    const allStations = useSelector((state) => state.stations.allStations)

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg';
        const map = new mapboxgl.Map({
            container: 's-map', // container ID
            style: 'mapbox://styles/mapbox/light-v9', // style URL
            center: [x, y], // starting position [lng, lat]
            zoom: 12, // starting zoom// display the map as a 3D globe
        });
        map.on('style.load', () => {
            // @ts-ignore
            map.setFog({}); // Set the default atmosphere style
        });
            const marker = new mapboxgl.Marker()
                .setLngLat([x, y])
                .addTo(map);

    }, [])
    return (
        <div id={'s-map'} style={{ maxWidth: '500px', width: '100%', height: '500px'}}/>
    );
};

export default SingleMap;
