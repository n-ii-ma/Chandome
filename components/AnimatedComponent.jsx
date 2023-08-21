import React from "react";
import { MotiView } from "moti";

const AnimatedComponent = ({
  from,
  animate,
  exit,
  transition,
  style,
  children,
}) => (
  <MotiView
    from={from}
    animate={animate}
    exit={exit}
    transition={transition}
    style={style}
  >
    {children}
  </MotiView>
);

export default AnimatedComponent;
