# Vanguard Development Handbook

## 1. Introduction

Welcome to the Vanguard Development Guide! We're thrilled that you're interested in contributing to Vanguard, our open-source backup management solution.

This guide is designed to help you set up your development environment, understand our contribution process, and get you started on your journey to becoming a Vanguard contributor.

### What is Vanguard?

Vanguard is a robust backup management system designed to simplify and streamline the process of managing backups. Our goal is to provide a reliable, user-friendly solution that helps individuals protect their data.

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

While you can use any development environment you're comfortable with, we recommend the following options for a smooth Vanguard development experience:

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

Running these commands helps catch and fix common issues before they are caught by the pre-commit script or by our CI system.
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

Testing is not an afterthought in Vanguard—it's an integral part of our development process:

1. **Quality Assurance**: Tests help catch bugs early and prevent regressions.
2. **Documentation**: Tests serve as executable documentation of how components should behave.
3. **Refactoring Confidence**: A solid test suite allows for easier refactoring and optimization.
4. **CI/CD**: Our continuous integration pipeline runs all tests, ensuring only quality code is merged.

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

If your commit doesn't meet these criteria, the script will attempt to fix the commit automatically, however you may need to modify it yourself if it fails.
:::

This structured approach to commits helps in generating changelogs, understanding the nature of changes, and maintaining a clean project history.

This script runs automatically before each local commit. To ensure it functions properly, verify that Husky hooks are activated in your development environment.

![A screenshot of the pre-commit script](/images/husky-check-example.png)


## 8. Documentation

Maintaining up-to-date and comprehensive documentation is crucial for the success of Vanguard. This section outlines our documentation practices and guidelines.

### Updating Documentation

1. **When to Update**: Update documentation whenever you add, modify, or remove features.

2. **Where to Update**:
   - In-code documentation: Update docblocks and comments in the codebase.
   - User guide: Update the user guide in the `docs` folder.

3. **Documentation PRs**: Submit documentation changes as part of your feature PRs or as separate PRs for larger updates.

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