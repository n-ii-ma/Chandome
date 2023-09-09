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
      backgroundColor: "rgba(63, 38, 172, 0.8)",
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
