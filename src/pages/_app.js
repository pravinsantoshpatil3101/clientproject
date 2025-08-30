import "@/styles/globals.css";
import { CommonProvider } from "../context/commonContexr";
export default function App({ Component, pageProps }) {
  return (
      <CommonProvider>
      <Component {...pageProps} />
    </CommonProvider>
    );
}
