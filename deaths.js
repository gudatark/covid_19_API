window.addEventListener('load', setup);

async function setup() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const latest_data_deaths = await getData();
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: latest_data_deaths.name,
            datasets: [{
                label: 'covid 19 new death',
                data: latest_data_deaths.today_deaths,
                fill: false,
                borderColor: 'rgba(25, 99, 13, 0.5)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 1
            }]
        },
        options: {}
    });
}
getData();
async function getData() {

    const response = await fetch('./countries1.csv');
    const data = await response.text();
    console.log(data);
    const name = [];
    const today_deaths = [];
    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const cols = row.split(',');
        name.push(cols[2]);
        today_deaths.push(14 + parseFloat(cols[1]));
    });
    return {
        name,
        today_deaths
    };
}