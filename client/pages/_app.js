import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import TopNav from "../components/TopNav";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <TopNav />
            <Component {...pageProps} />
            <ToastContainer position="top-center" />
        </>
    );
}

export default MyApp;
