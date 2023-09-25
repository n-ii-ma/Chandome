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

  // Check if today is a Jalali holiday
  const jalaliHoliday = await checkJalaliHolidayAsync();

  switch (props.widgetAction) {
    case "WIDGET_ADDED":
    case "WIDGET_UPDATE":
      props.renderWidget(<Widget isHoliday={jalaliHoliday?.is_holiday} />);
      break;

    case "WIDGET_RESIZED":
      props.renderWidget(<Widget />);
      break;

    default:
      break;
  }
};

export default widgetTaskHandler;
