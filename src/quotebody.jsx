import { useState } from "react";

function Quto() {
  const quots = [
    { text: "With the new day comes new strength and new thoughts", author: "Eleanor Roosevelt" },
    { text: "With the new day comes new strength ", author: "Eleanor " },
    { text: "With the new day comes new strength and new ", author: " Roosevelt" },
  ];
  
  const [value, setValue] = useState({
    quote: quots[0].text,
    author: quots[0].author
  });

  function sibily() {
    const randomIndex = Math.floor(Math.random() * quots.length);
    const randomQuote = quots[randomIndex];

    setValue({
      quote: randomQuote.text,
      author: randomQuote.author
    });
  }

  return (
    <div className='bg-gray-300 w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className="bg-gray-400 w-[800px] h-[400px] rounded-[50px] flex items-center justify-evenly flex-col">
        <div className="w-[700px] h-[100px] rounded-[50px] bg-gray-500 flex items-center justify-center flex-col">
          <h2 className="text-white">{value.quote}</h2>
          <p>{value.author}</p>
        </div>
        <button className="h-1/6 w-1/6 bg-gray-600 rounded-[50px]" onClick={sibily}>click</button>
      </div>
    </div>
  );
}

export default Quto;
