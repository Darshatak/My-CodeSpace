let items = document.getElementsByClassName("items")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

for (item of items) { 
    item.addEventListener('dragstart', function (e) {
        let selected = e.target;

        rightBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', function (e) {
            rightBox.appendChild(selected)
            selected = null;
        });
        leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function (e) {
            leftBox.appendChild(selected)
            selected = null;
        });
    });
}
