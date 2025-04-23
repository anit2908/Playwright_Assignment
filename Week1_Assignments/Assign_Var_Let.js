// Declare a global constant named browserVersion and assign the value 'Chrome'
const browserVersion = 'Chrome';

// Define the function getBrowserVersion
function getBrowserVersion() {
    // Check if the global browserVersion is 'Chrome'
    if (browserVersion === 'Chrome') {
        // Declare a local variable named browserVersion within the if block
        let browserVersion = 'Local Chrome Version';
        // Print the local browserVersion
        console.log('Inside block:', browserVersion);
    }
        console.log('Outside block:', browserVersion);
    } 


// Call the function
getBrowserVersion();