import {useState} from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😭": "crying",
  "❤️": "love",
  "😑": "annoyance",
  "🤡":"clown face",
  "👻":"ghost",
  "👀": "eyes",
  "😠":"angry"
};

var emojis= Object.keys(emojiDictionary);

export default function App() {

  var [meaning, setMeaning] = useState("");

  function emojiHandler(event){
    var userInput= event.target.value;
    var meaning= emojiDictionary[userInput];
    if(meaning === undefined){
      meaning= "not found in database";
    }
    setMeaning(meaning);
    //console.log(meaning);
  }

  function emojiClickHandler(emoji){
    var meaning= emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (

    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiHandler} />
      <div> {meaning}</div> 
      <div>Emojis known: </div>  
      {
        emojis.map(function(emoji){
          return(
            <span 
            onClick={() => emojiClickHandler(emoji)}
            style={{fontSize: "1.5rem", padding: "0.5rem"}} 
            key={emoji}>
              {emoji}
              </span>
          );
        })
      }
    </div>
  );
}