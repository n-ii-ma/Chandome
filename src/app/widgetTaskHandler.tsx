import type { WidgetTaskHandlerProps } from "react-native-android-widget";

import checkJalaliHolidayAsync from "@/utils/checkHoliday";

import DateWidget from "@/components/DateWidget";

const nameToWidget = {
  // Date will be the **name** with which we will reference our widget.
  Date: DateWidget,
};

const widgetTaskHandler = async (props: WidgetTaskHandlerProps) => {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  // Widget added or updated actions
  if (
    props.widgetAction === "WIDGET_ADDED" ||
    props.widgetAction === "WIDGET_UPDATE"
  ) {
    // Check if today is a Jalali holiday
    const jalaliHoliday = await checkJalaliHolidayAsync();

    props.renderWidget(<Widget isHoliday={jalaliHoliday?.is_holiday} />);
  }

  // Widget resized action
  if (props.widgetAction === "WIDGET_RESIZED") props.renderWidget(<Widget />);
};

export default widgetTaskHandler;
