import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😋": "Savouring Food",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "🤩": "Star-Struck",
  "😏": "Smirking Face",
  "😒": "Unamused Face"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojiList = Object.keys(emojiDictionary);

  function emojiClickHandler(item) {
    //processing
    var meaning = emojiDictionary[item];
    setMeaning(meaning); //react call which sets the meaning
  }

  function emojiInputHandler() {
    //processing
    var emoji = event.target.value;

    var meaning = emojiDictionary[emoji];
    // when key is a variable, we use this notation otherwise we use emojiDict.key_name
    if (meaning === undefined) {
      meaning = "Emoji not found in our database";
    }

    setMeaning(meaning); //react call which sets the meaning
  }

  return (
    <div className="App">
      <h1>Know your emotions..</h1>

      <input onChange={emojiInputHandler} />

      <div className="meaning">Meaning: {meaning}</div>

      <ul style={{ paddingInlineStart: "0px" }}>
        {emojiList.map((item) => {
          return (
            <li
              onClick={() => emojiClickHandler(item)}
              style={{
                fontSize: "2rem",
                listStyle: "none",
                display: "inline",
                cursor: "pointer"
              }}
              key={item}
            >
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
