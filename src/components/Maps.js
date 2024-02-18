import React, { useEffect } from "react"

export default function Maps() {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position) {
        alert("Latitude: " + position.coords.latitude + 
        "\nLongitude: " + position.coords.longitude);
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
    })

    return (
        <div className="map-container">
            <div className="map-wrapper">
            <img className="map" src="https://maps.googleapis.com/maps/api/staticmap?center=University%20of%20Toronto%20Mississauga&zoom=16.8&size=800x800&maptype=satellite&markers=color:red%7Clabel:S%7CNorth%20Bldg,%20Mississauga,%20ON%20L5L%203E2&key=AIzaSyCklw5wDpiZXutdUxDKiW2PKpHh0Ap-wEw"/>
            </div>

        </div>
    )
}