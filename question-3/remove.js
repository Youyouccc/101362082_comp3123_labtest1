const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(process.cwd(), 'Logs');

// Remove log files and directory
const removeLogFiles = () => {
    if (fs.existsSync(logsDir)) {
        // Read the directory contents
        const files = fs.readdirSync(logsDir);

        // Output the file names to delete
        files.forEach(file => {
            console.log(`delete file... ${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });

        // Remove the Logs directory
        fs.rmdirSync(logsDir);
    } else {
        console.log("Logs directory does not exist.");
    }
};

removeLogFiles();
