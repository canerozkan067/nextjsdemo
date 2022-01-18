import MeetupList from "../components/meetups/MeetupList";

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
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}

export default Home;
