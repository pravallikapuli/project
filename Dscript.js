// Define a global object to store URL mappings
var urlMappings = {};

// Function to generate a shortened URL
function shortenUrl() {
    var longUrl = document.getElementById('longUrl').value;
    // Generate a random string as the shortened URL (for demonstration purposes)
    var shortUrl = generateRandomString();
    // Store the mapping in the URL mappings object
    urlMappings[shortUrl] = longUrl;
    alert('Shortened URL: ' + shortUrl);
}

// Function to decode the shortened URL and display the original URL
function decodeUrl() {
    var shortUrl = prompt('Enter the shortened URL:');
    // Check if the shortened URL exists in the mappings
    if (urlMappings.hasOwnProperty(shortUrl)) {
        var originalUrl = urlMappings[shortUrl];
        // Ask the user if they want to redirect to the original URL
        var redirect = confirm('The original URL is: ' + originalUrl + '\n\nDo you want to redirect to this URL?');
        if (redirect) {
            // Redirect to the original long URL
            window.location.href = originalUrl;
        }
    } else {
        alert('Shortened URL not found!');
    }
}

// Helper function to generate a random string (for demonstration purposes)
function generateRandomString() {
    var randomString = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = 6; // Length of the shortened URL
    for (var i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return 'http://short.url/' + randomString; // Example shortened URL format
}
