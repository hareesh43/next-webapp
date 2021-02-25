import Head from "next/head";
import Footer from "../comps/Footer";

import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}> Hello world to nextjs !!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde eos
        rerum. Repudiandae maxime atque est consequatur nobis molestias alias
        sed. Quod quae, distinctio modi molestias dolores minima est et.
      </p>
      <Link href="ninjas">
        <a className={styles.btn}>see ninjas</a>
      </Link>
    </div>
  );
}
