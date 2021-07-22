import React, { useRef, useEffect } from "react";

const HoverAnimation = ({
  Icon,
  IconSize = "2vmax",
  Color = "white",
  BackgroundColor = "rgb(25,25,25)",
  Transition = 0.5,
  Direction = "left",
  Circle = true,
  Padding = "1vmax",
  Id1 = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 15),
  Id2 = Math.random()
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
  const HoverAnimationInnerBox = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);

  const boxSize = `${
    Number(findNumber(IconSize)) +
    Number(findNumber(Padding)) +
    Number(findNumber(Padding))
  }${findUnit(IconSize)}`;

  useEffect(() => {
    const Icon1 = document.querySelector(`.HoverAnimationIcon${Id1}${Id1}`);
    const Icon2 = document.querySelector(`.HoverAnimationIcon${Id2}${Id2}`);
    HoverAnimationBox.current.style.boxShadow = `0 0 1px 5px ${Color}`;
    HoverAnimationBox.current.style.boxSizing = "border-box";

    if (Direction === "left") {
      HoverAnimationInnerBox.current.style.display = "flex";
    }
    if (Direction === "right") {
      HoverAnimationInnerBox.current.style.display = "flex";
      HoverAnimationInnerBox.current.style.transform = `translateX(-${boxSize})`;
    }
    if (Direction === "down") {
      HoverAnimationInnerBox.current.style.transform = `translateY(-${boxSize})`;
      Icon1.style.marginTop = "1px";
      Icon1.style.marginBottom = "-5px";
    }
    if (Direction === "up") {
      HoverAnimationInnerBox.current.style.transform = `translateY(0)`;
      Icon1.style.marginTop = "1px";
      Icon1.style.marginBottom = "-5px";
    }

    HoverAnimationBox.current.addEventListener("mouseover", () => {
      if (Direction === "left") {
        HoverAnimationInnerBox.current.style.transform = `translateX(-${boxSize})`;
      }
      if (Direction === "right") {
        HoverAnimationInnerBox.current.style.transform = `translateX(0)`;
      }
      if (Direction === "up") {
        HoverAnimationInnerBox.current.style.transform = `translateY(-${boxSize})`;
      }
      if (Direction === "down") {
        HoverAnimationInnerBox.current.style.transform = `translateY(0)`;
      }

      HoverAnimationBox.current.style.boxShadow = `0 0 1px 0.7vmax ${BackgroundColor}`;
      Icon1.style.color = BackgroundColor;
      Icon1.style.backgroundColor = Color;

      Icon2.style.color = BackgroundColor;
      Icon2.style.backgroundColor = Color;
    });

    HoverAnimationBox.current.addEventListener("mouseleave", () => {
      if (Direction === "left") {
        HoverAnimationInnerBox.current.style.transform = `translateX(0)`;
      }
      if (Direction === "right") {
        HoverAnimationInnerBox.current.style.transform = `translateX(-${boxSize})`;
      }
      if (Direction === "up") {
        HoverAnimationInnerBox.current.style.transform = `translateY(0)`;
      }
      if (Direction === "down") {
        HoverAnimationInnerBox.current.style.transform = `translateY(-${boxSize})`;
      }

      HoverAnimationBox.current.style.boxShadow = `0 0 1px 0.3vmax ${Color}`;
      Icon1.style.color = Color;
      Icon1.style.backgroundColor = BackgroundColor;
      Icon2.style.color = Color;
      Icon2.style.backgroundColor = BackgroundColor;
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
      <div
        ref={HoverAnimationInnerBox}
        style={{
          transition: `all ${Transition}s`,
        }}
      >
        <div ref={box1}>
          <Icon
            className={`HoverAnimationIcon${Id1}${Id1}`}
            style={{
              cursor: "pointer",
              fontSize: IconSize,
              color: Color,
              transition: `all ${Transition}s`,
              backgroundColor: BackgroundColor,
              padding: Padding,
            }}
          />
        </div>

        <div ref={box2}>
          <Icon
            className={`HoverAnimationIcon${Id2}${Id2}`}
            style={{
              cursor: "pointer",
              fontSize: IconSize,
              color: Color,
              transition: `all ${Transition}s`,
              backgroundColor: BackgroundColor,
              padding: Padding,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HoverAnimation;
