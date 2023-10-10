# Playwright TypeScript Demo Framework

## Overview
This is a sample project that utilizes playwright build in runner with page object model/fixtures as a base design. For the demo purpose test cases are created on  site : http://www.demoBlaze.com/

## Table of Contents

- [Features]
- [Getting Started]
  - [Pre-requisites]
  - [Execution in local]


## Features
- Test data usage of .ts file for data driven.
- Playwright storage usage of global setup for one time login

## Getting Started

### Prerequisites
- Nodejs: Download and install nodejs from [here](https://nodejs.org/en/download)
- Visual Studio Code: Download and install VS Code from [here](https://code.visualstudio.com/)

### Execution in local
1. Clone the repository:
git clone git@github.com:Saicharan245/Playwright1.git

2.  Navigate to root project directory and install the following:

    * Install npm packages using

    npm install

    * If this is your first time with nodejs playwright framework you will need to download the required browsers:
    
    npx playwright install

 3. In root project directory to execute below command to run all UI tests

    npx playwright test

    Optional: If you would like to execute tests using IDE and playwright runner. Open VS code and download the extension: Playwright Test for VS Code. You can also enable the NPM SCRIPTS in the the VS Code explorer and can run them like that

