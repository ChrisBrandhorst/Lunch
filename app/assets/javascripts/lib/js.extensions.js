String.prototype.toTitleCase = function() {
  return this.toLowerCase().replace(/(^|\s)[a-z]/g, function($1){return $1.toUpperCase();});
};

String.prototype.trim = function() {
  return this.replace(/(^[\s\n\r]*|[\s\n\r]*$)/g, "");
};