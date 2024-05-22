function myParseInt(str) {
  let result = 0;
  let sign = 1;
  let i = 0;

  while (i < str.length && str[i] === " ") {
    i++;
  }

  if (i < str.length && (str[i] === "-" || str[i] === "+")) {
    if (str[i] === "-") {
      sign = -1;
    }
    i++;
  }

  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    result = result * 10 + (str[i] - "0");
    i++;
  }

  return result * sign;
}
