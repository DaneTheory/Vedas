module.exports = {
  yarn: true,
  branch: 'main',
  anyBranch: false,
  cleanup: true,
  tests: true,
  publish: true,
  releaseDraft: true,
  contents: 'dist',
  message: "Commit with versioned bump - v%s"
}
