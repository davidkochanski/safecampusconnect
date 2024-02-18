import React, { useEffect, useState } from "react"

export default function Maps() {
    const [loc, setLoc] = useState({lat: null, lng: null});
    const [seeingFriends, setSeeingFriends] = useState(true);

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
        return markers.map(marker => `markers=color:${marker.colour}%7Clabel:${marker.title[0]}%7C${marker.lat},${marker.lng}`).join('&');
    }

        const stringToColor = (str) => {
        // Hash the string
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        // Convert the hash into a 6 digit hexadecimal code
        let color = '#';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }

        return color;
    }

    const additionalMarkersString = createMarkerString([
        {
            "id": 1,
            "title": "Welcome to SC^2!!",
            "content": "Hello and a warm welcome to all new members! This is our very first post in what we hope will become a thriving online community...",
            "date": "2024-02-01T09:00:00.000Z",
            "author": "Admin",
            "lat": 43.554169907378196,
            "lng": -79.6605949101189,
            "colour": "orange"
        },
        {
            "id": 2,
            "title": "I saw some deer!!!!!",
            "content": "This morning, while walking through the park, I was lucky enough to encounter a small group of deer grazing near the trail...",
            "date": "2024-02-02T10:00:00.000Z",
            "author": "Moderator",
            "lat": 43.56060615554313,
            "lng": -79.67068387388183,
            "colour": "yellow",
        },
        {
            "id": 3,
            "title": "Weekly Discussion Thread",
            "content": "Join our vibrant weekly discussion! This week, we dive into the captivating topic of 'The Future of Technology'...",
            "date": "2024-02-03T11:30:00.000Z",
            "author": "TechGuru",
            "lat": 43.542807643988375,
            "lng": -79.66334984464599,
            "colour": "green"

        },
        {
            "id": 4,
            "title": "Forum Rules and Guidelines",
            "content": "Welcome to our community! To ensure a positive and respectful environment for all, please make sure to read and adhere to our rules and guidelines...",
            "date": "2024-02-04T08:00:00.000Z",
            "author": "CommunityManager",
            "lat": 43.54312682534381,
            "lng": -79.66459047511667,
            "colour": "blue"


        },
        {
            "id": 5,
            "title": "Share Your Projects",
            "content": "Have you been working on something exciting? Whether it's a personal hobby, a professional project, or just a fun experiment...",
            "date": "2024-02-05T15:45:00.000Z",
            "author": "CreativeUser",
            "lat": 43.551553466191095,
            "lng": -79.65937119467205,
            "colour": "purple"
        },
    ]);

    const lol = createMarkerString(   [{
        "id": 1,
        "title": "Welcome to SC^2!!",
        "content": "Hello and a warm welcome to all new members! This is our very first post in what we hope will become a thriving online community...",
        "date": "2024-02-01T09:00:00.000Z",
        "author": "Admin",
        "lat": 43.554169907378196,
        "lng": -79.6605949101189,
        "colour": "orange"
    },
    {
        "id": 2,
        "title": "I saw some deer!!!!!",
        "content": "This morning, while walking through the park, I was lucky enough to encounter a small group of deer grazing near the trail...",
        "date": "2024-02-02T10:00:00.000Z",
        "author": "Moderator",
        "lat": 43.56060615554313,
        "lng": -79.67068387388183,
        "colour": "yellow"
    },
    {
        "id": 3,
        "title": "Weekly Discussion Thread",
        "content": "Join our vibrant weekly discussion! This week, we dive into the captivating topic of 'The Future of Technology'...",
        "date": "2024-02-03T11:30:00.000Z",
        "author": "TechGuru",
        "lat": 43.542807643988375,
        "lng": -79.66334984464599,
        "colour": "green"

    }]);

    const toggle = () => {
        setSeeingFriends(!seeingFriends)
    }

    return (
        <div className="map-container">
            <div className="map-wrapper">
                {loc.lat && loc.lng && (
                    <img className="map" 
                         src={`https://maps.googleapis.com/maps/api/staticmap?center=University%20of%20Toronto%20Mississauga&zoom=16.8&size=800x800&maptype=satellite&markers=color:red%7Clabel:*%7C${loc.lat},${loc.lng}&${seeingFriends ? lol : additionalMarkersString}&key=AIzaSyCklw5wDpiZXutdUxDKiW2PKpHh0Ap-wEw`} 
                         alt="Map"/>

                )}
            </div>
            <button className="toggle-friends" onClick={toggle}>Toggle Trusted Only</button>
        </div>
    );
}
