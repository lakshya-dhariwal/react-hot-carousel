import React, { useEffect, useState } from "react";
import { Button } from "./Button";

export type CarouselPropType = {
  children: JSX.Element[];
  previousButton?: JSX.Element;
  nextButton?: JSX.Element;
  SecondsIntervalBeforeNextSlide?: number;
};
const CarouselProvider: React.FC<CarouselPropType> = ({
  children,
  previousButton,
  nextButton,
  SecondsIntervalBeforeNextSlide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children.length;

  const handleNextItemClick = () => {
    if (currentIndex + 1 === length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handlePreviousItemClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    //each time index gets a new value wait X secs and show next slide
    let timeout = setTimeout(() => {
      handleNextItemClick();
    }, (SecondsIntervalBeforeNextSlide || 3) * 1000);
    //cleanup
    return () => clearInterval(timeout);
  }, [currentIndex]);

  return (
    <div className="">
      <div className="flex justify-between">
        <>
          {previousButton ? (
            React.cloneElement(previousButton, {
              onClick: handlePreviousItemClick,
            })
          ) : (
            <Button type="previous" handleClick={handlePreviousItemClick} />
          )}
        </>
        <>{children[currentIndex]}</>
        <>
          {nextButton ? (
            React.cloneElement(nextButton, {
              onClick: handleNextItemClick,
            })
          ) : (
            <Button type="next" handleClick={handleNextItemClick} />
          )}
        </>
      </div>
    </div>
  );
};

export default CarouselProvider;
