var container = document.getElementById('regressiontable');
var groups = new vis.DataSet();
groups.add({id: 0, content: "group0"})
groups.add({id: 1, content: "group1"})
groups.add({id: 2, content: "group2",options:{ yAxisOrientation:'right'}})

var items = [
/*    {x: '2014-06-11', y: 10, group:0},
    {x: '2014-06-12', y: 25, group:0},
    {x: '2014-06-13', y: 30, group:0},
    {x: '2014-06-14', y: 10, group:0},
    {x: '2014-06-15', y: 15, group:0},
    {x: '2014-06-16', y: 30, group:0},
    {x: '2014-06-11', y: 12, group:1},
    {x: '2014-06-12', y: 15, group:1},
    {x: '2014-06-13', y: 34, group:1},
    {x: '2014-06-14', y: 24, group:1},
    {x: '2014-06-15', y: 5, group:1},
    {x: '2014-06-16', y: 12, group:1},
    {x: '2014-06-11', y: 22, group:2},
    {x: '2014-06-12', y: 14, group:2},
    {x: '2014-06-13', y: 24, group:2},
    {x: '2014-06-14', y: 21, group:2},
    {x: '2014-06-15', y: 30, group:2},
    {x: '2014-06-16', y: 18, group:2} 
*/
{x: 0, y: 10, group:0},                                                                                                                                                                               
    {x: 1, y: 25, group:0},                                                                                                                                                                                 
    {x: 2, y: 30, group:0},
    {x: 3, y: 10, group:0},                                                                                                                                                                                 
    {x: 4, y: 15, group:0},                                                                                                                                                                                 
    {x: 5, y: 30, group:2},
    {x: 6, y: 12, group:1},
    {x: 7, y: 15, group:1}

];

var dataset = new vis.DataSet(items);
var options = {
    style:'bar',
    barChart: {width:50, align:'center', handleOverlap:"sideBySide"}, // align: left, center, right
    drawPoints: true,
    dataAxis: {
        customRange: {
            left: {
                min:-5, max:30
            },
            right: {
                min:-5
            }
        },
        icons:true
    },
    orientation:'top',
    start: 0,
    end: 15
    
};
var graph2d = new vis.Graph2d(container, items, groups, options);
