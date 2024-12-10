document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("dynamic-table");
    const headerRow = document.getElementById("header-row");
    const tableBody = document.getElementById("table-body");
    const addColumnButton = document.getElementById("add-column");
    const removeColumnButton = document.getElementById("remove-column");
    const addRowButton = document.getElementById("add-row");
    const removeRowButton = document.getElementById("remove-row");

    // Add Column
    addColumnButton.addEventListener("click", () => {
        const headerCells = headerRow.children.length;
        const newHeader = document.createElement("th");
        newHeader.textContent = `Column ${headerCells + 1}`;
        headerRow.appendChild(newHeader);

        const rows = tableBody.children;
        for (let row of rows) {
            const newCell = document.createElement("td");
            newCell.textContent = `Data ${headerCells + 1}`;
            row.appendChild(newCell);
        }
    });

    // Remove Column
    removeColumnButton.addEventListener("click", () => {
        const columns = headerRow.children.length;
        if (columns > 1) {
            headerRow.removeChild(headerRow.lastChild);
            const rows = tableBody.children;
            for (let row of rows) {
                row.removeChild(row.lastChild);
            }
        }
    });

    // Add Row
    addRowButton.addEventListener("click", () => {
        const newRow = document.createElement("tr");
        const columns = headerRow.children.length;
        for (let i = 0; i < columns; i++) {
            const newCell = document.createElement("td");
            newCell.textContent = `Data ${i + 1}`;
            newRow.appendChild(newCell);
        }
        tableBody.appendChild(newRow);
    });

    // Remove Row
    removeRowButton.addEventListener("click", () => {
        const rows = tableBody.children;
        if (rows.length > 1) {
            tableBody.removeChild(rows[rows.length - 1]);
        }
    });
});
