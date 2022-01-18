import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://cdn.britannica.com/50/198450-050-3554B2AF/Ankara-Turkey.jpg',
        address: 'Ankara',
        description: 'This is a first meetup !'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://cdn.britannica.com/50/198450-050-3554B2AF/Ankara-Turkey.jpg',
        address: 'İstanbul',
        description: 'This is a second meetup !'
    }
]

function Home() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return (
        <MeetupList meetups={loadedMeetups}/>
    )
}

export default Home;
