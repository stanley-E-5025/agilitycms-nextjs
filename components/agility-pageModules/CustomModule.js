import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

const CustomModule = ({ module }) => {
  const [id, setId] = useState("ZjJYqDjmGkI");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const { fields } = module;
  useEffect(() => {
    setId(getYouTubeID(fields.textblob));
  }, []);
  return (
    <div className="relative px-8">
      <div className="  max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
        <YouTube className="custom-video" videoId={id} opts={opts} />
      </div>
    </div>
  );
};

export default CustomModule;
