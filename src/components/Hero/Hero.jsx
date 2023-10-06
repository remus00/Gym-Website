import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                {/* the beat add */}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn more</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>118 bpm</span>
                </div>

                {/* hero images */}
                <img src={Hero_image} alt="hero_image" className="hero_image" />
                <img
                    src={Hero_image_back}
                    alt="hero_img_back"
                    className="hero_image_back"
                />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
