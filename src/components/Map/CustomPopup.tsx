import React from 'react'
import mapboxgl from 'mapbox-gl'

const CreateCustomPopup = (Osoite: string, Kapasiteet: number) => {
	const PopupHtml = `
            <p class="mapboxgl-popup__header">${Osoite}</p>
            <p class="mapboxgl-popup__capacity">Capacity: ${Kapasiteet}</p>
            <p>Click on the Pin to behold its glorious history</p>
    `
	const CustomPopup = new mapboxgl.Popup({
		anchor: 'bottom',
		offset: { bottom: [0, -10] },
		closeOnClick: false,
	}).setHTML(PopupHtml)
	return CustomPopup
}

export default CreateCustomPopup
