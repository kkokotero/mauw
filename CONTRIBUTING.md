# Project Contribution Guide

Thank you for your interest in contributing to this project!
By following these guidelines, we can maintain an organized, efficient, and positive collaboration for the entire community.

---

## How to Contribute

### 1. Reporting Issues

If you encounter a **bug** or unexpected behavior:

* Open an **issue** in the repository.
* Include a **clear description** of the problem.
* Explain the **steps to reproduce it**.
* Attach **screenshots** or **error logs** if possible.
* Specify the **version** and **environment** where it occurs (OS, browser, etc.).

---

### 2. Suggesting Improvements

If you have ideas to improve the project:

* Open an **issue** with the `enhancement` label.
* Explain your proposal in detail:

  * **Objective** of the improvement.
  * **Benefits** for the project.
  * Possible **drawbacks or risks**.
* If possible, suggest a **draft implementation**.

---

### 3. Contributing Code

To submit code changes:

1. **Fork** the repository.
2. **Create a branch** for your change:

   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make your changes and write clear commits**:

   ```bash
   git commit -m "Add new feature X"
   ```
4. **Push your changes to your repository**:

   ```bash
   git push origin feature/new-feature
   ```
5. **Open a Pull Request** in the main repository.
6. In the PR:

   * Describe the change.
   * Indicate if there are new dependencies.
   * Include tests or examples if applicable.

---

### 4. Code Style and Quality

To maintain code consistency:

* Use **descriptive names** for variables, functions, and classes.
* Comment code where necessary.
* Apply the **project’s code formatting** (e.g., Prettier or ESLint).
* Avoid introducing **unused code** or **console.log** in PRs.
* Ensure the code passes all **automated tests** before submission.

---

### 5. Review and Approval

* **Pull Requests** will be reviewed by the project maintainers.
* Respond to comments and make requested changes.
* Approval may require at least **two reviewers** to accept the PR (depending on repository policy).
* Large PRs can be split into smaller parts for easier review.

---

### 6. Testing and Coverage

* If adding new features, include **unit tests** and/or **integration tests**.
* Ensure that **all existing tests pass** before submitting your PR.
* If the project uses code coverage (e.g., `vitest`), maintain or improve the current percentage.

---

### 7. Documentation

* Update documentation if your change introduces or modifies functionality.
* Include usage examples if relevant.
* If it’s an API or library, update **type definitions** and JSDoc/TypeDoc comments.

---

### 8. Git Best Practices

* Use **atomic commits**: one commit = one logical change.
* Prefer **imperative commit messages**:

  * ✅ `"Fix string color error"`
  * ❌ `"Fixed error"`
* Avoid unnecessary *merge commits*; use `rebase` when appropriate.

---

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md).
By contributing, you agree to adhere to and respect these rules of community behavior.

---

## Acknowledgments

* All contributions are welcome: code, documentation, reports, and suggestions.
* We will publicly acknowledge contributors who make significant improvements.
