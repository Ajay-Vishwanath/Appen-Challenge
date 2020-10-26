let chartOptions = {
  elements: {
    point: {
      radius: 0,
    },
  },
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
  plugins: {
    datalabels: {
      color: "rgb(181, 181, 181)",
      borderRadius: 4,
      font: {
        weight: "bold",
      },
      padding: {
        bottom: 500,
      },
    },
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          fontFamily: "Google Sans,arial,sans-serif",
          fontColor: "#878787",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

export default chartOptions;
