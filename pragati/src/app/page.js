"use client";
import Image from "next/image";
import styles from "./page.module.css";

import HTMLFlipBook from "react-pageflip";

function MyBook(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">
        <Image src="/image1.jpg" alt="Book Cover" width={300} height={500} />
      </div>
      <div className="demoPage">
        <Image src="/image2.jpg" alt="Book Cover" width={300} height={500} />
      </div>
    </HTMLFlipBook>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <MyBook />
    </div>
  );
}
