
import moment from 'moment'
const CONSTANTS = {
  ENVIRONMENT: {
    LOCAL: "local",
    DEVELOPMENT: "development",
    STAGING: "staging",
    PRODUCTION: "production",
  },
};

export default CONSTANTS;
export function GetDifference(theDate) {
  let end = moment(moment(moment()).valueOf());
  let updatedAt = moment(new Date(theDate).valueOf());
  let diff = end.diff(updatedAt, "hour", false);
  if (diff > 8760) {
    diff = end.diff(updatedAt, "years", false);
    return diff > 1 ? diff + " years ago" : diff + " year ago";
  } else if (diff > 730) {
    diff = end.diff(updatedAt, "months", false);
    return diff > 1 ? diff + " months ago" : diff + " month ago";
  } else if (diff > 24) {
    diff = end.diff(updatedAt, "days", false);
    return diff > 1 ? diff + " days ago" : diff + " day ago";
  } else if (diff <= 0) {
    diff = end.diff(updatedAt, "minutes", false);
    return diff > 1 ? diff + " minutes ago" : diff + " minute ago";
  } else return diff > 1 ? diff + " hours ago" : diff + " hour ago";
}

export function CheckPastDate(date_time) {
  var now = new Date();
  var then = date_time;
  var diff = moment.duration(moment(then).diff(moment(now)));
  var days = parseInt(diff.asDays()); //84
  var hours = parseInt(diff.asHours()); //2039 hours, but it gives total hours in given miliseconds which is not expacted.
  hours = hours - days * 24; // 23 hours
  var minutes = parseInt(diff.asMinutes()); //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
  minutes = minutes - (days * 24 * 60 + hours * 60);
  return minutes;
}
