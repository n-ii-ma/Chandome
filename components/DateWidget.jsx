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
      backgroundColor: "#ffffff",
      borderRadius: 16,
    }}
  >
    <TextWidget
      text={getJalaliToday().verbose}
      style={{
        fontSize: 24,
        color: "#000000",
      }}
    />
  </FlexWidget>
);

export default DateWidget;
