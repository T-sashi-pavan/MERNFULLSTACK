import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart from Chart.js
import './App.css';

function App() {
  useEffect(() => {
    // Chart.js initialization
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "World Wide Wine Production 2018"
          }
        }
      }
    });

    const xValues1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    new Chart("myChart1", {
      type: "line",
      data: {
        labels: xValues1,
        datasets: [
          { data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478], borderColor: "red", fill: false },
          { data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000], borderColor: "green", fill: false },
          { data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100], borderColor: "blue", fill: false }
        ]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    });

    const xValues2 = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues2 = [55, 49, 44, 24, 15];
    const barColors2 = ["red", "green", "blue", "orange", "brown"];

    new Chart("myChart2", {
      type: "bar",
      data: {
        labels: xValues2,
        datasets: [{
          backgroundColor: barColors2,
          data: yValues2
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "World Wine Production 2018"
          }
        }
      }
    });



    const xyValues3 = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];

new Chart("myChart3", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      data: xyValues3
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center',background:'plum' }}>CHARTS</h1>
      <div className="container  text-black">
        <div className="row" style={{background:'yellow' }}>
          <div className="col">
            <canvas id="myChart" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
          <div className="col">
            <h1>TEXT</h1>
        <i>A short story is a piece of prose fiction. It 
            can typically be read in a single sitting and focuses 
            on a self-contained incident or series of linked incidents, with the
             intent of evoking a single effect or mood. The short story is one of the oldest 
             types of literature and has existed in the form of legends, mythic tales, folk tales, 
             fairy tales, tall tales, fables, and anecdotes in various ancient communities around the world.
              The modern short story developed in the early century.[1]...</i>
                        </div>
        </div>

        <hr />

        <div className="row" style={{background:'coral' }}>
          <div className="col">
            <h1>A STORY</h1>
            <i>A short story is a piece of prose Hackspire is a statewide initiative to provide engineering students to solve some of the common problems we face in our daily life, and thus inculcate a culture of product innovation and a mindset of real time problem solving fiction...</i>
          </div>
          <div className="col">
            <h1>EIFFEL TOWER</h1>
              <canvas id="myChart1" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
        </div>

        <hr />
        <div className="row" style={{background:'orange' }}>
          <div className="col">
            <h1>A STORY</h1>
            <canvas id="myChart2" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
          <div className="col">
            <h1>TEXT</h1>
            <i>A short story is a piece of prose fiction. It 
            can typically be read in a single sitting and focuses 
            on a self-contained incident or series of linked incidents, with the
             intent of evoking a single effect or mood. The short story is one of the oldest 
             types of literature and has existed in the form of legends, mythic tales, folk tales, 
             fairy tales, tall tales, fables, and anecdotes in various ancient communities around the world.
              The modern short story developed in the early century.[1]...</i>
          </div>
        </div>

        <hr/>
        <div className="row" style={{background:'pink' }}>
          <div className="col">
            <canvas id="myChart3" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
          <div className="col">
            <h1>TEXT</h1>
        <i>A short story is a piece of prose fiction. It 
            can typically be read in a single sitting and focuses 
            on a self-contained incident or series of linked incidents, with the
             intent of evoking a single effect or mood. The short story is one of the oldest 
             types of literature and has existed in the form of legends, mythic tales, folk tales, 
             fairy tales, tall tales, fables, and anecdotes in various ancient communities around the world.
              The modern short story developed in the early century.[1]...</i>
                        </div>
        </div>
      </div>
    </>
  );
}

export default App;
