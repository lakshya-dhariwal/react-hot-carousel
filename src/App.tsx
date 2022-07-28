import "./App.css";
import CarouselProvider from "./components/Carousel";

function App() {
  return (
    <div className="App">
      {/* demo */}
      <CarouselProvider>
        <div className="p-4 outline outline-gray-800">1</div>
        <div className="p-4 outline outline-gray-800">2</div>
        <div className="p-4 outline outline-gray-800">3</div>
        <div className="p-4 outline outline-gray-800">4</div>
      </CarouselProvider>

      {/* demo 2 */}
      <div className="w-[300px] mx-auto my-10">
        <CarouselProvider
          SecondsIntervalBeforeNextSlide={5}
          nextButton={
            <button className="border bg-gray-800 text-white  h-[3rem] px-[1.5rem] rounded-xl mx-3">
              Next
            </button>
          }
          previousButton={
            <button className="border bg-gray-800 text-white   h-[3rem]  px-[1.5rem] rounded-xl mx-3">
              Previous
            </button>
          }
        >
          <div className="p-4 outline outline-gray-800">
            next slide in 5 sec{" "}
          </div>
          <div className="p-4 outline outline-gray-800">slide 2</div>
          <div className="p-4 outline outline-gray-800">slide 3</div>
          <div className="p-4 outline outline-gray-800">slide 4</div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default App;
