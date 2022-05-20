import dbConnect from "../../utils/mongo"


export default function handler(req, res) {

    dbConnect();
    if(req.method === 'GET') {
      try{
    res.status(200).json({ name: 'this auth' })
      }catch(err){
        console.log(err);
      }
    }
  }
  