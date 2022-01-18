import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const uri = "mongodb+srv://canerozkan:canerozkan74@cluster1.sczfu.mongodb.net/meetups?retryWrites=true&w=majority";
        const client = await MongoClient.connect(uri);
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        console.log(result);
        await client.close();

        res.status(201).json({ message: 'Meetup inserted' });

    }
}

export default handler;
