import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return <MeetupDetail
        image={'https://cdn.britannica.com/50/198450-050-3554B2AF/Ankara-Turkey.jpg'}
        title={'Ankara'}
        address={'Ankara'}
        description={'Ankara'}
    />
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    //fetch a single data
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: 'https://cdn.britannica.com/50/198450-050-3554B2AF/Ankara-Turkey.jpg',
                id: meetupId,
                title: 'Ankara',
                address: 'Ankara',
                description: 'Ankara'
            }
        }
    }
}

export default MeetupDetails;
