import dbConnect from "../../../utils/mongo.js";
import Hotels from "../../../Models/HotelsModel.js";

export default async function handler(req, res) {
  dbConnect();

//GET HOTELS
  if (req.method === "GET") {
    try {
      res.status(200).json({ name: "" });
    } catch (err) {
      console.log(err);
    }
  }
  //CREATE HOTELS

  if (req.method === "POST") {
    const newHotel = new Hotels(req.body);
    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (err) {
      console.log(err);
    }
  }

}
