module.exports = {
  default: {
    require: [
      "step-definitions/*.js",
      "hooks/*.js"
    ],
    paths: [
      "features/*.feature"
    ],
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ]
  }
}
