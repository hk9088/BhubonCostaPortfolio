const countEl = document.getElementById("count");
countvisits();

function countvisits() {
    fetch('https://api.countapi.xyz/update/bhuboncosta/mouse/?amount=1')
        .then((res) => res.json())
        .then((res) => {
        countEl.innerHTML = "View Count: " + res.value;
        });
}