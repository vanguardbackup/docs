# Continuous Integration/Continuous Deployment (CI/CD)

Vanguard uses a robust CI/CD pipeline to ensure code quality. This section covers our CI/CD practices and how to interact with them.

### CI/CD Pipeline Overview

Our CI/CD pipeline is designed to automatically test, build, and deploy Vanguard with each push to the main branch or pull request. Here's an overview of the process:

1. **Code Push**: Developer pushes code to GitHub.
2. **Code Quality Checks**: Static analysis and style checks are performed.
3. **Automated Tests**: GitHub Actions runs our test suite.

### GitHub Actions

We use GitHub Actions for our CI/CD processes. The configuration can be found in `.github/workflows/` in the repository.

#### Main Workflow

Our main workflow (`main.yml`) includes the following jobs:

1. **Pest Tests**: Runs our Pest test suite.
2. **Dusk Test**: Runs our Dusk test suite.
3. **Duster**: Checks code style using PHP_CodeSniffer.
4. **Static Analysis**: Runs PHPStan for static code analysis.
5. **Rector**: Automates PHP code upgrades and refactoring tasks.

### Interacting with CI/CD

As a developer, you'll primarily interact with the CI/CD system when you push code or create pull requests. Here are some key points to remember:

1. **Viewing Build Status**: You can see the status of your builds directly on GitHub in the "Actions" tab.

2. **Handling Failures**: If a build fails, click on the failed job in GitHub Actions to see detailed logs and error messages.

3. **Running Actions Locally**: You can use [act](https://github.com/nektos/act) to run GitHub Actions locally for testing:
   ```bash
   act -j test
   ```
   
### Troubleshooting Common CI/CD Issues

1. **Flaky Tests**: If you encounter intermittently failing tests, try to reproduce locally and fix the root cause rather than simply re-running the pipeline.

2. **Environment Variables**: Ensure all necessary environment variables are correctly set in GitHub Secrets.

