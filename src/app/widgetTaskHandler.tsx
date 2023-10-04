import type { WidgetTaskHandlerProps } from "react-native-android-widget";

import getHolidayDataAsync from "@/utils/checkHoliday";

import DateWidget from "@/components/DateWidget";

const nameToWidget = {
  // Date will be the **name** with which we will reference our widget.
  Date: DateWidget,
};

const widgetTaskHandler = async (props: WidgetTaskHandlerProps) => {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  // Widget added, updated or resized actions
  if (
    props.widgetAction === "WIDGET_ADDED" ||
    props.widgetAction === "WIDGET_UPDATE" ||
    props.widgetAction === "WIDGET_RESIZED"
  ) {
    // Check if today is a Jalali holiday
    const jalaliHoliday = await getHolidayDataAsync();

    // Render widget
    props.renderWidget(<Widget isHoliday={jalaliHoliday?.is_holiday} />);
  }
};

export default widgetTaskHandler;
