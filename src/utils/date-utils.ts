import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);
dayjs.locale("ru");

const isToday = (date: dayjs.Dayjs): boolean => {
  const now = dayjs();
  return date.isSame(now, "day");
};

export const getHumanReadableDate = (isoDate: string): string => {
  const date = dayjs(isoDate);

  if (isToday(date)) {
    return `сегодня, ${date.format("HH:mm")}`;
  } else {
    return `${date.fromNow()}, ${date.format("HH:mm")}`;
  }
};
