import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";

function MeetupDetails(props) {
    return <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
}

export async function getStaticPaths() {
    const uri = "mongodb+srv://canerozkan:canerozkan74@cluster1.sczfu.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({}, {_id: 1}).toArray();
    await client.close();

    return {
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        })),
        fallback: false
    }
}

export async function getStaticProps(context) {
    //fetch a single data
    const meetupId = context.params.meetupId;

    const uri = "mongodb+srv://canerozkan:canerozkan74@cluster1.sczfu.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const selectedMeetup = await meetupCollection.findOne({_id: ObjectId(meetupId)});
    await client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;
