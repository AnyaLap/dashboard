
const ctx1 = document.getElementById('myChart1');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ["янв-мар", "апр-июн", "июл-сен", "окт-дек"],
    datasets: [
    {
      label: "AйконЛаб",
      backgroundColor: "#c48ee9",
      data: [83,72,61,105]
    }, {
      label: "Репер-НН",
      backgroundColor: "#71f16c",
      data: [79,84,65,89]
    }
  ]
},
options: {
  title: {
    display: true,
    text: 'Производительность за год по кварталам (кол-тыс)'
  }
}
});

  const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ["янв-мар", "апр-июн", "июл-сен", "окт-дек"],
      datasets: [{ 
          data: [42,56,60,83],
          label: "AйконЛаб",
          borderColor: "#c48ee9",
          fill: false
        }, { 
          data: [28,35,46,58],
          label: "Репер-НН",
          borderColor: "#71f16c",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Прирост заказов за год'
      }
    }
  });

  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ["МИОЛ-2", "МИОЛ-SOFT", "CK", "ИА", "РЕПЕРЕН", "IPOM", "Epinevrium", "Laparostomy", "Dura", "РЕКОСТ"],
      datasets: [{
        label: "Продукция",
        backgroundColor: ['#a7eeea', "#ee9a9a","#c48ee9","#a3e98e","#8e94e9","#e9e38e","#e98ecb","#71f16c","#e9c58e","#c2beb8"],
        data: [14,185,19,10,18,176,125,69,27,56]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Выход продукции за год'
      }
    }
});
