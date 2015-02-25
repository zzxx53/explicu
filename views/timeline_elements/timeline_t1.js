// create a timeline with some data
var container = document.getElementById('timeline_t1');
var items = new vis.DataSet(
[
{id:1, content:'276.1-Hyposmolality and/or hyponatremia',start:'1362-08-31'},
{id:2, content:'285.9-Anemia unspecified',start:'1363-06-06'},
{id:3, content:'401.9-HYPERTENSION NOS',start:'1363-03-15',end:'1363-07-05'},
{id:4, content:'427.31-ATRIAL FIBRILLATION',start:'1363-07-05'},
{id:5, content:'MED112-Amiodarone',start:'1362-09-10',end:'1362-09-15'},
{id:6, content:'MED118-Fentanyl',start:'1363-03-15',end:'1363-06-22'},
{id:7, content:'MED120-Levophed-k',start:'1363-03-15',end:'1363-06-17'},
{id:8, content:'MED124-Midazolam',start:'1363-03-16',end:'1363-06-22'},
{id:9, content:'MED128-Neosynephrine-k',start:'1362-09-09',end:'1363-04-06'},
{id:10, content:'MED131-Propofol',start:'1363-04-05',end:'1363-04-06'},
{id:11, content:'MED25-Heparin',start:'1362-09-10',end:'1363-07-14'},
{id:12, content:'MED43-Dopamine',start:'1363-06-16'},
{id:13, content:'PROC100109-',start:'1363-07-07'},
{id:14, content:'PROC100323-',start:'1363-06-21'},
{id:15, content:'PROC100364-',start:'1362-08-31'},
{id:16, content:'PROC100368-',start:'1362-09-12'},
{id:17, content:'PROC100369-',start:'1363-06-11'},
{id:18, content:'PROC100390-',start:'1362-08-31',end:'1363-03-15'},
{id:19, content:'PROC100407-',start:'1363-04-03'},
{id:20, content:'PROC100479-',start:'1363-06-08'},
{id:21, content:'PROC100572-',start:'1362-09-09'},
{id:22, content:'PROC100574-',start:'1362-09-09',end:'1363-03-22'},
{id:23, content:'PROC100701-',start:'1363-06-21'},
{id:24, content:'PROC100951-',start:'1362-09-09'},
{id:25, content:'PROC101645-',start:'1363-06-08'},
{id:26, content:'PROC101648-',start:'1363-06-08'},
{id:27, content:'PROC101729-',start:'1363-06-06'},
{id:28, content:'PROC101749-',start:'1363-03-15',end:'1363-06-08'},
{id:29, content:'PROC101780-',start:'1362-09-14',end:'1363-07-05'},
{id:30, content:'PROC101782-',start:'1363-06-08'},
{id:31, content:'PROC101783-',start:'1363-03-15',end:'1363-07-05'},
{id:32, content:'PROC101834-',start:'1363-03-18',end:'1363-06-11'},
{id:33, content:'PROC101843-',start:'1363-03-22'},
{id:34, content:'PROC101855-',start:'1363-04-03'},
{id:35, content:'mortality-1',start:'1363-07-14'},
{id:36, content:'244.9-HYPOTHYROIDISM NOS',start:'1132-11-26'},
{id:37, content:'276.1-Hyposmolality and/or hyponatremia',start:'1132-11-26'},
{id:38, content:'276.5-Volume depletion',start:'1132-04-20'},
{id:39, content:'287.5-THROMBOCYTOPENIA NOS',start:'1132-04-20',end:'1132-11-26'},
{id:40, content:'401.9-HYPERTENSION NOS',start:'1132-11-26'},
{id:41, content:'MED120-Levophed-k',start:'1132-12-01',end:'1132-12-14'},
{id:42, content:'MED128-Neosynephrine-k',start:'1132-04-22',end:'1132-12-14'},
{id:43, content:'MED131-Propofol',start:'1132-12-03',end:'1132-12-09'},
{id:44, content:'MED45-Insulin',start:'1132-12-03',end:'1132-12-14'},
{id:45, content:'MED51-Vasopressin',start:'1132-12-14'},
{id:46, content:'PROC100006-',start:'1132-12-13'},
{id:47, content:'PROC100416-',start:'1132-12-02'},
{id:48, content:'PROC100574-',start:'1132-11-30'},
{id:49, content:'PROC100576-',start:'1132-12-03'},
{id:50, content:'PROC100579-',start:'1132-04-20'},
{id:51, content:'PROC100622-',start:'1132-12-03'},
{id:52, content:'PROC101696-',start:'1132-12-01'},
{id:53, content:'PROC101749-',start:'1132-12-02'},
{id:54, content:'PROC101780-',start:'1132-12-03'},
{id:55, content:'PROC101783-',start:'1132-12-02'},
{id:56, content:'PROC101834-',start:'1132-04-22',end:'1132-11-30'},
{id:57, content:'PROC101837-',start:'1132-11-29'},
{id:58, content:'PROC101843-',start:'1132-12-07'},
{id:59, content:'mortality-1',start:'1132-12-14'},
{id:60, content:'287.5-THROMBOCYTOPENIA NOS',start:'1099-08-03'}
]
);

var options = {};
var timeline = new vis.Timeline(container, items, options);

/**
 * Move the timeline a given percentage to left or right
 * @param {Number} percentage   For example 0.1 (left) or -0.1 (right)
 */
function move (percentage) {
    var range = timeline.getWindow();
    var interval = range.end - range.start;

    timeline.setWindow({
        start: range.start.valueOf() - interval * percentage,
        end:   range.end.valueOf()   - interval * percentage
    });
}

/**
 * Zoom the timeline a given percentage in or out
 * @param {Number} percentage   For example 0.1 (zoom out) or -0.1 (zoom in)
 */
function zoom (percentage) {
    var range = timeline.getWindow();
    var interval = range.end - range.start;

    timeline.setWindow({
        start: range.start.valueOf() - interval * percentage,
        end:   range.end.valueOf()   + interval * percentage
    });
}

// attach events to the navigation buttons
document.getElementById('zoomIn').onclick    = function () { zoom(-0.2); };
document.getElementById('zoomOut').onclick   = function () { zoom( 0.2); };
document.getElementById('moveLeft').onclick  = function () { move( 0.2); };
document.getElementById('moveRight').onclick = function () { move(-0.2); };
