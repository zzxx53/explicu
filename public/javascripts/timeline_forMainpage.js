// DOM element where the Timeline will be attached
var container1 = document.getElementById('visualization1');
// Create a DataSet (allows two way data-binding)

var items1 = new vis.DataSet([
{id:1, content:'276.1-Hyposmolality and/or hyponatremia',start:497646,className:''},
{id:2, content:'276.5-Volume depletion',start:497338,className:''},
{id:3, content:'285.9-Anemia unspecified',start:497617,className:''},
{id:4, content:'401.9-HYPERTENSION NOS',start:497534,end:497646,className:''},
{id:5, content:'427.31-ATRIAL FIBRILLATION',start:497534,end:497646,className:''},
{id:6, content:'MED112-Amiodarone',start:497534,end:497353,className:'green'},
{id:7, content:'MED115-Diltiazem',start:497348,className:'green'},
{id:8, content:'MED118-Fentanyl',start:497534,end:497633,className:'green'},
{id:9, content:'MED120-Levophed-k',start:497534,end:497628,className:'green'},
{id:10, content:'MED124-Midazolam',start:497534,end:497633,className:'green'},
{id:11, content:'MED126-Morphine Sulfate',start:497655,className:'green'},
{id:12, content:'MED128-Neosynephrine-k',start:497347,end:497556,className:'green'},
{id:13, content:'MED131-Propofol',start:497347,end:497556,className:'green'},
{id:14, content:'MED25-Heparin',start:497347,end:497655,className:'green'},
{id:15, content:'MED43-Dopamine',start:497347,end:497627,className:'green'},
{id:16, content:'PROC100109',start:497648,className:'orange'},
{id:17, content:'PROC100323',start:497632,className:'orange'},
{id:18, content:'PROC100364',start:497338,className:'orange'},
{id:19, content:'PROC100368',start:497350,className:'orange'},
{id:20, content:'PROC100369',start:497622,className:'orange'},
{id:21, content:'PROC100390',start:497338,end:497534,className:'orange'},
{id:22, content:'PROC100395',start:497553,className:'orange'},
{id:23, content:'PROC100407',start:497553,className:'orange'},
{id:24, content:'PROC100479',start:497619,className:'orange'},
{id:25, content:'PROC100572',start:497347,className:'orange'},
{id:26, content:'PROC100574',start:497347,end:497541,className:'orange'},
{id:27, content:'PROC100685',start:497633,className:'orange'},
{id:28, content:'PROC100701',start:497632,className:'orange'},
{id:29, content:'PROC100951',start:497347,className:'orange'},
{id:30, content:'PROC101645',start:497619,className:'orange'},
{id:31, content:'PROC101648',start:497619,className:'orange'},
{id:32, content:'PROC101729',start:497617,className:'orange'},
{id:33, content:'PROC101749',start:497534,end:497619,className:'orange'},
{id:34, content:'PROC101750',start:497347,className:'orange'},
{id:35, content:'PROC101780',start:497352,end:497646,className:'orange'},
{id:36, content:'PROC101782',start:497352,end:497619,className:'orange'},
{id:37, content:'PROC101783',start:497352,end:497646,className:'orange'},
{id:38, content:'PROC101834',start:497352,end:497622,className:'orange'},
{id:39, content:'PROC101843',start:497352,end:497541,className:'orange'},
{id:40, content:'mortality-1',start:497655,className:'red'}]);

// Configuration for the Timeline
var options = {maxHeight:300,width:'90%',stack:true};

// Create a Timeline
var timeline1 = new vis.Timeline(container1, items1, options);
