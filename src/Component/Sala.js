import React, { Component } from "react";

const video = "";

export default class Salas extends Component {
  render() {
    return (
      <>
        <div>
          <video src={video} poster="" />
          <div>
            <button> Play </button>
            <input type="range" min="0" max="100" />
            <select>
              {[1, 2, 3].map((speed) => (
                <option key={`speedChange_${speed}`}>{speed}</option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  }
}
