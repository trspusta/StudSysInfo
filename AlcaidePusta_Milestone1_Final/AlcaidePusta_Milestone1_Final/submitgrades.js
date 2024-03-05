const students = [
    {
        code: 136194,
        studname: "Alcaide, Hannah Bea Reyes",
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
        grd: "NEW",
        yearlvl: 2,
        acadstatus: "Regular",
        yrofentry: 2,
        entryyrlvl: 1
    },
    {
        code: 136194,
        studname: "Año, Jesus Ricardo Tejano",
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
        grd: "NEW",
        yearlvl: 3,
        acadstatus: "Regular",
        yrofentry: 2,
        entryyrlvl: 1
    },
    {
        code: 136194,
        studname: "Alcaide, Hannah Bea Reyes",
        final: ["A", "B+", "B", "C+", "C", "D", "F", "FD", "WP"], // Dropdown options
        grd: "NEW",
        yearlvl: 2,
        acadstatus: "Regular",
        yrofentry: 2,
        entryyrlvl: 1
    },
];

const studentTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];

students.forEach(student => {
    const newRow = studentTable.insertRow();
    Object.keys(student).forEach(key => {
        const newCell = newRow.insertCell();
        if (key === 'final') {
            const select = document.createElement('select');
            student[key].forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            newCell.appendChild(select);
        } else {
            newCell.textContent = student[key];
        }
    });
});

