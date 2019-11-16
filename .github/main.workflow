workflow "build and test" {
  on = "push"
  resolves = ["lint", "test"]
}

action "lint" {
  uses = "borales/actions-yarn@v2.0.0"
  args = "lint"
}

action "test" {
  uses = "borales/actions-yarn@v2.0.0"
  args = "test"
}