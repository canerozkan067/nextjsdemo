import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
    const onAddMeetup = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}

export default NewMeetup;
