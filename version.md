# Vanguard Version Checking

Keeping your Vanguard installation up-to-date is crucial for ensuring optimal performance, security, and access to the latest features. This guide explains how to check your Vanguard version and verify if updates are available.

## Checking Your Current Version

To determine which version of Vanguard you are currently running, use the following Artisan command in your terminal:

```bash
php artisan vanguard:version
```

This command will display your current Vanguard version.


![A screenshot of the version terminal command](/images/terminal-version-screenshot.png)

## Checking for Updates

Vanguard provides an easy way to check if a newer version is available. Simply add the `--check` parameter to the version command:

```bash
php artisan vanguard:version --check
```

![A screenshot of the version check terminal command output](/images/terminal-version-check-screenshot.png)

This command will:
1. Display your current Vanguard version
2. Check Vanguard's repository for the latest release
3. Inform you if a newer version is available

::: tip
We recommend regularly checking for updates to ensure you're benefiting from the latest features, performance improvements, and security patches.
:::

::: warning
Before updating, always review the changelog and backup your project to prevent any potential data loss.
:::

## Updating Vanguard

If you find that a new version is available, please refer to the ["Updating Vanguard"](https://docs.vanguardbackup.com/installation#updating-vanguard) section in the main installation guide for detailed update instructions.

Remember to always back up your data and review the changelog before performing any updates to ensure a smooth upgrade process.