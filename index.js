const R = require('ramda');
const _ = require('lodash');

const propertiesToColumns = {
  testEvent: [
    { column: 'columnA', propPath: 'properties.columnA' }
  ]
};
const getSecondaries = (event) => {
  const extracted = {};
  (propertiesToColumns[event.event || event.type] || []).map((propertyColumn) => {
    // extracted[propertyColumn.column] = _.get(event, propertyColumn.propPath);
    extracted[propertyColumn.column] = R.prop(R.path(['propPath'], propertyColumn), event);
    console.log('R.path===', R.path(['propPath'], propertyColumn));    
    console.log('R.prop===', R.prop('propertyColumn.propPath', event));
    console.log('extracted===', extracted);
    console.log('propertyColumn===', propertyColumn);

  });
  return extracted;
};

const processTrack = event => Object.assign({},
  // await addGlobals(event), 
  getSecondaries(event));

let event = {
        event: "testEvent",
        type: "track",
        userId: "ip_mock-UserId",
        messageId: "thisIsMessageId",
        properties: { columnA : "columnAValue" }
      };

let result = processTrack(event);
console.log(result)

event = {
        event: "testEvent_not_in_propertiesToColumns",
        type: "track",
        userId: "ip_mock-UserId",
        messageId: "thisIsMessageId",
        properties: { columnA : "columnAValue" }
      };
result = processTrack(event);
console.log(result)      

// R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 3
// R.pathOr('N/A', ['a', 'b'], {a: {b: {c: 2}}}); //=> 3

// R.pathOr('N/A', ['a', 'b'], {a: {b: 2}});

/*****************************************/
/*****************************************/
/*****************************************/
/*****************************************/
// const secrets = { 'secrets-as-json':
//    '{"storageServiceConnection": "DefaultEndpointsProtocol=https;AccountName=xxx;AccountKey=y1B68J2e97EU8ZRT9AcgTK/W2uUNYMtSfR9FzGcGVnPFE0LrmG4MSuay0y1Nb3xkF4W6eEuHQIyou+0y/w5JlA==", "xxx-server": "usw2-xxx.windows.net", "xxx-database": "xxx" }' }

// R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 3
// R.pathOr('N/A', ['a', 'b'], {a: {b: {c: 2}}}); //=> 3

// R.pathOr('N/A', ['a', 'b'], {a: {b: 2}});

// console.log(R.path(['secrets-as-json'], secrets));
// const secretsJson = JSON.parse(R.path(['secrets-as-json'], secrets));
// console.log(R.path(['storageServiceConnection'], secretsJson));

// console.log(R.path(['secrets-as-json','storageServiceConnection'], secrets));

// const event = {"event":"EventName1", "name":"EventName2","properties":{"customerId":"12345", "organization": {"customerId":"66666"}, "path":"/","referrer":"https://uat-insight.assist.ms/?assessmentid=ip_7edc0cf2-b976-427e-8424-df23785ca33b","search":"","title":"Software Asset Management","url":"https://uat-insight.assist.ms/#/server"}, "userId":null
// }

// console.log(R.propOr(R.path(['properties','organization','customerId'], event), 'customerId', event));
// console.log(R.path(['properties','customerIdd'], event) || R.path(['properties','organization','customerId'], event));

// console.log(R.path(['name'], event));
// console.log(R.propOr(R.path(['name'], event), 'event', event));
/*****************************************/
/*****************************************/
/*****************************************/
/*****************************************/
// const event = {"event":"EventName1", "name":"EventName2","properties":{"name":"/server","path":"/","referrer":"https://uat-insight.assist.ms/?assessmentid=ip_7edc0cf2-b976-427e-8424-df23785ca33b","search":"","title":"Software Asset Management","url":"https://uat-insight.assist.ms/#/server"}, "userId":null
// }

// console.log(R.startsWith('t_', R.defaultTo(R.propOr('', 'userId', event), '')));
// console.log(R.startsWith('t_', R.propOr('', 'userId', event)));

// console.log(R.path(['properties', 'name'], event));
// console.log(R.path(['name'], event));

// console.log(R.propOr(R.path(['name'], event), 'event', event));
// console.log(R.propOr(R.path(['properties', 'name'], event), 'event', event));
