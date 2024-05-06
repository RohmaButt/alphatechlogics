import React from "react";
import "./style.css";

interface inputParams {
  title?: string;
  subTitle?: string;
  description?: string;
  index: number;
  slideIndex: number;
}
const ReactCard: React.FunctionComponent<inputParams> = ({
  title,
  subTitle,
  description,
  index,
  slideIndex,
}) => (
  <>
    <img
      src={`${
        index === 1
          ? "/Images/images/blackwhite_1.jpg"
          : index === 2
          ? "/Images/images/blackwhite_0.jpg"
          : index === 3
          ? "/Images/images/blackwhite_3.webp"
          : "/Images/images/blackwhite_4.webp"
      }`}
      alt={`Slide ${index}`}
      style={{
        width: "100%",
        display: index != slideIndex ? "none" : "block",
      }}
    />
    {index == slideIndex && (
      <div className="reactcard">
        <div className="reactcard-container">
          <div className="line">
            {index === 1 ? (
              <p className="lineUp">
                One-stop product development including
                <span className="blue-colored-text"> AI, software, </span> and
                <span className="blue-colored-text"> cloud services </span>
              </p>
            ) : index === 2 ? (
              <p className="lineUp">
                AI-led
                <span className="blue-colored-text"> automation </span> and
                <span className="blue-colored-text"> insights </span>
              </p>
            ) : index === 3 ? (
              <p className="lineUp">
                Powering business growth and efficiency through
                <span className="blue-colored-text"> technology </span> and
                <span className="blue-colored-text"> innovation </span>
              </p>
            ) : (
              <p className="lineUp">
                Transforming
                <span className="blue-colored-text"> dispersed </span> data into
                <span className="blue-colored-text"> transparent </span>
                and
                <span className="blue-colored-text"> accessible </span>
                information
              </p>
            )}
          </div>
        </div>
      </div>
    )}
  </>
);

export default ReactCard;
