import{_ as s,c as a,o as i,a4 as e,a5 as t}from"./chunks/framework.DFYgEw_e.js";const m=JSON.parse('{"title":"Vanguard Developer Handbook","description":"","frontmatter":{},"headers":[],"relativePath":"development-handbook.md","filePath":"development-handbook.md"}'),n={name:"development-handbook.md"},l=e(`<h1 id="vanguard-developer-handbook" tabindex="-1">Vanguard Developer Handbook <a class="header-anchor" href="#vanguard-developer-handbook" aria-label="Permalink to &quot;Vanguard Developer Handbook&quot;">​</a></h1><h2 id="_1-introduction" tabindex="-1">1. Introduction <a class="header-anchor" href="#_1-introduction" aria-label="Permalink to &quot;1. Introduction&quot;">​</a></h2><p>Welcome to the Vanguard Development Guide! We&#39;re happy that you&#39;re interested in contributing to Vanguard.</p><p>This guide will help you:</p><ol><li>Set up your development environment</li><li>Understand our contribution process</li><li>Start contributing to Vanguard effectively</li></ol><p>We aim to make your onboarding process smooth and productive. Let&#39;s get started!</p><h3 id="what-is-vanguard" tabindex="-1">What is Vanguard? <a class="header-anchor" href="#what-is-vanguard" aria-label="Permalink to &quot;What is Vanguard?&quot;">​</a></h3><p>Vanguard is an open-source backup solution for servers and applications. Built with Laravel, it&#39;s designed by the community for the community to simplify data protection.</p><p>In the following sections, we&#39;ll guide you through setting up your development environment, understanding our workflow, and making your first contribution. Let&#39;s get started!</p><h2 id="_2-getting-started" tabindex="-1">2. Getting Started <a class="header-anchor" href="#_2-getting-started" aria-label="Permalink to &quot;2. Getting Started&quot;">​</a></h2><p>This section will guide you through setting up your development environment for Vanguard.</p><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><p>Before you begin, ensure you have the following installed on your system:</p><ul><li>PHP 8.2 or higher</li><li>Composer</li><li>Node.js (v14 or higher) and npm</li><li>Git</li></ul><h3 id="development-environments" tabindex="-1">Development Environments <a class="header-anchor" href="#development-environments" aria-label="Permalink to &quot;Development Environments&quot;">​</a></h3><p>While you can use any development environment you&#39;re comfortable with, we recommend the following options for a smooth development experience:</p><h4 id="laravel-valet-macos" tabindex="-1">Laravel Valet (macOS) <a class="header-anchor" href="#laravel-valet-macos" aria-label="Permalink to &quot;Laravel Valet (macOS)&quot;">​</a></h4><p><a href="https://laravel.com/docs/valet" target="_blank" rel="noreferrer">Laravel Valet</a> is a lightweight development environment for macOS. It&#39;s easy to set up and uses minimal system resources.</p><p>To install:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel/valet</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">valet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h4 id="laravel-herd-macos" tabindex="-1">Laravel Herd (macOS) <a class="header-anchor" href="#laravel-herd-macos" aria-label="Permalink to &quot;Laravel Herd (macOS)&quot;">​</a></h4><p><a href="https://herd.laravel.com/" target="_blank" rel="noreferrer">Laravel Herd</a> is a native macOS application that provides a complete PHP development environment. It&#39;s user-friendly and requires no configuration.</p><p>To install, download it from the official Laravel Herd website.</p><h4 id="laragon-windows" tabindex="-1">Laragon (Windows) <a class="header-anchor" href="#laragon-windows" aria-label="Permalink to &quot;Laragon (Windows)&quot;">​</a></h4><p><a href="https://laragon.org/" target="_blank" rel="noreferrer">Laragon</a> is an isolated, portable development environment for Windows. It&#39;s easy to use and comes with a variety of tools pre-installed.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Regardless of your chosen environment, ensure it meets Vanguard&#39;s PHP version and extension requirements.</p></div><h3 id="setting-up-your-development-environment" tabindex="-1">Setting Up Your Development Environment <a class="header-anchor" href="#setting-up-your-development-environment" aria-label="Permalink to &quot;Setting Up Your Development Environment&quot;">​</a></h3><ol><li>Fork the Vanguard repository on GitHub.</li><li>Clone your fork locally:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/vanguardbackup/vanguard.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vanguard</span></span></code></pre></div></li><li>Install PHP dependencies:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div></li><li>Install JavaScript dependencies:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div></li><li>Set up your environment:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.example</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key:generate</span></span></code></pre></div></li><li>Configure your <code>.env</code> file with your local database details.</li></ol><h3 id="database-setup" tabindex="-1">Database Setup <a class="header-anchor" href="#database-setup" aria-label="Permalink to &quot;Database Setup&quot;">​</a></h3><p>Set up your database and seed it with test data:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate:fresh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --seed</span></span></code></pre></div><h3 id="running-the-application" tabindex="-1">Running the Application <a class="header-anchor" href="#running-the-application" aria-label="Permalink to &quot;Running the Application&quot;">​</a></h3><ol><li>Start the development server (skip if using Valet/Herd):<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span></span></code></pre></div></li><li>In a separate terminal, compile assets:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div></li></ol><p>You should now be able to access the Vanguard application at <code>http://localhost:8000</code>.</p><p>Congratulations! You&#39;ve successfully set up your Vanguard development environment. In the next section, we&#39;ll cover the development workflow and how to make your first contribution.</p><h2 id="_3-development-workflow" tabindex="-1">3. Development Workflow <a class="header-anchor" href="#_3-development-workflow" aria-label="Permalink to &quot;3. Development Workflow&quot;">​</a></h2><ol><li>Create a new branch for your feature or bug fix:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/your-feature-name</span></span></code></pre></div></li><li>Make your changes, following our coding standards (PSR-12).</li><li>Run tests and ensure they pass:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div></li><li>Commit your changes with a clear, descriptive commit message.</li><li>Push your branch to your fork:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/your-feature-name</span></span></code></pre></div></li><li>Submit a Pull Request (PR) to the main Vanguard repository.</li></ol><h2 id="_4-code-quality-and-standards" tabindex="-1">4. Code Quality and Standards <a class="header-anchor" href="#_4-code-quality-and-standards" aria-label="Permalink to &quot;4. Code Quality and Standards&quot;">​</a></h2><p>Vanguard employs several tools to maintain high code quality:</p><h3 id="quality-assurance-tools" tabindex="-1">Quality Assurance Tools <a class="header-anchor" href="#quality-assurance-tools" aria-label="Permalink to &quot;Quality Assurance Tools&quot;">​</a></h3><ol><li><p><strong>Duster</strong>: Automated code formatter combining TLint, PHP_CodeSniffer, PhpCsFixer, and Laravel Pint to enforce consistent coding style.</p></li><li><p><strong>PHPStan</strong>: Static analysis tool to detect potential errors and improve code quality.</p></li><li><p><strong>Rector</strong>: Performs instant upgrades and automated refactoring of PHP code.</p></li><li><p><strong>Husky</strong>: Executes pre-commit hooks for linting and testing, ensuring only quality code is committed.</p></li><li><p><strong>GitHub Actions</strong>: Automates CI/CD processes, running tests and checks on PR submissions.</p></li></ol><h3 id="automated-pre-commit-checks" tabindex="-1">Automated Pre-commit Checks <a class="header-anchor" href="#automated-pre-commit-checks" aria-label="Permalink to &quot;Automated Pre-commit Checks&quot;">​</a></h3><p>Husky runs these checks before each commit:</p><ul><li>PHPStan (Static analysis)</li><li>Pest (PHP testing framework)</li><li>Dusk (Browser testing)</li><li>Rector (Code refactoring)</li><li>Duster (Code formatting)</li><li>Front-end asset build</li></ul><h3 id="manual-quality-checks" tabindex="-1">Manual Quality Checks <a class="header-anchor" href="#manual-quality-checks" aria-label="Permalink to &quot;Manual Quality Checks&quot;">​</a></h3><p>Developers can run these checks locally:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Static analysis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/phpstan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> analyse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Pest test suite</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/pest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --parallel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Dusk test suite</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dusk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dirty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Check for potential refactorings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/rector</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> process</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dry-run</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Fix coding style issues</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./vendor/bin/duster</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Npm asset building</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Running these checks locally helps catch and fix issues before they&#39;re flagged by the pre-commit script or CI system, streamlining the development process.</p></div><h2 id="_5-testing" tabindex="-1">5. Testing <a class="header-anchor" href="#_5-testing" aria-label="Permalink to &quot;5. Testing&quot;">​</a></h2><p>Thorough testing is a critical part of the development process in Vanguard. We use multiple testing frameworks to ensure comprehensive coverage:</p><h3 id="pest" tabindex="-1">Pest <a class="header-anchor" href="#pest" aria-label="Permalink to &quot;Pest&quot;">​</a></h3><p>Vanguard primarily uses <a href="https://pestphp.com/" target="_blank" rel="noreferrer">Pest</a> for unit and feature testing.</p><ul><li>Write tests for all new features and bug fixes.</li><li>Ensure all tests pass before submitting a PR:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div></li></ul><h3 id="laravel-dusk" tabindex="-1">Laravel Dusk <a class="header-anchor" href="#laravel-dusk" aria-label="Permalink to &quot;Laravel Dusk&quot;">​</a></h3><p>For browser testing, we use <a href="https://laravel.com/docs/dusk" target="_blank" rel="noreferrer">Laravel Dusk</a>. This allows us to test JavaScript-dependent functionality and user interactions.</p><ul><li>Write Dusk tests for features that involve complex front-end interactions.</li><li>Run Dusk tests separately:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dusk</span></span></code></pre></div></li></ul><h3 id="importance-of-testing" tabindex="-1">Importance of Testing <a class="header-anchor" href="#importance-of-testing" aria-label="Permalink to &quot;Importance of Testing&quot;">​</a></h3><p>Testing is integral to Vanguard&#39;s development process:</p><ol><li><strong>Quality Assurance</strong>: Catches bugs early and prevents regressions.</li><li><strong>Living Documentation</strong>: Tests demonstrate expected behavior of project components.</li><li><strong>Refactoring Confidence</strong>: Enables easier refactoring and optimization.</li><li><strong>CI/CD</strong>: Our CI pipeline runs all tests before merging.</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Aim for high test coverage, but focus on testing critical paths and edge cases rather than aiming for an arbitrary coverage percentage.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Never submit a PR without adding appropriate tests and ensuring all existing tests pass.</p></div><p>Remember, a well-tested codebase is a stable and maintainable codebase. Your tests are as important as your feature code!</p><h2 id="_6-internationalization-i18n" tabindex="-1">6. Internationalization (i18n) <a class="header-anchor" href="#_6-internationalization-i18n" aria-label="Permalink to &quot;6. Internationalization (i18n)&quot;">​</a></h2><p>Vanguard supports multiple languages. Follow these guidelines for language strings:</p><ol><li><p>Use English strings directly in your code:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span></code></pre></div><p>or</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li><li><p>For languages other than English, add translations to <code>lang/[lang_code].json</code> files. For example, in <code>lang/es.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Hello world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;¡Hola mundo!&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>When adding a new language, create a new JSON file (e.g., <code>fr.json</code> for French) and update the <code>available_languages</code> array in <code>config/app.php</code>.</p></li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Never hardcode non-English strings directly in your code. Always use the <code>__()</code> or <code>@lang()</code> functions with English strings, and provide translations in the JSON files.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Remember to keep your English strings consistent across the codebase. This makes it easier to manage translations and ensures a coherent user experience.</p></div><h2 id="_7-commit-guidelines" tabindex="-1">7. Commit Guidelines <a class="header-anchor" href="#_7-commit-guidelines" aria-label="Permalink to &quot;7. Commit Guidelines&quot;">​</a></h2><p>We use structured commit messages for a clear, traceable history. Each commit should:</p><ol><li>Start with a type prefix (e.g., <code>fix:</code>, <code>feat:</code>, <code>refactor:</code>)</li><li>Be no longer than 50 characters</li><li>End with a period</li><li>Clearly describe the change</li></ol><p>Examples of valid commit messages:</p><ul><li><code>feat: Add user authentication feature.</code></li><li><code>fix: Resolve database connection timeout issue.</code></li><li><code>refactor: Optimize backup process for better performance.</code></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Husky is configured to run a pre-commit hook that checks your commit messages against these guidelines. It ensures that each commit message:</p><ul><li>Begins with an approved type prefix</li><li>Is under 50 characters</li><li>Ends with a period</li><li>Follows our formatting rules</li></ul><p>The script attempts to auto-fix non-compliant commits, but manual edits may be needed.</p></div><p>This approach aids in changelog generation, change tracking, and maintaining a clean history.</p><p>This script runs automatically before each local commit. To ensure it functions properly, verify that Husky hooks are activated in your development environment.</p><p><img src="`+t+`" alt="A screenshot of the pre-commit script"></p><h2 id="_8-documentation" tabindex="-1">8. Documentation <a class="header-anchor" href="#_8-documentation" aria-label="Permalink to &quot;8. Documentation&quot;">​</a></h2><p>Maintaining up-to-date and comprehensive documentation is important. This section outlines our documentation practices and guidelines.</p><h3 id="updating-documentation" tabindex="-1">Updating Documentation <a class="header-anchor" href="#updating-documentation" aria-label="Permalink to &quot;Updating Documentation&quot;">​</a></h3><ol><li><p><strong>When to Update</strong>: Update documentation whenever you add, modify, or remove features.</p></li><li><p><strong>Where to Update</strong>:</p><ul><li>In-code documentation: Update docblocks and comments in the codebase.</li><li>The documentation site (this website!) at the GitHub repository <a href="https://github.com/vanguardbackup/docs/" target="_blank" rel="noreferrer">here</a>.</li></ul></li><li><p><strong>Documentation PRs</strong>: Submit Pull Requests to <a href="https://github.com/vanguardbackup/docs/" target="_blank" rel="noreferrer">this repository</a> when necessary. The repositories are separate.</p></li></ol><h3 id="documentation-best-practices" tabindex="-1">Documentation Best Practices <a class="header-anchor" href="#documentation-best-practices" aria-label="Permalink to &quot;Documentation Best Practices&quot;">​</a></h3><ol><li><strong>Clear and Concise</strong>: Write in simple, easy-to-understand language.</li><li><strong>Keep it Current</strong>: Regularly review and update existing documentation.</li><li><strong>Accessibility</strong>: Ensure documentation is accessible, including proper heading structure and alt text for images.</li></ol><h2 id="_9-tips-tricks" tabindex="-1">9. Tips &amp; Tricks <a class="header-anchor" href="#_9-tips-tricks" aria-label="Permalink to &quot;9. Tips &amp; Tricks&quot;">​</a></h2><p>Adhering to best practices ensures that Vanguard remains maintainable, efficient, and secure. Here are key best practices to follow:</p><h3 id="code-organization" tabindex="-1">Code Organization <a class="header-anchor" href="#code-organization" aria-label="Permalink to &quot;Code Organization&quot;">​</a></h3><ol><li><strong>SOLID Principles</strong>: Follow SOLID principles in your object-oriented design.</li><li><strong>DRY (Don&#39;t Repeat Yourself)</strong>: Avoid code duplication; extract reusable code into functions or classes.</li><li><strong>Single Responsibility</strong>: Each class or function should have a single, well-defined purpose.</li></ol><h3 id="performance-considerations" tabindex="-1">Performance Considerations <a class="header-anchor" href="#performance-considerations" aria-label="Permalink to &quot;Performance Considerations&quot;">​</a></h3><ol><li><strong>Database Optimization</strong>: <ul><li>Use eager loading to prevent N+1 query problems.</li><li>Index frequently queried columns.</li></ul></li><li><strong>Caching</strong>: Implement caching for expensive operations or frequently accessed data.</li><li><strong>Asynchronous Processing</strong>: Use Laravel&#39;s <a href="https://laravel.com/docs/11.x/queues" target="_blank" rel="noreferrer">queue system</a> for time-consuming tasks.</li></ol><h3 id="security-best-practices" tabindex="-1">Security Best Practices <a class="header-anchor" href="#security-best-practices" aria-label="Permalink to &quot;Security Best Practices&quot;">​</a></h3><ol><li><strong>Input Validation</strong>: Always validate and sanitize user input.</li><li><strong>Authentication and Authorization</strong>: Use Laravel&#39;s built-in authentication system and Gates/Policies for authorization.</li><li><strong>Avoid Raw SQL</strong>: Use Eloquent throughout the project unless you need to perform a complex query that cannot be done with Eloquent in a clean manner.</li><li><strong>Encrypt Sensitive Data</strong>: Always encrypt sensitive information like passwords and API keys before storing in the database. Use <a href="https://laravel.com/docs/11.x/encryption" target="_blank" rel="noreferrer">Laravel&#39;s built-in encryption features</a>.</li><li><strong>Remote Commands</strong>: When writing commands that will run on remote servers with phpseclib, be extremely cautious. Validate and sanitize all inputs, use the principle of the least privilege, and avoid passing sensitive data as command-line arguments.</li></ol><h3 id="general-tips" tabindex="-1">General Tips <a class="header-anchor" href="#general-tips" aria-label="Permalink to &quot;General Tips&quot;">​</a></h3><ol><li><strong>Keep PRs Focused</strong>: Each PR should address a single feature or bug fix.</li><li><strong>Write Self-Documenting Code</strong>: Use meaningful variable and function names.</li><li><strong>Commit Often</strong>: Make small, frequent commits with clear messages.</li></ol><p>By following these best practices, you&#39;ll contribute to keeping Vanguard&#39;s codebase clean, efficient, and secure.</p><h2 id="_10-examples" tabindex="-1">10. Examples <a class="header-anchor" href="#_10-examples" aria-label="Permalink to &quot;10. Examples&quot;">​</a></h2><p>Here is an example of how you would contact a remote server and run a command on it. The GitHub Repository is always the best place for up-to-date, real examples of the code used in Vanguard.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> App\\Facades\\ServerConnection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> App\\Models\\RemoteServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> App\\Support\\ServerConnection\\Exceptions\\ConnectionException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExampleClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RemoteServer</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> $remoteServer The remote server model.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@throws</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ConnectionException</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> interactWithServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RemoteServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $remoteServer)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $serverConnection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ServerConnection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">connectFromModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($remoteServer)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">establish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $commandOutput </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $serverConnection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;whoami&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Send the command output to Laravel&#39;s native logger etc.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        Log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($commandOutput);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,96),o=[l];function r(p,h,d,c,k,u){return i(),a("div",null,o)}const y=s(n,[["render",r]]);export{m as __pageData,y as default};
