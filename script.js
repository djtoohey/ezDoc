// vars
const name = document.getElementById("name");
const sales = document.getElementById("sales");
const salesTarget = document.getElementById("salesTarget");
const labour = document.getElementById("labour");
const labourTarget = document.getElementById("labourTarget");
const customertx = document.getElementById("customertx");
const customertxp = document.getElementById("customertxp");
const cash = document.getElementById("cash");
const wastage = document.getElementById("wastage");

const submitBtn = document.getElementById("submit");

const docField = document.getElementById("doc");
const copyBtn = document.getElementById("copy");

submitBtn.addEventListener("click", function () {
    // Date
    let date = new Date();
    let dateStr = "";
    dateStr = dateStr + date;
    dateStr = dateStr.slice(0, 15);

    // Sales
    // Sales were $???, over/under target by $???
    let salesTxt = "";
    if (salesTarget.value > 0) {
        salesTxt = `Sales were $${sales.value}, over target by $${salesTarget.value}`;
    }
    else if (salesTarget.value < 0) {
        salesTxt = `Sales were $${sales.value}, under target by $${salesTarget.value * -1}`;
    }
    else {
        salesTxt = `Sales were $${sales.value}`;
    }


    // Labour
    // Labour was $???, over/under target by $???
    let labourTxt = "";
    if (labourTarget.value > 0) {
        labourTxt = `Labour was $${labour.value}, over target by $${labourTarget.value}`;
    }
    else if (labourTarget.value < 0) {
        labourTxt = `Labour was $${labour.value}, under target by $${labourTarget.value * -1}`;
    }
    else {
        labourTxt = `Labour was $${labour.value}`;
    }

    // CustomerTX
    // Customer Transactions were ???, ??% of expected
    let customertxTxt = `Customer Transactions were ${customertx.value}, ${customertxp.value}% of expected`


    // Cash
    // Cash was +/-$???
    let cashFormatted = 0;
    if (cash.value > 0) {
        cashFormatted = "+$" + cash.value;
    }
    else if (cash.value < 0) {
        cashFormatted = "-$" + (cash.value * -1);
    }
    else {
        cashFormatted = "$" + cash.value;
    }

    let cashTxt = `Cash was ${cashFormatted}`

    // Wastage
    // Wastage was only $???
    let wastageTxt = `Wastage was only $${wastage.value}`

    const doc = `Good morning!
 
Quick summary of ${dateStr}:
    
${salesTxt}
    
${labourTxt}
    
${customertxTxt}
    
${cashTxt}
    
${wastageTxt}
    
Have a good day,
${name.value}`;

    docField.value = doc;


});

copyBtn.addEventListener("click", function () {
    docField.select();
    document.execCommand("copy");
});
