renderTable();

function renderTable() {
    const table_cont = document.querySelector('.table-content');
    let HTML = '';

    for (let i = 0; i < account.length; i-=-1) {

        let month = account[i].month;
        let income = account[i].income;
        let expense = account[i].expense;
        if (income == undefined) {
            income = 0;
        }
        if (expense == undefined) {
            expense = 0;
        }

        HTML += `<div class="table-row">
        <div class="cell">${i}</div>
        <div class="cell">${months[month]}</div>
        <div class="cell">${income}</div>
        <div class="cell">${expense}</div>
        <div class="cell">${income - expense}</div>
        </div>`;
    }
    table_cont.innerHTML = HTML;
}