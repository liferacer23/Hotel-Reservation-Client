import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lists from "../components/Lists";
import Navbar from "../components/Navbar";

export default function list() {
  return (
    <div>
      <Head>
        <title>Hotel Reservation | List</title>
      </Head>
      <Navbar />
      <Header />
      <Lists />
      <Footer />
    </div>
  );
}
