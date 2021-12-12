export default `name: Tests

on:
  push:
  pull_request:
  workflow_dispatch:

jobs:
  tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout current repository
        uses: actions/checkout@v2
      - name: Setup NodeJs
        uses: actions/setup-node@v2
        with:
          node-version: "lts/*"
      - name: Install dependencies
        run: npm i
      - name: Run Unit & Integration Tests
        run: npm run test
`;
