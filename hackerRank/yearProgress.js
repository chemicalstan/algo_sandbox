function yearProgress(currentDate) {
  const [monthDay, yearTime] = currentDate.split(", "),
    [month, day] = monthDay.split(" "),
    [year, time] = yearTime.split(" "),
    [hour, min] = time.split(":");
  let yType = {
    leapYear: false,
    feb: 28
  };
  if (!(year % 4)) {
    yType.leapYear = true;
    yType.feb = 29;
    if (!(year % 100) && year % 400) {
      yType.leapYear = false;
      yType.feb = 28;
    }
  }
  const minsInYear = yType.leapYear ? 527040 : 525600;
  class MonthObj {
    January = 0;
    February = 31;
    March = 31 + yType.feb;
    April = this.March + 31;
    May = this.April + 30;
    June = this.May + 31;
    July = this.June + 30;
    August = this.July + 31;
    September = this.August + 31;
    October = this.September + 30;
    November = this.October + 31;
    December = this.November + 30;
  }
  let inst = new MonthObj(),
    prevDay = (inst[month] + +day - 1) * (24 * 60),
    currentMin = prevDay + (+hour * 60 + +min);
    return currentMin/minsInYear * 100;
}
console.log(yearProgress("December 31, 2020 24:00"));
//  Month  day, yyyy HH:MM
