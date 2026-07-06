export interface DateProps {
  isHoliday: boolean;
  holidayDesc: string;
}

export type BackgroundProps = DateProps;

export type DateWidgetProps = Pick<DateProps, "isHoliday">;

export interface GetJalaliTodayArgs {
  /** Today in Jalali calendar with a yyyy/mm/dd format. */
  brief: string;

  /** Today in Jalali calendar with a detailed format. */
  verbose: string;
}
