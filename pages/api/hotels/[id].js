import dbConnect from "../../../utils/mongo";
import Hotels from "../../../models/hotels";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  //UPDATE HOTELS

  if (method === "PUT") {
    try {
      const updatedHotel = await Hotels.findByIdAndUpdate(req.query.id, {$set: req.body},{new: true});
      res.status(200).json(updatedHotel);
    } catch (err) {
      console.log(err);
    }
  }
  if (method === "GET") {
    try {
      console.log(req.query);
      const hotel = await Hotels.findById(req.query.id);
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
