import React from "react";
import "./Reason.css";
import Img1 from "../../assets/image1.png";
import Img2 from "../../assets/image2.png";
import Img3 from "../../assets/image3.png";
import Img4 from "../../assets/image4.png";
import Nb from "../../assets/nb.png";
import Adidas from "../../assets/adidas.png";
import Nike from "../../assets/nike.png";
import Tick from "../../assets/tick.png";

const Reason = () => {
    return (
        <div className="reasons" id="reasons">
            <div className="left-r">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">why</span>
                    <span> choose us?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={Tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span className="parteners-span">Our Parteners</span>
                <div className="parteners">
                    <img src={Nb} alt="nb" />
                    <img src={Adidas} alt="adidas" />
                    <img src={Nike} alt="nike" />
                </div>
            </div>
        </div>
    );
};

export default Reason;
