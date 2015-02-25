// DOM element where the Timeline will be attached                                                                                                                                                                  
var container = document.getElementById('mytimeline_2');
// Create a DataSet with data (enables two way data binding)                                                                                                                                                       
var data = new vis.DataSet([
    {id: 1, content: 'Medication 1', start: '2013-04-20'},
    {id: 2, content: 'diagnosis 1', start: '2013-04-14'},
    {id: 3, content: 'medication 2', start: '2013-04-18'},
    {id: 4, content: 'medication 4', start: '2013-04-16', end: '2013-04-19'},
    {id: 5, content: 'diagnosis 5', start: '2013-04-25'},
    {id: 6, content: 'diagnosis 6', start: '2013-04-27'}
]);

// Configuration for the Timeline                                                                                                                                                                                
var options = {};
// Create a Timeline                                                                                                                                                                                            
var timeline = new vis.Timeline(container, data, options);
