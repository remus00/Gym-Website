import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";

const Plan = () => {
    return (
        <div className="plans-contianer">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: "2rem" }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
            </div>

            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, index) => (
                    <div key={index} className="plan">
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className="feature" key={index}>
                                    <img src={WhiteTick} alt="WhiteTick" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="benefits">
                            <span>See more benefits </span>
                            <img src={RightArrow} alt="rightarrow" />
                        </div>

                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plan;
