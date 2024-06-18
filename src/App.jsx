import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const paragraph =
    "A frontend developer is a crucial asset in any tech team, responsible for creating the user-facing side of websites and applications. They combine technical skills with a keen eye for design, ensuring that the interface is both functional and aesthetically pleasing. By utilizing languages like HTML, CSS, and JavaScript, frontend developers bring to life the visions of designers and the requirements of clients. Their role requires staying updated with the latest web technologies and trends, constantly adapting to new tools and frameworks. In essence, frontend developers bridge the gap between the conceptual and the tangible, making user interactions smooth and enjoyable.";

  const words = paragraph.split(" ");

  const randomColor = () => {
    const letters = "0123456789abcdef";

    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;
  };

  const [colors, setColors] = useState(words.map(() => randomColor()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColors(words.map(() => randomColor()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className="container">
      <p className="paragraph">
        {words.map((word, index) => (
          <span
            key={index}
            style={{ color: colors[index], marginRight: "5px" }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default App;
