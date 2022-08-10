import React from "react";

type IndicatorsPropType = {
  navigationIndicator?: JSX.Element;
  activeNavigationIndicator?: Element;
  navigationIndicatorContainerStyles?: React.CSSProperties;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  CHILDREN_LENGTH: number;
};

const Indicators: React.FC<IndicatorsPropType> = ({
  navigationIndicator,
  activeNavigationIndicator,
  navigationIndicatorContainerStyles,
  currentIndex,
  setCurrentIndex,
  CHILDREN_LENGTH,
}) => {
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  const defaultNavigationIndicatorContainerStyles: React.CSSProperties = {
    position: "absolute",
    right: 0,
    bottom: "3%",
    left: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
  };

  const liStyles: React.CSSProperties = {
    boxSizing: "content-box",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "100%",
    marginRight: "2%",
    marginLeft: "2%",
    cursor: "pointer",
    backgroundClip: "padding-box",
    opacity: 0.5,
  };
  return (
    <div
      className="navigationIndicatorContainer"
      style={
        navigationIndicatorContainerStyles ||
        defaultNavigationIndicatorContainerStyles
      }
    >
      {Array(CHILDREN_LENGTH)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`${index === currentIndex && "active"} indicator`}
          >
            {index === currentIndex ? (
              <>
                {activeNavigationIndicator || (
                  <li style={{ ...liStyles, backgroundColor: "black" }}></li>
                )}
              </>
            ) : (
              <>
                {navigationIndicator || (
                  <li style={{ ...liStyles, backgroundColor: "gray" }}></li>
                )}
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default Indicators;
