import React, { useEffect, useState } from "react";
import { Button } from "../Button/index";
import Indicators from "../Indicators/index";

type CarouselPropType = {
  children: JSX.Element[];
  previousButton?: JSX.Element;
  nextButton?: JSX.Element;
  navigationIndicator?: JSX.Element;
  activeNavigationIndicator?: Element;
  autoPlayInterval?: number;
  carouselCustomStyles?: React.CSSProperties;
  navigationIndicatorContainerStyles?: React.CSSProperties;
};

const Carousel: React.FC<CarouselPropType> = ({
  children,
  previousButton,
  nextButton,
  navigationIndicator,
  activeNavigationIndicator,
  autoPlayInterval,
  carouselCustomStyles,
  navigationIndicatorContainerStyles,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CHILDREN_LENGTH = children.length;
  const DEFAULT_TIME_INTERVAL = 0;

  const handleNextItemClick = () => {
    if (currentIndex + 1 === CHILDREN_LENGTH) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handlePreviousItemClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(CHILDREN_LENGTH - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    //each time index gets a new value wait X secs and show next slide
    let timeout = setTimeout(() => {
      handleNextItemClick();
    }, (autoPlayInterval || DEFAULT_TIME_INTERVAL) * 1000);
    //cleanup
    return () => clearInterval(timeout);
  }, [currentIndex]);

  const defaultCarouselStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "between",
    position: "relative",
  };

  return (
    <div
      className="carousel"
      style={carouselCustomStyles || defaultCarouselStyles}
    >
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
      <Indicators
        navigationIndicator={navigationIndicator}
        activeNavigationIndicator={activeNavigationIndicator}
        navigationIndicatorContainerStyles={navigationIndicatorContainerStyles}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        CHILDREN_LENGTH={CHILDREN_LENGTH}
      />
    </div>
  );
};

export default Carousel;
