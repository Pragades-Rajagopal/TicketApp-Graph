// import fetch from 'node-fetch';
// const fetch = require('node-fetch');

let delayed;

getData();

async function getData(){

    // const url = "http://localhost:9192/ticketapi/Jan2022";
    const data = await fetch('http://localhost:9192/ticketapi', {mode: 'no-cors', method: 'GET'});
    // const data = await response.json();
    console.log(data);

    const len = data.length;
    
    var labels = [];
    var values = [];

    for (let i=0; i<len; i++) {
        labels.push(data[i].RESOLUTION);
        values.push(data[i].TT_COUNT);
    }

    new Chart(document.getElementById("myChart").getContext("2d"), {


        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Ticket Count",
                    data: values
                }
            ]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Ticket Chart"
            },
            animation: {
                onComplete: () => {
                    delayed=true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === "data" && context.mode === "default" && !delayed) {
                        delay = context.dataIndex * 200 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
        }

    });

};




