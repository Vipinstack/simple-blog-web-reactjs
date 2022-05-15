import React from "react";
import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/570041/pexels-photo-570041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        className="writeImg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInputs">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInputs" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="writeInput"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write Your story..."
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
