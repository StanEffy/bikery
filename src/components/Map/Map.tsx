import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaG9seWRvbmsiLCJhIjoiY2t3bTV4c2s5MXdqaTJ2bWxqYmNzeXg4ciJ9.9mHUItDBPKx0if6COMXKEg';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [24.93, 60.16], // starting position [lng, lat]
            zoom: 12, // starting zoom// display the map as a 3D globe
        });
        map.on('style.load', () => {
            // @ts-ignore
            map.setFog({}); // Set the default atmosphere style
        });
    }, [])
    return (
        <div id={'map'} style={{ width: '100%', height: '100vh'}}/>
    );
};

export default Map;
