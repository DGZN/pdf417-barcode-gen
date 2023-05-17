module.exports.getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports.getRndLetter = () => {
  const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return list.charAt(Math.floor(Math.random() * list.length))
};

function getRndDate() {
    date = "";
    month = getRndInteger(1, 13);
    if (month <= 9) {
      date = "0" + month.toString(10);;
    }
    else {
      date = month.toString(10);;
    }
    day = getRndInteger(1, 29);
    if (day <= 9) {
      date = date + "0" + day.toString(10);;
    }
    else {
      date = date + day.toString(10);;
    }
    year = new Date().getFullYear()
    year = year - 1;
    date = date + year.toString(10);;
    issueDate = date;
  }

  function getRndExpiryDate(years) {
    date = "";
    month = getRndInteger(1, 13);
    if (month <= 9) {
      date = "0" + month.toString(10);
    }
    else {
      date = month.toString(10);
    }
    day = getRndInteger(1, 29);
    if (day <= 9) {
      date = date + "0" + day.toString(10);
    }
    else {
      date = date + day.toString(10);
    }
    year = new Date().getFullYear()
    year = year - 1;
    year = year + years;
    date = date + year.toString(10);
    return date;
  }

  function fit(word,num) {
    return (word + "****************************").substr(0,num);
  }
