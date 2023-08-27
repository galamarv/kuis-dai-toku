const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve images directly from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define routes
app.get('/getRandomImage/:folderName', (req, res) => {
    const folderName = req.params.folderName;
    const imageFolder = path.join(__dirname, 'images', folderName);

    fs.readdir(imageFolder, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading folder');
        }

        const randomIndex = Math.floor(Math.random() * files.length);
        const randomImage = files[randomIndex];

        res.json({ imagePath: `/images/${folderName}/${randomImage}` });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
