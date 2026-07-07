import type { WidgetTaskHandlerProps } from "react-native-android-widget";

import { getHolidayData } from "@/utils/checkHoliday";

import DateWidget from "@/components/DateWidget";

const nameToWidget = {
  Date: DateWidget,
};

const widgetTaskHandler = async (props: WidgetTaskHandlerProps) => {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  if (
    props.widgetAction === "WIDGET_ADDED" ||
    props.widgetAction === "WIDGET_UPDATE" ||
    props.widgetAction === "WIDGET_RESIZED"
  ) {
    const { isHoliday } = getHolidayData();

    props.renderWidget(<Widget isHoliday={isHoliday} />);
  }
};

export default widgetTaskHandler;
