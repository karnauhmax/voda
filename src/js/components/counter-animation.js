const items = document.querySelectorAll(".info__stats-num span");

function createCounter(arr) {
  arr.forEach((item) => {
    let count = 0;
    const interval = setInterval(() => {
      if (item.dataset.content >= 200) {
        count += 10;
      } else {
        count++;
      }
      item.innerHTML = count;
      if (count == item.dataset.content) {
        clearInterval(interval);
      }
    }, 10);
  });
}
// createCounter(items);

export { items, createCounter };
