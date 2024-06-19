import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
};

export default function TextExpander({
  collapsedNumWords = 30,
  expandButtonText = "Show more...",
  collapseButtonText = "Show less...",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };

  const textStyle = {
    margin: "0",
  };

  const spanStyle = {
    color: buttonColor,
    whiteSpace: "nowrap",
    cursor: "pointer",
  };
  return (
    <div style={boxStyle} className={className}>
      <p style={textStyle}>
        {isExpanded
          ? children
          : children.slice(0, collapsedNumWords).trim() + "..."}
      </p>
      <span
        role="button"
        style={spanStyle}
        onClick={() => setIsExpanded((cur) => !cur)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
