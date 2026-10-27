const fs = require("node:fs");
const path = require("node:path");

const projectDirectory = __dirname;
const sourceDirectory = path.join(projectDirectory, "src");
const outputDirectory = path.join(projectDirectory, "dist");

fs.rmSync(outputDirectory, {
    recursive: true,
    force: true
});

fs.mkdirSync(outputDirectory, {
    recursive: true
});

const applicationFiles = [
    "calculator.js",
    "index.js"
];

for (const fileName of applicationFiles) {
    fs.copyFileSync(
        path.join(sourceDirectory, fileName),
        path.join(outputDirectory, fileName)
    );
}

fs.copyFileSync(
    path.join(projectDirectory, "README.md"),
    path.join(outputDirectory, "README.md")
);

console.log("Build completed successfully.");
console.log("Application files are available in dist/.");