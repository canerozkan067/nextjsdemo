import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb";

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

function Home(props) {
    return <MeetupList meetups={props.meetups}/>
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an API

    const uri = "mongodb+srv://canerozkan:canerozkan74@cluster1.sczfu.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find().toArray();
    await client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default Home;
