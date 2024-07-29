import { TbRefresh } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

function QuoteContainer() {
  const [quote, setQuote] = useState([{quote : "I am gay", author : "Gopal Gautam"}]);
  async function generateQuotes() {
    const category = "happiness";
    const apiKey = "/8dg23S4dvR8beZ04xbfPw==MwHtyTtAnkSbrC95";

    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: { "X-Api-Key": apiKey },
        contentType: "application/json",
      })
      .then((response) => {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch((error) => {
        console.error(
          "Error: ",
          error.response ? error.response.data : error.message
        );
      });
  }

  useEffect(() => {
    // generateQuotes();
  }, []);

  return (
    <div className="self-center m-auto  bg-sky-400 bg-opacity-10 rounded-md h-[50vh] w-[60vw] flex flex-col justify-between items-center">
      <div className="flex h-80 w-full p-4 quote-text text-white text-center text-2xl justify-center items-center">
        <span>{quote[0].quote}</span>
      </div>

      <div className="w-[80%] m-auto flex justify-between p-4 text-white">
        <div className="flex justify-center">
          <h1 className="font-medium text-lg px-5 py-2.5 mb-2">
            {quote[0].author}
          </h1>
        </div>
        <div className="flex gap-7">
          <button
            onClick={generateQuotes}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 transition-colors"
            aria-label="Generate new quote"
          >
            <TbRefresh />
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 transition-colors"
            aria-label="Share on Twitter"
          >
            <FaXTwitter />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteContainer;
