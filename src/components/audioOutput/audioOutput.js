import React, { Component } from "react";
import "./audioOutput.css";
import mp3_file from "./DCLG_b01_c02.mp3";

class AudioOutput extends Component {
  render() {
    return (
      <div className="audioBlock">
        <audio controls>
          <source src={mp3_file} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default AudioOutput;
