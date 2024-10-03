const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(process.cwd(), 'Logs');

// Create log files
const createLogFiles = () => {
    // Create the Logs directory if it doesn't exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log(logsDir);
    }

    // Change the current process to the Logs directory
    process.chdir(logsDir);

    // Create 10 log files
    for (let i = 0; i <= 9; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `This is log file number ${i}.`);
        console.log(logFileName);
    }
};

createLogFiles();
