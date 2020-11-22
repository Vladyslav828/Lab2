function calculate() {
    let kat1 = parseFloat(document.getElementById("kat1").value);
    let kat2 = parseFloat(document.getElementById("kat2").value);

    if (kat1 > 0 && kat2 > 0) {
        hypotenuse = Math.sqrt(Math.pow(kat1, 2) + Math.pow(kat2, 2));
        alert ("Гіпотенуза: " + hypotenuse);
    } else {
        alert("Введіть корректне значення!");
    }
}