import mongoose from 'mongoose';


const connection={};


const dbConnect = async function () {
  if (connection.isConnected) {
    //console.log("connected")
return;
  }

  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = await db.connections[0].readyState;

}

export default dbConnect;