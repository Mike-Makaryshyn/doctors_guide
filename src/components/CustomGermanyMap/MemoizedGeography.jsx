// src/components/CustomGermanyMap/MemoizedGeography.jsx
import React, { memo } from "react";
import { Geography } from "react-simple-maps";

const MemoizedGeography = memo(
  ({ geo, handleClick, className, tooltipId, tooltipContent }) => (
    <Geography
      geography={geo}
      onClick={() => handleClick(geo)}
      data-tooltip-id={tooltipId}
      data-tooltip-content={tooltipContent}
      className={className}
    />
  )
);

export default MemoizedGeography;