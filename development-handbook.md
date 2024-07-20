# Vanguard Developer Handbook

## 1. Introduction

Welcome to the Vanguard Development Guide! We're happy that you're interested in contributing to Vanguard.

Thanks for your interest in contributing to Vanguard. This guide will help you:

1. Set up your development environment
2. Understand our contribution process
3. Start contributing to Vanguard effectively

We aim to make your onboarding process smooth and productive. Let's get started!

### What is Vanguard?

Vanguard is an open-source backup solution for servers and applications. Built with Laravel, it's designed by the community for the community to simplify data protection.

In the following sections, we'll guide you through setting up your development environment, understanding our workflow, and making your first contribution. Let's get started!

## 2. Getting Started

This section will guide you through setting up your development environment for Vanguard.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- PHP 8.2 or higher
- Composer
- Node.js (v14 or higher) and npm
- Git

### Development Environments

While you can use any development environment you're comfortable with, we recommend the following options for a smooth development experience:

#### Laravel Valet (macOS)

[Laravel Valet](https://laravel.com/docs/valet) is a lightweight development environment for macOS. It's easy to set up and uses minimal system resources.

To install:
```bash
brew install php
composer global require laravel/valet
valet install
```

#### Laravel Herd (macOS)

[Laravel Herd](https://herd.laravel.com/) is a native macOS application that provides a complete PHP development environment. It's user-friendly and requires no configuration.

To install, download it from the official Laravel Herd website.

#### Laragon (Windows)

[Laragon](https://laragon.org/) is an isolated, portable development environment for Windows. It's easy to use and comes with a variety of tools pre-installed.

::: tip
Regardless of your chosen environment, ensure it meets Vanguard's PHP version and extension requirements.
:::

### Setting Up Your Development Environment

1. Fork the Vanguard repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/vanguardbackup/vanguard.git
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

### Running the Application

1. Start the development server:
   ```bash
   php artisan serve
   ```
2. In a separate terminal, compile assets:
   ```bash
   npm run dev
   ```

You should now be able to access the Vanguard application at `http://localhost:8000`.

Congratulations! You've successfully set up your Vanguard development environment. In the next section, we'll cover the development workflow and how to make your first contribution.

## 3. Development Workflow

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

## 4. Code Quality and Standards

Vanguard employs several tools to maintain high code quality:

### Quality Assurance Tools

1. **Duster**: Automated code formatter combining TLint, PHP_CodeSniffer, PhpCsFixer, and Laravel Pint to enforce consistent coding style.

2. **PHPStan**: Static analysis tool to detect potential errors and improve code quality.

3. **Rector**: Performs instant upgrades and automated refactoring of PHP code.

4. **Husky**: Executes pre-commit hooks for linting and testing, ensuring only quality code is committed.

5. **GitHub Actions**: Automates CI/CD processes, running tests and checks on PR submissions.

### Automated Pre-commit Checks

Husky runs these checks before each commit:

- PHPStan (Static analysis)
- Pest (PHP testing framework)
- Dusk (Browser testing)
- Rector (Code refactoring)
- Duster (Code formatting)
- Front-end asset build

### Manual Quality Checks

Developers can run these checks locally:

```bash
# Static analysis
./vendor/bin/phpstan analyse

# Pest test suite
./vendor/bin/pest --parallel

# Dusk test suite
php artisan dusk --dirty

# Check for potential refactorings
./vendor/bin/rector process --dry-run

# Fix coding style issues
./vendor/bin/duster fix

# Npm asset building
npm install && npm run build
```

:::tip
Running these checks locally helps catch and fix issues before they're flagged by the pre-commit script or CI system, streamlining the development process.
:::

## 5. Testing

Thorough testing is a critical part of the development process in Vanguard. We use multiple testing frameworks to ensure comprehensive coverage:

### Pest

Vanguard primarily uses [Pest](https://pestphp.com/) for unit and feature testing.

- Write tests for all new features and bug fixes.
- Ensure all tests pass before submitting a PR:
  ```bash
  php artisan test
  ```

### Laravel Dusk

For browser testing, we use [Laravel Dusk](https://laravel.com/docs/dusk). This allows us to test JavaScript-dependent functionality and user interactions.

- Write Dusk tests for features that involve complex front-end interactions.
- Run Dusk tests separately:
  ```bash
  php artisan dusk
  ```

### Importance of Testing

Testing is integral to Vanguard's development process:

1. **Quality Assurance**: Catches bugs early and prevents regressions.
2. **Living Documentation**: Tests demonstrate expected behavior of project components.
3. **Refactoring Confidence**: Enables easier refactoring and optimization.
4. **CI/CD**:  Our CI pipeline runs all tests before merging.

::: tip
Aim for high test coverage, but focus on testing critical paths and edge cases rather than aiming for an arbitrary coverage percentage.
:::

::: warning
Never submit a PR without adding appropriate tests and ensuring all existing tests pass.
:::

Remember, a well-tested codebase is a stable and maintainable codebase. Your tests are as important as your feature code!

## 6. Internationalization (i18n)

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


## 7. Commit Guidelines

We use structured commit messages for a clear, traceable history. Each commit should:

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

The script attempts to auto-fix non-compliant commits, but manual edits may be needed.
:::

This approach aids in changelog generation, change tracking, and maintaining a clean history.

This script runs automatically before each local commit. To ensure it functions properly, verify that Husky hooks are activated in your development environment.

![A screenshot of the pre-commit script](/images/husky-check-example.png)


## 8. Documentation

Maintaining up-to-date and comprehensive documentation is important. This section outlines our documentation practices and guidelines.

### Updating Documentation

1. **When to Update**: Update documentation whenever you add, modify, or remove features.

2. **Where to Update**:
   - In-code documentation: Update docblocks and comments in the codebase.
   - The documentation site (this website!) at the GitHub repository [here](https://github.com/vanguardbackup/docs/).

3. **Documentation PRs**: Submit Pull Requests to [this repository](https://github.com/vanguardbackup/docs/) when necessary. The repositories are separate.

### Documentation Best Practices

1. **Clear and Concise**: Write in simple, easy-to-understand language.
2. **Keep it Current**: Regularly review and update existing documentation.
3. **Accessibility**: Ensure documentation is accessible, including proper heading structure and alt text for images.

## 9. Tips & Tricks

Adhering to best practices ensures that Vanguard remains maintainable, efficient, and secure. Here are key best practices to follow:

### Code Organization

1. **SOLID Principles**: Follow SOLID principles in your object-oriented design.
2. **DRY (Don't Repeat Yourself)**: Avoid code duplication; extract reusable code into functions or classes.
3. **Single Responsibility**: Each class or function should have a single, well-defined purpose.

### Performance Considerations

1. **Database Optimization**:
   - Use eager loading to prevent N+1 query problems.
   - Index frequently queried columns.
2. **Caching**: Implement caching for expensive operations or frequently accessed data.
3. **Asynchronous Processing**: Use Laravel's queue system for time-consuming tasks.

### Security Best Practices

1. **Input Validation**: Always validate and sanitize user input.
2. **Authentication and Authorization**: Use Laravel's built-in authentication system and Gates/Policies for authorization.
3. **CSRF Protection**: Ensure CSRF tokens are used for all POST, PUT, PATCH, and DELETE requests.
4. **Avoid Raw SQL**: Use Eloquent or Query Builder to prevent SQL injection.
5. **Encrypt Sensitive Data**: Always encrypt sensitive information like passwords, API keys, and personal data before storing in the database. Use Laravel's built-in encryption features.
6. **Secure Remote Commands**: When writing commands that will run on remote servers, be extremely cautious. Validate and sanitize all inputs, use the principle of the least privilege, and avoid passing sensitive data as command-line arguments.

### General Tips

1. **Keep PRs Focused**: Each PR should address a single feature or bug fix.
2. **Write Self-Documenting Code**: Use meaningful variable and function names.
3. **Commit Often**: Make small, frequent commits with clear messages.

By following these best practices, you'll contribute to keeping Vanguard's codebase clean, efficient, and secure.