import React, { useEffect, useState } from "react"
import Loading from "./Loading";

export default function Maps() {
    const [loc, setLoc] = useState({lat: null, lng: null});
    const [seeingFriends, setSeeingFriends] = useState(false);

    const additionalMarkers = {}

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position) {
        setLoc({  "lat": 43.542807643988375,
        "lng": -79.66334984464599,})
        // setLoc({lat: position.coords.latitude, lng: position.coords.longitude});
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
        {
            "id": 6,
            "title": "Hackathon Day 1 Kick-Off!",
            "content": "Exciting times ahead! Today marks the first day of Deerhacks. We're all set to welcome our talented participants...",
            "date": "2024-02-06T09:00:00.000Z",
            "author": "HackathonHost",
            "lat": 43.552169907378196,
            "lng": -79.6615949101189,
            "colour": "red"
        },
        {
            "id": 7,
            "title": "Team Formation Strategies",
            "content": "Looking for teammates? Here are some tips on forming the perfect hackathon team. Remember, diversity in skills is key...",
            "date": "2024-02-06T11:00:00.000Z",
            "author": "TeamAdvisor",
            "lat": 43.55060615554313,
            "lng": -79.67268387388183,
            "colour": "purple"
        },
        {
            "id": 8,
            "title": "First Coding Session Begins!",
            "content": "Let the coding begin! Our first session has started, and the energy is electric. Can't wait to see what everyone creates...",
            "date": "2024-02-06T14:00:00.000Z",
            "author": "CodeMaster",
            "lat": 43.542907643988375,
            "lng": -79.66534984464599,
            "colour": "purple"
        },
        {
            "id": 9,
            "title": "Midnight Snacks Available",
            "content": "Feeling peckish? Midnight snacks are now available in the main hall. A little fuel to keep those brilliant minds working!",
            "date": "2024-02-07T00:00:00.000Z",
            "author": "SnackSupplier",
            "lat": 43.54322682534381,
            "lng": -79.66659047511667,
            "colour": "pink"
        },
        {
            "id": 10,
            "title": "Morning Yoga Session",
            "content": "Join us for a refreshing morning yoga session! It's a great way to rejuvenate and get ready for another day of hacking...",
            "date": "2024-02-07T06:30:00.000Z",
            "author": "YogaInstructor",
            "lat": 43.551653466191095,
            "lng": -79.66037119467205,
            "colour": "green"
        },
        {
            "id": 11,
            "title": "Expert Panel Discussion",
            "content": "Don't miss our panel discussion featuring industry experts. They'll be sharing insights on the latest tech trends and answering your questions...",
            "date": "2024-02-07T10:00:00.000Z",
            "author": "TechPanelist",
            "lat": 43.553169907378196,
            "lng": -79.6625949101189,
            "colour": "red"
        },
        {
            "id": 12,
            "title": "Hackathon Progress Update",
            "content": "We're halfway through the hackathon! Here's a quick update on the amazing progress our teams have made so far...",
            "date": "2024-02-07T13:00:00.000Z",
            "author": "ProgressChecker",
            "lat": 43.55260615554313,
            "lng": -79.67168387388183,
            "colour": "yellow"
        },
        {
            "id": 13,
            "title": "Evening Networking Event",
            "content": "Join us this evening for a networking event. It's a fantastic opportunity to connect with fellow hackers and industry professionals...",
            "date": "2024-02-07T18:00:00.000Z",
            "author": "NetworkGuru",
            "lat": 43.543807643988375,
            "lng": -79.66434984464599,
            "colour": "blue"
        },
        {
            "id": 14,
            "title": "Late Night Coding Tips",
            "content": "Need some help staying focused during the late-night coding session? Check out these tips to keep your energy up and your code sharp...",
            "date": "2024-02-08T01:00:00.000Z",
            "author": "NightOwlCoder",
            "lat": 43.54332682534381,
            "lng": -79.66759047511667,
            "colour": "yellow"
        },
        {
            "id": 15,
            "title": "Final Day Countdown",
            "content": "It's the final countdown! Just a few hours left in Deerhacks. Let's give it our all and finish strong!",
            "date": "2024-02-08T09:00:00.000Z",
            "author": "FinalHour",
            "lat": 43.551753466191095,
            "lng": -79.66137119467205,
            "colour": "pink"
        },
        {
            "id": 16,
            "title": "Project Submission Reminder",
            "content": "A friendly reminder to all teams to submit their projects by 12 PM. Make sure you've included all required documentation...",
            "date": "2024-02-08T10:00:00.000Z",
            "author": "SubmissionAlert",
            "lat": 43.553269907378196,
            "lng": -79.6635949101189,
            "colour": "orange"
        },
        {
            "id": 17,
            "title": "Judging Commences",
            "content": "Our esteemed panel of judges has begun evaluating the projects. Best of luck to all teams!",
            "date": "2024-02-08T13:00:00.000Z",
            "author": "JudgePanel",
            "lat": 43.55270615554313,
            "lng": -79.67268387388183,
            "colour": "orange"
        },
        {
            "id": 18,
            "title": "Closing Ceremony Prep",
            "content": "We're preparing for the closing ceremony. It's been an incredible journey, and we can't wait to celebrate with everyone!",
            "date": "2024-02-08T15:00:00.000Z",
            "author": "EventOrganizer",
            "lat": 43.543907643988375,
            "lng": -79.66534984464599,
            "colour": "blue"
        },
        {
            "id": 19,
            "title": "Award Ceremony and Farewell",
            "content": "Join us for the award ceremony where we'll be announcing the winners. It's also time to bid farewell to an amazing event...",
            "date": "2024-02-08T17:00:00.000Z",
            "author": "AwardHost",
            "lat": 43.54342682534381,
            "lng": -79.66859047511667,
            "colour": "orange"
        },
        {
            "id": 20,
            "title": "Thank You and See You Next Year!",
            "content": "A huge thank you to everyone who participated in Deerhacks. You've all been amazing! See you at next year's event!",
            "date": "2024-02-08T20:00:00.000Z",
            "author": "GratefulAdmin",
            "lat": 43.551853466191095,
            "lng": -79.66237119467205,
            "colour": "yellow"
        }
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
            <div style={{position: "relative"}}className="map-wrapper">
                {loc.lat && loc.lng ? (
                    <img className="map" 
                         src={`https://maps.googleapis.com/maps/api/staticmap?center=University%20of%20Toronto%20Mississauga&zoom=16.8&size=800x800&maptype=satellite&markers=color:red%7Clabel:*%7C${loc.lat},${loc.lng}&${seeingFriends ? lol : additionalMarkersString}&key=AIzaSyCklw5wDpiZXutdUxDKiW2PKpHh0Ap-wEw`} 
                         alt="Map"/>

                ) : <Loading/>}
            </div>
            <button className="toggle-friends" onClick={toggle}>Toggle Trusted Only</button>
        </div>
    );
}
