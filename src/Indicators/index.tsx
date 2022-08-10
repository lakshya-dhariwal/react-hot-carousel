import React from "react";

type IndicatorsPropType = {
  navigationIndicator?: JSX.Element;
  activeNavigationIndicator?: JSX.Element;
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
    bottom: "-3.6rem",
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
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div
      className="navigationIndicatorContainer "
      style={
        navigationIndicatorContainerStyles ||
        defaultNavigationIndicatorContainerStyles
      }
    >
      {Array(CHILDREN_LENGTH)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            {index === currentIndex ? (
              <>
                {activeNavigationIndicator ? (
                  React.cloneElement(activeNavigationIndicator, {
                    onClick: () => handleIndicatorClick(index),
                  })
                ) : (
                  <li
                    style={{
                      ...liStyles,
                      backgroundColor: "black",
                      width: "1.25rem",
                      borderRadius: "0.25em",
                    }}
                    onClick={() => handleIndicatorClick(index)}
                    className="active indicator"
                  ></li>
                )}
              </>
            ) : (
              <>
                {navigationIndicator ? (
                  React.cloneElement(navigationIndicator, {
                    onClick: () => handleIndicatorClick(index),
                  })
                ) : (
                  <li
                    style={{ ...liStyles, backgroundColor: "gray" }}
                    onClick={() => handleIndicatorClick(index)}
                    className=" indicator"
                  ></li>
                )}
              </>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Indicators;
