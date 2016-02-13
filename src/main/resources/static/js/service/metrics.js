angular
  .module('app.services')
  .factory('Metrics', MetricsService);

function MetricsService($http) {

  return {
    current: queryCurrentValues
    history: queryHistoricValues;
  };

  function queryCurrentValues(metricIds) {
    var query = {
      ids: metricIds
    };
    return $http.post('/api/metrics/current', query)
      .then(function(response) {
        var metrics = response.data;
        console.log('Read current metrics: ' + JSON.stringify(metrics));
        return metrics;
      }, function(err) {
        console.log('Error reading current metrics!');
      });
  };

  function queryHistoricValues(metricIds, range) {
    var query = {
      ids: metricIds,
      after: range.after;
      before: range.before
    };
    return $http.post('/api/metrics/historic', query)
      .then(function(response) {
        var metrics = response.data;
        console.log('Read historic metrics: ' + JSON.stringify(metrics));
        return metrics;
      }, function(err) {
        console.log('Error reading historic metrics!');
      });
  };

}