import React from "react";
import "./index.css";
import PostSummaryList from "../post-list";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <PostSummaryList/>
        </>

    );
};
export default HomeComponent;