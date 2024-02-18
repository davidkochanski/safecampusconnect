import React, { useEffect, useState } from "react"

export default function Maps() {
    const [loc, setLoc] = useState({lat: null, lng: null});

    const additionalMarkers = {}

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position) {
        setLoc({lat: position.coords.latitude, lng: position.coords.longitude});
    }
    
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }
    
    useEffect(() => {
        getLocation();
        console.log(loc.lat);
        console.log(loc.lng);
    }, [])

    // Function to create marker string from additionalMarkers array
    const createMarkerString = (markers) => {
        return markers.map(marker => `markers=color:${marker.colour ?? "green"}%7Clabel:P%7C${marker.lat},${marker.lng}`).join('&');
    }

    const additionalMarkersString = createMarkerString([
        { lat: 43.54993811762711, lng: -79.66665821771963, colour: "orange"},
        { lat: 43.5583296328638, lng: -79.67431624549853 },
        { lat: 43.55988281913869, lng: -79.6642478851147 },
        { lat: 43.55304175529434, lng: -79.66633744064775 },
        { lat: 43.55569521786492, lng: -79.67027537218382 },
        { lat: 43.554169907378196, lng: -79.6605949101189 },
        { lat: 43.56060615554313, lng: -79.67068387388183 },
        { lat: 43.542807643988375, lng: -79.66334984464599 },
        { lat: 43.54312682534381, lng: -79.66459047511667 },
        { lat: 43.551553466191095, lng: -79.65937119467205 }
    ]);

    return (
        <div className="map-container">
            <div className="map-wrapper">
                {loc.lat && loc.lng && (
                    <img className="map" 
                         src={`https://maps.googleapis.com/maps/api/staticmap?center=University%20of%20Toronto%20Mississauga&zoom=16.8&size=800x800&maptype=satellite&markers=color:red%7Clabel:S%7C${loc.lat},${loc.lng}&${additionalMarkersString}&key=AIzaSyCklw5wDpiZXutdUxDKiW2PKpHh0Ap-wEw`} 
                         alt="Map"/>
                )}
            </div>
        </div>
    );
}
