#!/usr/bin/env node

const { execSync } = require('child_process');

// Retrieve the project name from command line arguments
const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
    console.error("Error: You must specify a project name.");
    process.exit(1);
}

// Initialize the React Native project
console.log(`Starting the creation of the React Native project: ${projectName}`);
execSync(`npx create-expo-app ${projectName}`, { stdio: 'inherit' });

// Navigate into the newly created project directory
process.chdir(projectName);

// Execute the reset command
console.log(`Executing reset on the project: ${projectName}`);
execSync('npm run reset-project', { stdio: 'inherit' });

console.log('Your project has been successfully created and reset!');
