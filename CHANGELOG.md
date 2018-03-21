# 3.0.1 (2018-03-20)
* Updated pull request template
* Added issue template
* Updated to pr-bumper version 3
* Updated to node 8
* Added slack integration
* Updated ember-frost-test to ^4.0.1
* Updated ember-test-utils to ^8.1.1
* Removed ignoring of package-lock.json file
* Added package-lock.json file
* Updated Travis CI scripts to allow non-exact node version

# 3.0.0 (2018-01-05)

* Remove `ember-cli-test-loader` NPM devDependency
* Remove useLintTree from ember-cli-mocha configuration
* Remove reference to unused ember-cli-code-coverage configuration
* Move `ember-cli-htmlbars` NPM dependency to devDependency
* Pin `ember-cli-htmlbars-inline-precompile` to `0.3.12`
* Install `ember-frost-test` NPM devDependency @ `^4.0.0`
* Update README to include version information for validator package
* gitignore _package-lock.json_ until officially support Node 8


# 2.3.3 (2017-12-11)
* **Updated** binding of _super call inside `included` hook of `index.js`

# 2.3.2 (2017-07-07)

Upgrade Ember-cli to 2.12.3


# 2.3.1 (2017-05-11)

* **Add** `.pr-bumper.json`


# 2.3.0 (2017-03-22)

* **Changed** shim to supply `validator` via `vendor` to get smaller builds.

  Before vendor optimization:
  ```
  - dist/assets/dummy-44e3761e0c06a3544042b299c6ac7aeb.js: 3.1 KB (1.21 KB gzipped)
  - dist/assets/dummy-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  - dist/assets/vendor-19aa367edab338960d4a7395669080c8.js: 703.55 KB (177.32 KB gzipped)
  - dist/assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  ```

  After vendor optimization:
  ```
  - dist/assets/dummy-44e3761e0c06a3544042b299c6ac7aeb.js: 3.1 KB (1.21 KB gzipped)
  - dist/assets/dummy-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  - dist/assets/vendor-30f2ea169fe9c92cb37805ef11f1d6fd.js: 641.32 KB (170.4 KB gzipped)
  - dist/assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
  ```

  Approximately 60 KB were shaved off.


# 2.2.0 (2017-03-22)

* **Replaced** blueprints with npm dependency so consumers don't have to maintain their own version of `validator`.


# 2.1.4 (2017-03-17)

* **Fixed** build by explicitly pinning `5to6-codemod` to version `1.4.0`.

# 2.1.3

* **Fixed** build to publish.

# 2.1.2

* **Updated** CI to test in Chrome as well as Firefox.


# 2.1.1

* **Upgraded** to test against Ember 2.11.


# 2.1.0

* **Added** additional builds to CI to make sure addon works with latest versions of Ember.
* **Removed** files from npm package that aren't necessary (all of the various config files).
* **Updated** dependencies to latest versions.


# 2.0.0
* **Updated** `validator` to `6.2.0`
* `isNull` was renamed to `isEmpty`


# 1.0.1

* **Updated** Travis configuration to test addon against older versions of Ember.

# 1.0.0

* **Added** missing dependency.

# 0.2.13

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.12

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.11

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.10

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.9

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.8

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.7

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.6

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.5

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.4

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.3

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.2

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.1

No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 0.2.0

* **Updated** `validator` to version `5.5.0`.

# 0.1.3

* **Fixed** build for consumers.

# 0.1.2

* **Fixed** blueprint so it actually runs.
* **Fixed** continuous integration configuration for deploying.

# 0.1.1

* Initial implementation and release.
