"use client";

import { List, XCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleTrailerButton = () => {
    setIsOpen((prevsState) => !prevsState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 ">
        <button
          className="dark:text-color-primary text-color-secondary float-right px-3 mb-1 dark:hover:text-color-yellow-fun hover:text-color-blue-tosca shadow-xl transition-all"
          onClick={handleTrailerButton}
        >
          <XCircle size={28} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 w-40 gap-4  flex dark:text-color-primary text-color-secondary dark:hover:text-color-yellow-fun hover:text-color-blue-fun hover: transition-all shadow-2xl items-center justify-center mb-0"
        onClick={handleTrailerButton}
      >
        View trailer <List size={26} />{" "}
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
