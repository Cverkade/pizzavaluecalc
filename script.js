const submitButton = document.getElementById("calculate")
const resultDiv = document.getElementById("result")

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    resultDiv.textContent = '';

    const diameter1 = document.getElementById("pizza1Diameter").value
    const area1 = Math.PI * ((diameter1/2)**2);
    const price1 = document.getElementById("pizza1Price").value
    const amount1 = document.getElementById("amount1").value

    const diameter2 = document.getElementById("pizza2Diameter").value
    const area2 = Math.PI * ((diameter2/2)**2);
    const price2 = document.getElementById("pizza2Price").value
    const amount2 = document.getElementById("amount2").value

    const diameter3 = document.getElementById("pizza3Diameter").value
    const area3 = Math.PI * ((diameter3/2)**2);
    const price3 = document.getElementById("pizza3Price").value
    const amount3 = document.getElementById("amount3").value


    const value1 = parseFloat(((area1 * amount1)/price1).toFixed(4));
    const value2 = parseFloat(((area2 * amount2)/price2).toFixed(4));
    const value3 = parseFloat(((area3 * amount3)/price3).toFixed(4));

    if (value1) {
        const result1 = document.createElement("p")
        result1.textContent = "Pizza 1: You're getting " + value1 + " cm2 per €1";
        resultDiv.appendChild(result1);

        if (value1 < value2 || value1 < value3) {
            result1.style.color = 'red'
        } else {
            result1.style.color = 'green'
        }
    } if (value2) {
        const result2 = document.createElement("p")
        result2.textContent = "Pizza 2: You're getting " + value2 + " cm2 per €1";
        resultDiv.appendChild(result2);

        if (value2 < value1 || value2 < value3) {
            result2.style.color = 'red'
        } else {
            result2.style.color = 'green'
        }
    } if (value3) {
        const result3 = document.createElement("p")
        result3.textContent = "Pizza 3: You're getting " + value3 + " cm2 per €1";
        resultDiv.appendChild(result3);

        if (value3 < value1 || value3 < value2) {
            result3.style.color = 'red'
        } else {
            result3.style.color = 'green'
        }
    }
});
