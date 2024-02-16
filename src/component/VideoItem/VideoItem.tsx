import React from "react";
import styles from "./VideoItem.module.scss";

const VideoItem = () => {
  return (
    <div className={styles.video_wrapper}>
      <video
        src="/sauna.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      ></video>
    </div>
  );
};

export default VideoItem;
