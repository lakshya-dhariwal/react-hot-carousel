import React, { useEffect, useState } from "react";
import { Button } from "./Button/index";
import Indicators from "./Indicators/index";

const Carousel: React.FC<{
  children: JSX.Element[];
  previousButton?: JSX.Element;
  nextButton?: JSX.Element;
  navigationIndicator?: JSX.Element;
  activeNavigationIndicator?: JSX.Element;
  autoPlay: boolean;
  autoPlayInterval?: number;
  carouselCustomContainerStyles?: React.CSSProperties;
  navigationIndicatorContainerStyles?: React.CSSProperties;
}> = ({
  children,
  previousButton,
  nextButton,
  navigationIndicator,
  activeNavigationIndicator,
  autoPlayInterval,
  autoPlay,
  carouselCustomContainerStyles,
  navigationIndicatorContainerStyles,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const CHILDREN_LENGTH = children.length;

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

  let timeouts: NodeJS.Timeout[] = [];
  const handlePause = (pause: boolean) => {
    if (autoPlay) {
      if (pause) {
        clearTimeouts();
        setPlaying(pause);
      } else {
        setPlaying(true);
        timeouts.push(
          setTimeout(() => {
            if (playing) handleNextItemClick();
          }, (autoPlayInterval || 3) * 1000)
        );
      }
    }
  };
  const clearTimeouts = () => {
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  };
  useEffect(() => {
    //each time index gets a new value wait X secs and show next slide
    timeouts.push(
      setTimeout(() => {
        if (playing) handleNextItemClick();
      }, (autoPlayInterval || 3) * 1000)
    );
    //cleanup
    return () => clearTimeouts();
  }, [currentIndex]);

  const defaultCarouselStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
  };

  return (
    <div
      className="carousel "
      style={carouselCustomContainerStyles || defaultCarouselStyles}
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
      <div
        onMouseEnter={() => {
          handlePause(true);
        }}
        onMouseLeave={() => {
          handlePause(false);
        }}
      >
        {children[currentIndex]}
      </div>
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
