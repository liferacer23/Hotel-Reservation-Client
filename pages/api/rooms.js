import dbConnect from "../../utils/mongo"


export default function handler(req, res) {

    dbConnect();
    if(req.method === 'GET') {
    res.status(200).json({ name: 'Rooms' })
    }
  }
  