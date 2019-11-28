renderTable();

function renderTable() {
    const table_cont = document.querySelector('.table-content');
    let HTML = '';
    let summaryDate = [0,0,0,0];
    

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
        let balance = income - expense;
        updateFooter(income, expense, balance);
        HTML += `<div class="table-row">
        <div class="cell">${i}</div>
        <div class="cell">${months[month]}</div>
        <div class="cell">${income}</div>
        <div class="cell">${expense}</div>
        <div class="cell">${balance}</div>
        </div>`;
    }
    table_cont.innerHTML = HTML;
    renderSummary(summaryDate);
}

function updateFooter(income, expense, balance) {

    const cells = [
        document.querySelector('#total-income'),
        document.querySelector('#total-expense'),
        document.querySelector('#total-balance'),
    ];

    let newValue = [income, expense, balance];
    let cells_data = [];

    for (let i = 0; i < cells.length; i-=-1) {
        cells_data[i] = parseFloat(cells[i].innerHTML);
        cells_data[i] += newValue[i];
        cells[i].innerHTML = cells_data[i] + ' Eur';
    }
}

function renderSummary(summary){
    for(let i = 0; i < 4; i+=true){
        document.querySelector('#summary-'+i).innerHTML = months[summary[i]];
    }
}