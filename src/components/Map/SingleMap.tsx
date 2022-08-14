import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import {useSelector} from "react-redux";


const SingleMap = ({x , y, st_id}: { x: number, y: number, st_id: string}) => {
    // @ts-ignore

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg';
        const map = new mapboxgl.Map({
            container: 's-map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
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

    }, [st_id])
    return (
        <div id={'s-map'} style={{  width: '100%', height: '400px', }}/>
    );
};

export default SingleMap;
