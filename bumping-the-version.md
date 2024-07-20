# Version Bumping and Release Process

Vanguard uses semantic versioning and provides a streamlined process for updating the project version. Here's how to bump the version and create a new release:

### Automated Version Bumping

1. Navigate to the root directory of the Vanguard project.

2. Run the version bumping script:
   ```bash
   ./bump_version.sh
   ```

3. The script will prompt you to choose a version type:
    - Patch (e.g., 1.0.0 to 1.0.1)
    - Minor (e.g., 1.0.0 to 1.1.0)
    - Major (e.g., 1.0.0 to 2.0.0)

4. After selection, you'll be asked to confirm the new version.

5. Upon confirmation, the script will:
    - Update the version number in relevant files
    - Commit these changes
    - Push the commit to the repository

### Creating a Release on GitHub

After bumping the version:

1. Go to the Vanguard repository on GitHub.
2. Navigate to the "Releases" section.
3. Click "Draft a new release".
4. Tag the release with the new version number (e.g., v1.2.3).
5. Title the release with the version number.
6. In the description, detail the changes and new features.
7. Publish the release.

::: tip
Before creating a release, ensure all tests pass and the changelog is up-to-date.
:::