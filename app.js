
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const APP_NAME = "Cloud Deployment Lab";
const DEVELOPER_NAME = "Jahnavi";
const APP_VERSION = "1.0.0";

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${APP_NAME}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f1f5f9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                }
                .card {
                    background: white;
                    padding: 40px;
                    border-radius: 16px;
                    text-align: center;
                    box-shadow: 0 6px 20px #cbd5e1;
                    max-width: 500px;
                }
                h1 { color: #2563eb; }
                p { color: #475569; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Welcome to My Cloud Application!</h1>
                <p><strong>Application:</strong> ${APP_NAME}</p>
                <p><strong>Developed by:</strong> ${DEVELOPER_NAME}</p>
                <p><strong>Version:</strong> ${APP_VERSION}</p>
                <p>Deployed using Docker and AWS EC2.</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        application: APP_NAME,
        version: APP_VERSION
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`${APP_NAME} is running on port ${PORT}`);
});
