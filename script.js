// vars

const name = document.getElementById("name");
const sales = document.getElementById("sales");
const labour = document.getElementById("labour");
const customertx = document.getElementById("customertx");
const cash = document.getElementById("cash");
const wastage = document.getElementById("wastage");


const submitBtn = document.getElementById("submit");



submitBtn.addEventListener("click", function () {
    console.log("name", name.value);
    console.log("sales", sales.value);
    console.log("labour", labour.value);
    console.log("customertx", customertx.value);
    console.log("cash", cash.value);
    console.log("wastage", wastage.value);


});

