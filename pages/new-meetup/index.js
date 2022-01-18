import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

function NewMeetup() {
    const router = useRouter();

    const onAddMeetup = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.json();

        console.log(data);

        await router.push('/');
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}

export default NewMeetup;
