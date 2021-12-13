const filter_collapse = document.querySelectorAll(".filter-btn");
filter_collapse.forEach((item) =>
  item.addEventListener("click", function () {
    let sibling = item.nextElementSibling;
    sibling.classList.toggle("collapsible--expanded");
  })
);

function displayHam() {
  var elem = document.getElementById("hamburger");
  elem.classList.toggle("expanded");
}

const filter_modal = document.querySelectorAll(".display-filter");
filter_modal.forEach((item) => {
  item.addEventListener("click", function () {
    let ele = document.getElementById("modal-filter");
    ele.classList.add("modal-filter");
  });
});

function closeFilter() {
  let ele = document.getElementById("modal-filter");
  ele.classList.remove("modal-filter");
}
