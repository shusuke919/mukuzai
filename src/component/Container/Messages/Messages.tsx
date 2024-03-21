"use client";
import React from "react";
import styles from "./Messages.module.scss";

const Messages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fixedContent}>
        <img
          src={"/message_left.png"}
          alt={"Right"}
          className={styles.zoomEffect}
        />
      </div>
      <div className={styles.scrollableImageContainer}>
        <img
          src={"/message_right.png"}
          alt={"Right"}
          className={styles.zoomEffect}
        />
        <div className={styles.verticalTextContainer}>
          <p className={styles.verticalText}>
            快適な空間と笑顔を届ける
            <br />
            コンテナハウス設計
          </p>
        </div>
        <div className={styles.textArea}>
          <div className={styles.textBlock}>
            <p>コンテナハウスだからこそ実現できる、</p>
            <p>柔軟な空間利用。</p>
            <p>生活そのものが変わるような場所を提供します。</p>
          </div>
          <div className={styles.textBlock}>
            <p>私たちは、一つ一つのコンテナハウスに、</p>
            <p>あなたの理想とする快適な生活を映し出します。</p>
            <p>自然と調和し、環境にやさしく、それでいて機能的。</p>
          </div>
          <div className={styles.textBlock}>
            <p>人と人、人と自然とをつなぐ</p>
            <p>「快適な暮らしを実現するための、細部にわたるこだわり</p>
            <p>あなたの夢を形にする、その一歩を踏み出しましょう。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
