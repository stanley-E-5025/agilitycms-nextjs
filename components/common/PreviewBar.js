import React, { useState } from "react";
import {
  FaInfoCircle,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

/**
 * This is a preview bar that is enabled by default to handle viewing content in preview & live mode, remove this for production use.
 **/

const PreviewBar = ({ isPreview, isDevelopmentMode }) => {
  const [open, setOpen] = useState(false);

  // handle view function to determine preview / live mode
  const handleView = () => {
    if (isDevelopmentMode) {
      alert("You are currently in Development Mode, Live Mode is unavailable.");
    } else {
      if (!isDevelopmentMode && !isPreview) {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
          // Process our return data
          if (xhr.status >= 200 && xhr.status < 300) {
            // What do when the request is successful
            const previewKey = xhr.responseText;

            window.location.replace(
              `${window.location.pathname}?agilitypreviewkey=${escape(
                previewKey
              )}`
            );
          }
        };
        // Create and send a GET request
        xhr.open("GET", "/api/generatePreviewKey");
        xhr.send();
      } else {
        const exit = confirm("Would you like to exit Preview Mode?");
        if (exit === true) {
          window.location.href = `/api/exitPreview?slug=${window.location.pathname}`;
        } else return;
      }
    }
  };

  return <div className="bg-agility relative px-8 text-gray-200"></div>;
};

export default PreviewBar;
