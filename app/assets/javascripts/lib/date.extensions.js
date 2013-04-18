Date.prototype.toDataString = function() {
  return this.toString("yyyy-MM-dd");
};
Date.prototype.moveToFirstDayOfWeek = function() {
  return this.addDays(-this.getDay()+1);
};
var getISOWeek = Date.prototype.getISOWeek;
Date.prototype.getISOWeek = function() {
  var offset = -this.getTimezoneOffset() / 60;
  return getISOWeek.call(this.clone().addHours(offset));
};