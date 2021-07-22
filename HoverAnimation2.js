import React, { useRef, useEffect } from "react";
import "./HoverAnimation2.css";

const HoverAnimation = ({
  Icon,
  IconSize = "2vmax",
  Color = "white",
  BackgroundColor = "rgb(25,25,25)",
  Transition = 0.5,
  Circle = true,
  Padding = "1vmax",
  Pace = "medium",
  Id = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 15),
}) => {
  const findNumber = (param) => {
    const num = param.match(/(\d+)/);
    return num[0];
  };

  const findUnit = (param) => {
    const unit = param.replace(findNumber(param), "");
    return unit;
  };
  const HoverAnimationBox = useRef(null);
  const box1 = useRef(null);

  const boxSize = `${
    Number(findNumber(IconSize)) +
    Number(findNumber(Padding)) +
    Number(findNumber(Padding))
  }${findUnit(IconSize)}`;

  let speed;
  if (Pace === "medium") {
    speed = "1.5s";
  }
  if (Pace === "slow") {
    speed = "2s";
  }
  if (Pace === "slowest") {
    speed = "2.5s";
  }
  if (Pace === "fast") {
    speed = "1s";
  }
  if (Pace === "fastest") {
    speed = "0.5s";
  }
  useEffect(() => {
    const Icon1 = document.querySelector(`.HoverAnimationIcon${Id}${Id}`);
    HoverAnimationBox.current.style.boxShadow = `0 0 1px 5px ${Color}`;

    HoverAnimationBox.current.addEventListener("mouseover", () => {
      HoverAnimationBox.current.style.animation = `HoverAnimationGlowOn  ${speed} linear infinite `;

      Icon1.style.color = BackgroundColor;
      Icon1.style.backgroundColor = Color;
    });

    HoverAnimationBox.current.addEventListener("mouseleave", () => {
      Icon1.style.color = Color;
      Icon1.style.backgroundColor = BackgroundColor;
      HoverAnimationBox.current.style.animation = "HoverAnimationGlowOff 1s ";
    });
  });

  return (
    <div
      className="HoverAnimationBox"
      ref={HoverAnimationBox}
      style={{
        borderRadius: Circle ? "100%" : "0",
        width: boxSize,
        height: boxSize,
        transition: `all ${Transition}s`,
        overflow: "hidden",
      }}
    >
      <div ref={box1}>
        <Icon
          className={`HoverAnimationIcon${Id}${Id}`}
          style={{
            cursor: "pointer",
            borderRadius: Circle ? "100%" : "0",
            fontSize: IconSize,
            color: Color,
            transition: `all ${Transition}s`,
            backgroundColor: BackgroundColor,
            padding: Padding,
          }}
        />
      </div>
    </div>
  );
};

export default HoverAnimation;
