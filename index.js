import Head from "next/head";
import Image from "next/image"
// import Feed from "./comp/Feed";
// import Header from "./comp/Header";
// import Modal from "../comp/Modal";
// import MyModal from "../comp/Modal";
// import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generate" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />

            <Feed />

            <Modal />
        </div>
    );
}