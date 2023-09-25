import { FlexWidget, TextWidget } from "react-native-android-widget";
import { ms, vs } from "react-native-size-matters";

import { getJalaliToday } from "@/utils/dates";

import type { DateWidgetProps } from "@/global/types";

const DateWidget = ({ isHoliday }: DateWidgetProps) => (
  <FlexWidget
    clickAction="OPEN_APP"
    style={{
      height: "match_parent",
      width: "match_parent",
      justifyContent: "center",
      alignItems: "center",
      backgroundGradient: {
        from: isHoliday ? "rgba(255, 0, 0, 0.8)" : "rgba(1, 158, 255, 0.8)",
        to: "rgba(63, 38, 172, 0.8)",
        orientation: "LEFT_RIGHT",
      },
      borderRadius: 16,
      paddingHorizontal: ms(8),
      paddingVertical: vs(2),
      marginVertical: vs(18),
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
