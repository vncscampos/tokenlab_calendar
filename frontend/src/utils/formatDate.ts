export default function formartDate(start_date: Date, end_date: Date) {
    const startDay = new Date(start_date).getDate();
    const startMonth = String(new Date(start_date).getMonth() + 1).padStart(2, "0");
    const startYear = new Date(start_date).getFullYear();

    const startDateFormatted = `${startDay}/${startMonth}/${startYear}`;

    const startHour = new Date(start_date).getHours();
    const startMinute = String(new Date(start_date).getMinutes()).padStart(
      2,
      "0"
    );

    const endDay = new Date(end_date).getDate();
    const endMonth = String(new Date(end_date).getMonth() + 1).padStart(2, "0");
    const endYear = new Date(end_date).getFullYear();

    const endDateFormatted = `${endDay}/${endMonth}/${endYear}`;

    const endHour = new Date(end_date).getHours();
    const endMinute = String(new Date(end_date).getMinutes()).padStart(2, "0");

    return `${startHour}:${startMinute} ${startDateFormatted} - ${endHour}:${endMinute} ${endDateFormatted}`;
  }