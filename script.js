// ========== מערך גלובלי של כלי רכב ==========
var vehicles = [];

// ========== טעינת דף — שליפה מ-localStorage ==========
window.onload = function () {
    var saved = localStorage.getItem("vehicles");
    if (saved) {
        vehicles = JSON.parse(saved);
    }
    displayTable();
};

// ========== פונקציה להוספת רכב ==========
function addVehicle() {
    // שליפת ערכים מהטופס
    var type = document.getElementById("vehicleType").value;
    var manufacturer = document.getElementById("manufacturer").value.trim();
    var color = document.getElementById("vehicleColor").value;
    var price = document.getElementById("price").value;
    var errorMsg = document.getElementById("errorMsg");

    // ולידציה — בדיקה שכל השדות מלאים
    if (type === "") {
        errorMsg.textContent = "⚠️ יש לבחור סוג רכב!";
        return;
    }
    if (manufacturer === "") {
        errorMsg.textContent = "⚠️ יש להזין שם יצרן!";
        return;
    }
    if (price === "" || Number(price) <= 0) {
        errorMsg.textContent = "⚠️ יש להזין מחיר חיובי!";
        return;
    }

    // ניקוי הודעת שגיאה
    errorMsg.textContent = "";

    // יצירת אובייקט רכב
    var vehicle = {
        type: type,
        manufacturer: manufacturer,
        color: color,
        price: Number(price)
    };

    // הוספה למערך
    vehicles.push(vehicle);

    // שמירה ל-localStorage
    saveToStorage();

    // עדכון הטבלה
    displayTable();

    // ניקוי הטופס
    clearForm();
}

// ========== פונקציה לשמירה ל-localStorage ==========
function saveToStorage() {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

// ========== פונקציה להצגת הטבלה ==========
function displayTable() {
    var tableBody = document.getElementById("tableBody");
    var emptyMsg = document.getElementById("emptyMsg");
    var totalCount = document.getElementById("totalCount");
    var totalPrice = document.getElementById("totalPrice");

    // ניקוי הטבלה
    tableBody.innerHTML = "";

    // אם המערך ריק — הצגת הודעה
    if (vehicles.length === 0) {
        emptyMsg.style.display = "block";
        document.getElementById("vehicleTable").style.display = "none";
    }
    else {
        emptyMsg.style.display = "none";
        document.getElementById("vehicleTable").style.display = "table";
    }

    // חישוב סה"כ מחיר
    var sumPrice = 0;

    // מעבר על כל הרכבים והוספתם לטבלה
    for (var i = 0; i < vehicles.length; i++) {
        var tr = document.createElement("tr");
        tr.className = "row-animate";

        tr.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + vehicles[i].type + "</td>" +
            "<td>" + vehicles[i].manufacturer + "</td>" +
            "<td><span class='color-swatch' style='background:" + vehicles[i].color + "'></span> " + vehicles[i].color + "</td>" +
            "<td>₪" + vehicles[i].price.toLocaleString() + "</td>" +
            "<td><button class='btn-remove' onclick='removeVehicle(" + i + ")'>🗑️ מחק</button></td>";

        tableBody.appendChild(tr);

        sumPrice = sumPrice + vehicles[i].price;
    }

    // עדכון סטטיסטיקות
    totalCount.textContent = "סה\"כ: " + vehicles.length;
    totalPrice.textContent = "שווי כולל: ₪" + sumPrice.toLocaleString();
}

// ========== פונקציה למחיקת רכב בודד ==========
function removeVehicle(index) {
    vehicles.splice(index, 1);
    saveToStorage();
    displayTable();
}

// ========== פונקציה לניקוי הטופס ==========
function clearForm() {
    document.getElementById("vehicleType").value = "";
    document.getElementById("manufacturer").value = "";
    document.getElementById("vehicleColor").value = "#00e5ff";
    document.getElementById("price").value = "";
    document.getElementById("errorMsg").textContent = "";
}

// ========== פונקציה למחיקת כל הרכבים ==========
function deleteAll() {
    if (vehicles.length === 0) {
        document.getElementById("errorMsg").textContent = "⚠️ אין רכבים למחיקה!";
        return;
    }
    var confirm = window.confirm("האם אתם בטוחים שברצונכם למחוק את כל כלי הרכב?");
    if (confirm) {
        vehicles = [];
        saveToStorage();
        displayTable();
    }
}
