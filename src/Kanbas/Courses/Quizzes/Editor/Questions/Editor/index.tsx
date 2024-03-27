import React, { useState } from "react";
import Nav from "../../../../../../Nav";
import Details from "../../Details";
import Questions from "..";

function QuestionsEditor() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputText(event.target.value);
  };
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Multiple Choice");
  const handlePtsChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    // Check if the input is a valid integer
    if (/^\d*$/.test(value) || value === "") {
      setInputValue(value);
    }
  };
  const handleDropdownChange = (event: { target: { value: any; }; }) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    // Perform redirection based on the selected option
    switch (selectedOption) {
      case "Multiple Choice":

        break;
      case "True/False":
        
        break;
        case "Fill in the Blank":
        
        break;
    }
  };
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Question Title"
      />
      <input
        type="text"
        id="ptsBox"
        value={inputValue}
        onChange={handlePtsChange}
        placeholder="1"
        className="float-end"
        style={{width:"40px"}}
      />
      <label htmlFor="ptsBox" className="float-end ms-2" style={{ order: -1 }}>
        pts:&nbsp;
        </label>
        <select onChange={handleDropdownChange}>
        <option value="Multiple Choice">Multiple Choice</option>
        <option value="True/False">True/False</option>
        <option value="Fill in the Blank">Fill in the Blank</option>
      </select>
      <hr/>
        <p>Question: {inputText}</p>
        {selectedOption && (
        <div>
          <p>Selected Option: {selectedOption}</p>
          {/* I used dummy tags for now, just to verify if its working -Harshi*/}
          {selectedOption === "Multiple Choice" && <Nav/>}
      {selectedOption === "True/False" && <Details/>}
      {selectedOption === "Fill in the Blank" && <Questions/>}
        </div>
      )}
      
    </div>
  );
}

export default QuestionsEditor;
