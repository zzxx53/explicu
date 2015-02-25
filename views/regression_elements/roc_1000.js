google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
	['oneMinusSpecificity', 'Sensitivity'],
	[1,1],
	[0.39699753,0.825779967],
	[0.319774622,0.750410509],
	[0.266826181,0.691625616],
	[0.222792529,0.622660099],
	[0.191995986,0.57635468],
	[0.171464958,0.545155993],
	[0.158729546,0.520361248],
	[0.14734486,0.495402299],
	[0.134184934,0.467323481],
	[0.119828651,0.432512315],
	[0.109138623,0.407224959],
	[0.100764125,0.384400657],
	[0.093547391,0.366174056],
	[0.088453226,0.35500821],
	[0.08351343,0.340229885],
	[0.078303489,0.324630542],
	[0.072630441,0.307881773],
	[0.067266132,0.291789819],
	[0.061207163,0.268965517],
	[0.054685088,0.246141215],
	[0.049938253,0.229228243],
	[0.04631059,0.217569787],
	[0.042644335,0.205418719],
	[0.039749923,0.196223317],
	[0.036971287,0.185714286],
	[0.034424205,0.177668309],
	[0.031375425,0.169129721],
	[0.028828342,0.157307061],
	[0.026667181,0.148440066],
	[0.023849954,0.138259442],
	[0.021920346,0.130049261],
	[0.02091695,0.122167488],
	[0.019257487,0.115106732],
	[0.017289287,0.107553366],
	[0.015514048,0.101149425],
	[0.013545847,0.088834154],
	[0.011924977,0.078489327],
	[0.010265514,0.070114943],
	[0.008914789,0.063054187],
	[0.007834208,0.057142857],
	[0.006830812,0.053366174],
	[0.006058969,0.047454844],
	[0.005209941,0.041707718],
	[0.004013584,0.033333333],
	[0.003357518,0.027586207],
	[0.002585675,0.023316913],
	[0.002006792,0.016420361],
	[0.001196357,0.00952381],
	[0.000501698,0.004926108],
	[0,0]
    ]);

    var options = {
        title: 'ROC',
        hAxis: {title: '1 - specificity', minValue: 0, maxValue: 1},
        vAxis: {title: 'Sensitivity', minValue: 0, maxValue: 1},
        legend: 'none'
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('regression_cv_1000'));

    chart.draw(data, options);
}