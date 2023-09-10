import { FlexWidget, TextWidget } from "react-native-android-widget";
import { ms, vs } from "react-native-size-matters";

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
      paddingHorizontal: ms(8),
      marginVertical: vs(22),
    }}
  >
    <TextWidget
      text={getJalaliToday().verbose}
      style={{
        fontFamily: "Vazirmatn-Regular",
        fontSize: ms(18),
        color: "#ffffff",
        textAlign: "center",
      }}
    />
  </FlexWidget>
);

export default DateWidget;
