// Load a Sample File

function DoJobFile () {
  var sbp = "";
  var jobPath = 'jobs/test_carve_01.sbp';
  
  jQuery.get(jobPath, function(data) {
      sbp += data
    })
    .done(function() {
      jobPath = jobPath.replace('jobs/', '')
      jobPath = jobPath.replace('.sbp', '')
    sbp += 'end';
    sbp += "'a FabMo load";
      fabmo.submitJob({
        file: sbp,
        filename: 'test_file' + '.sbp',
        name: "TEXT: " + "test_01",
        description: "First File: " + jobPath
      });
    })
}