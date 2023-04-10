# Contributing to SPICE

First of all, thank you for your interest in contributing to this project! Your help is greatly appreciated. This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
4. [Pull Request Guidelines](#pull-request-guidelines)
5. [Code Style](#code-style)

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## Getting Started

To start contributing to the project, you'll need to set up your local development environment:

1. Fork the repository on GitHub.
2. Clone your fork to your local machine.
3. Navigate to the project directory and run `npm install` to install dependencies.
4. Start the development server with `npm start`.

You should now be able to see the project running at `http://localhost:3000`.

## How to Contribute

1. Pick an issue to work on or create a new issue if you've identified a bug or want to suggest a new feature.
2. Assign the issue to yourself or leave a comment indicating that you're working on it.
3. Create a new branch for your changes (e.g., `feature/new-feature` or `bugfix/bug-description`).
4. Make your changes and commit them with a clear and descriptive commit message.
5. Push your branch to your forked repository.
6. Create a pull request from your branch to the main repository.

## Pull Request Guidelines

Before submitting your pull request, please ensure that:

1. Your code is well-tested, and all tests are passing.
2. Your code follows the project's code style (see the [Code Style](#code-style) section below).
3. Your commits are well-organized and have descriptive commit messages.
4. Your pull request has a clear and concise title and description, explaining what your changes do and why they're necessary.

## Code Style

To maintain consistency throughout the codebase, please adhere to the following code style guidelines:

1. Use 2 spaces for indentation.
2. Use camelCase for variable and function names.
3. Use PascalCase for component names.
4. Prefer arrow functions over traditional function expressions.
5. Always include semicolons at the end of statements.
6. Use single quotes for strings, except for JSX attributes where double quotes should be used.
7. Use template literals for string interpolation and multi-line strings.
8. Include a space before and after the curly braces `{}` in JSX expressions.
9. Import statements should be organized in the following order: libraries, components, assets, and styles.

Please make sure to lint your code with ESLint and fix any issues before submitting a pull request.

---

Thank you again for your contribution, and we look forward to collaborating with you!
