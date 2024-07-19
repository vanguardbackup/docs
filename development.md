# Vanguard Development Guide

We're excited that you're interested in contributing to Vanguard! This guide will help you set up your development environment and understand our contribution process.

## Getting Started

### Prerequisites
- PHP 8.2 or higher
- Composer
- Node.js and npm
- Git

### Setting Up Your Development Environment

1. Fork the Vanguard repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/vanguard.git
   cd vanguard
   ```
3. Install PHP dependencies:
   ```bash
   composer install
   ```
4. Install JavaScript dependencies:
   ```bash
   npm install
   ```
5. Set up your environment:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
6. Configure your `.env` file with your local database details.

### Database Setup

Set up your database and seed it with test data:

```bash
php artisan migrate:fresh --seed
```

## Development Workflow

1. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes, following our coding standards (PSR-12).
3. Run tests and ensure they pass:
   ```bash
   php artisan test
   ```
4. Commit your changes with a clear, descriptive commit message.
5. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Submit a Pull Request (PR) to the main Vanguard repository.

## Code Quality and Standards

We use several tools to maintain high code quality:

- **Duster**: An automated code formatting tool that ensures consistent coding style across the project. It combines the functionality of TLint, PHP_CodeSniffer,  PhpCsFixer and Laravel Pint to automatically fix coding standard violations.

- **PHPStan**: Performs static analysis to catch potential errors and improve code quality.

- **Rector**: A tool for instant upgrades and automated refactoring of PHP code.

- **Husky**: Runs pre-commit hooks for linting and testing, ensuring that only quality code is committed.

- **GitHub Actions**: Automates CI/CD processes on PR submissions, running tests and checks automatically.

::: tip
Husky is configured to automatically run code quality checks before each commit. However, you can also run these checks manually:

```bash
# Run Duster to automatically fix coding style issues
./vendor/bin/duster fix

# Run PHPStan for static analysis
./vendor/bin/phpstan analyse

# Run Rector to check for potential automated refactorings
./vendor/bin/rector process --dry-run
```

Running these commands helps catch and fix common issues before they enter the codebase.
:::

## Commit Guidelines

We follow a structured commit message format to maintain a clear and traceable history. Our commit messages should:

1. Start with a type prefix (e.g., `fix:`, `feat:`, `refactor:`)
2. Be no longer than 50 characters
3. End with a period
4. Clearly describe the change

Examples of valid commit messages:
- `feat: Add user authentication feature.`
- `fix: Resolve database connection timeout issue.`
- `refactor: Optimize backup process for better performance.`

::: info
Husky is configured to run a pre-commit hook that checks your commit messages against these guidelines. It ensures that each commit message:
- Begins with an approved type prefix
- Is under 50 characters
- Ends with a period
- Follows our formatting rules

If your commit doesn't meet these criteria, the commit will be rejected, and you'll be prompted to adjust your message.
:::

This structured approach to commits helps in generating changelogs, understanding the nature of changes, and maintaining a clean project history.

## Internationalization (i18n)

Vanguard supports multiple languages. Follow these guidelines for language strings:

1. Use English strings directly in your code:
   ```php
   {{ __('Hello world!') }}
   ```
   or
   ```php
   @lang('Hello world!')
   ```

2. For languages other than English, add translations to `lang/[lang_code].json` files. For example, in `lang/es.json`:
   ```json
   {
     "Hello world!": "¡Hola mundo!"
   }
   ```

3. When adding a new language, create a new JSON file (e.g., `fr.json` for French) and update the `available_languages` array in `config/app.php`.

::: warning
Never hardcode non-English strings directly in your code. Always use the `__()` or `@lang()` functions with English strings, and provide translations in the JSON files.
:::

::: tip
Remember to keep your English strings consistent across the codebase. This makes it easier to manage translations and ensures a coherent user experience.
:::

## Testing

Vanguard uses [Pest](https://pestphp.com/) for testing.

- Write tests for new features and bug fixes.
- Ensure all tests pass before submitting a PR:
  ```bash
  php artisan test
  ```

## Version Bumping and Release Process

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
6. In the description, detail the changes, new features, and any breaking changes.
7. Publish the release.

::: tip
Before creating a release, ensure all tests pass and the changelog is up-to-date. Consider creating a release candidate for major updates to allow for community testing.
:::

This process ensures consistent version management and clear communication of changes to users and contributors.
  

## Documentation

- Update the documentation for any new or changed functionality.

A link to this GitHub repository can be found [here](https://github.com/vanguardbackup/docs). Please make PRs as necessary.

## Best Practices

- Keep PRs focused and small. One feature or bug fix per PR.
- Write clear, concise commit messages.
- Use meaningful variable and function names.
- Comment your code where necessary, but strive for self-documenting code.

## Getting Help

- Check our [FAQ](/frequently-asked-questions) for common questions.
- Open an issue on GitHub for bugs or feature requests.
- Join our community discussions for general questions.

Thank you for contributing to Vanguard and helping make backup management better for everyone!