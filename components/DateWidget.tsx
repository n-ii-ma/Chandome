import { FlexWidget, TextWidget } from "react-native-android-widget";

import { getJalaliToday } from "../utils/dates";

const DateWidget = () => (
  <FlexWidget
    clickAction="OPEN_APP"
    style={{
      height: "match_parent",
      width: "match_parent",
      justifyContent: "center",
      alignItems: "center",
      backgroundGradient: {
        from: "rgba(1, 158, 255, 0.8)",
        to: "rgba(63, 38, 172, 0.8)",
        orientation: "LEFT_RIGHT",
      },
      borderRadius: 16,
    }}
  >
    <TextWidget
      text={getJalaliToday().verbose}
      style={{
        fontSize: 24,
        color: "#ffffff",
      }}
    />
  </FlexWidget>
);

export default DateWidget;
