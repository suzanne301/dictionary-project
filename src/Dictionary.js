import React, { useState } from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);


  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  
  function handleShecodesResponse(response) {
    setPhotos(response.data.photos);
  }

  // documentation: https://dictionaryapi.dev/
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse); 

 
    let shecodesApiKey = "03351b3tc2f7fc9oa83ff4ea58bed167";
    let shecodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`
    axios.get(shecodesApiUrl).then(handleShecodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="search" 
              onChange={handleKeywordChange} 
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: cluttered, prune, think, serendipitous
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
  );
  } else {
    load();
    return "Loading"
  }
}