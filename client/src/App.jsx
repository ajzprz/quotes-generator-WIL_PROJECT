import BackgroundVideo from "./components/BackgroundVideo";
import QuoteContainer from "./components/QuoteContainer";

export default function App() {
  return (
    <div >
      <div className="url h-[100vh]  w-[100%] flex justify-center items-center">
        <BackgroundVideo/>
        <QuoteContainer/>
      </div>
    </div>
  );
}
