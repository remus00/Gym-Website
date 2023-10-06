import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import RightArrow from "../../assets/rightArrow.png";
import LeftArrow from "../../assets/leftArrow.png";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>Say about us</span>
                <span>{testimonialsData[selected].review}</span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name} -{" "}
                        {testimonialsData[selected].status}
                    </span>
                </span>
            </div>

            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="testimg" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={LeftArrow}
                        alt=""
                    />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                        src={RightArrow}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
