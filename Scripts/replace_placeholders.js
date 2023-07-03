document.addEventListener("DOMContentLoaded", function() {
    const pTags = document.getElementsByTagName("p");

    let birthdate = new Date(2007, 3, 25);
    let currentDate = new Date();
    let years = currentDate.getFullYear() - birthdate.getFullYear();

    if (currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() == birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        years--;
    }

    for (let tag of pTags) {
      tag.innerHTML = tag.innerHTML.replace("{{age}}", years);
    }
  });