import Head from "next/head";
import Header from "../components/Header";
import Lists from "../components/Lists";

export default function list() {
  return (
    <div>
      <Head>
        <title>Hotel Reservation | List</title>
      </Head> 
      <Header/>
     <Lists/>
    </div>
  );
}
