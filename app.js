function validUserNames(arr) {
  const filteredArr = arr.filter(function (name) {
    return name.length < 10;
  });
  return filteredArr;
}