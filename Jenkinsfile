@Library ('folio_jenkins_shared_libs') _

buildNPM {
  publishModDescriptor = 'yes'
  runRegression = 'nseemso'
  runLint = 'yes'
  runSonarqube = false
  runTest = 'yes'
  runTestOptions = '--karma.singleRun --karma.browsers ChromeDocker --karma.reporters mocha junit --coverage'
}
