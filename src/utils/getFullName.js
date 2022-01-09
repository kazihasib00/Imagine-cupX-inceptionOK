export default (data) => {
  var first, honorifics, last, middle;
  if (typeof data === "object") {
    honorifics = '';
    first = '';
    last = '';
    middle = '';
    if ((data != null ? data.honorifics : void 0) != null) {
      honorifics = data.honorifics + ". ";
    }
    if ((data != null ? data.first : void 0) != null) {
      first = data.first;
    }
    if ((data != null ? data.middle : void 0) != null) {
      middle = " " + data.middle;
    }
    if ((data != null ? data.last : void 0) != null) {
      last = " " + data.last;
    }
    return honorifics + first + middle + last;
  } else {
    return data;
  }
};