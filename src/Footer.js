import React from "react";




function Footer(){

    const currentTime = new Date();
    const getYear = currentTime.getFullYear();

    return <footer><p>Copyright {getYear}</p> </footer>
};

export default Footer;