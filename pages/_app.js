import "../styles/globals.css";
import Layout from "../components/Layout";
import { SearchContextProvider } from "../context/SearchContext";
import {AuthContextProvider} from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
   
      <AuthContextProvider>
        <SearchContextProvider>
          <Component {...pageProps} />
        </SearchContextProvider>
      </AuthContextProvider>
 
  );
}

export default MyApp;
