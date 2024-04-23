/**
 * Your JS code here
 */

/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

  ulElement.appendChild(liElement);
});

// Preloaded Excel data (for demonstration)
let excelData = [
    ['Armature Works', '4.6', 'Food court', '1910 N Ola Ave, Tampa, FL 33602', 'Tampa'],
    ['Buddy Brew Coffee', '4.4', 'Coffee shop', 'Hyde Park, 1605 W Snow Ave, Tampa, FL 33606', 'Tampa'],
    ['Sparkman Wharf', '4.5', 'Plaza', '615 Channelside Dr, Tampa, FL 33602', 'Tampa'],
    ['Felicitous (on 51st)', '4.7', 'Coffee shop', '11706 N 51st St, Tampa, FL 33617', 'Tampa'],
    ['Hyde Park Village', '4.6', 'Shopping mall', '1602 W Swann Ave, Tampa, FL 33606', 'Tampa'],
    ['Achilles Art Cafe (Wilshire)', '4.6', 'Coffee shop', '2869 Wilshire Dr STE 103, Orlando, FL 32835', 'Orlando'],
    ['Qreate Coffee + Studio', '4.8', 'Coffee shop', '1212 Woodward St #1, Orlando, FL 32803', 'Orlando'],
    ['SnowBean', '4.5', 'Cafe', '5310 E Colonial Dr, Orlando, FL 32807', 'Orlando'],
    ['Haan Coffee', '4.8', 'Coffee shop', '1235 E Colonial Dr, Orlando, FL 32803', 'Orlando'],
    ['Intermezzo', '4.6', 'Cocktail bar', '1111 Central Ave, St. Petersburg, FL 33705', 'St. Petersburg'],
    ['Bandit Coffee Co.', '4.5', 'Cafe', '2662 Central Ave, St. Petersburg, FL 33712', 'St. Petersburg'],
    ['Grassroots Kava House', '4.6', 'Coffee shop', '957 Central Ave, St. Petersburg, FL 33705', 'St. Petersburg'],
    ['Restoration Cafe', '4.8', 'Coffee shop', '38 N Fort Harrison Ave, Clearwater, FL 33755', 'Clearwater'],
    ['Downtown Expresso Cafe and Lounge', '4.0', 'Coffee shop', '639 Cleveland St Suite 101, Clearwater, FL 33755', 'Clearwater'],
    ['Another Broken Egg Cafe', '4.5', 'Brunch restaurant', '2554 McMullen Booth Rd, Clearwater, FL 33761', 'Clearwater'],
];

// Function to populate table with embedded data
function populateTableWithEmbeddedData() {
    const tbody = document.querySelector('#locationTable tbody');

    // Clear existing table rows
    tbody.innerHTML = '';

    // Populate table with embedded data
    excelData.forEach((rowData, rowIndex) => {
        const tr = document.createElement('tr');
        rowData.forEach((cellData, index) => {
            const td = document.createElement('td');
            // Check if current cell is the location name cell
            if (index === 0) {
                // Create a span element with location name
                const span = document.createElement('span');
                span.textContent = cellData;
                // Add class to the span for styling
                span.classList.add('location-name');
                // Add click event listener to the span
                span.addEventListener('click', () => {
                    loadImagesForLocation(cellData);
                });
                td.appendChild(span);
            } else if (index === 3 && rowData[0] === 'Armature Works') {
                // Create a link for the address of Armature Works
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/pipExdw4jYER3ugG8';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Buddy Brew Coffee') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/2LfF9znSLVNFXCXS6';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Sparkman Wharf') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/zuQdp7KkCt2QufxG9';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Felicitous (on 51st)') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/rSkjTkx3yfUmf63c7';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Hyde Park Village') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/zRM4yiaGWCjpFuDbA';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Achilles Art Cafe (Wilshire)') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/RNA58gfd6pjVuMa49';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Qreate Coffee + Studio') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/RJVBcfCSJegrcqXaA';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'SnowBean') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/V6ZJ2YqPfgMVWEHS7';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Haan Coffee') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/ksN3crUhKUbvG4VK6';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Intermezzo') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/JvSpQP92wxaPVEmu6';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Bandit Coffee Co.') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/W4wrmmd6RZnUkkaw9';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Grassroots Kava House') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/LNSU1pcL9AW5AzfG8';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Restoration Cafe') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/wHm5gh9MyRRRStyi8';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Downtown Expresso Cafe and Lounge') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/gv6qgug6Hv3uL4APA';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else if (index === 3 && rowData[0] === 'Another Broken Egg Cafe') {
                const link = document.createElement('a');
                link.textContent = cellData;
                link.href = 'https://maps.app.goo.gl/ZKwyDU26NzedA2ui6';
                link.target = '_blank'; // Open in a new tab
                td.appendChild(link);
            } else {
                // For other cells, just set the text content
                td.textContent = cellData;
            }
            tr.appendChild(td);
        });

        // Create buttons for edit and delete actions
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editLocation(rowIndex);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteLocation(rowIndex);
        });

        const actionTd = document.createElement('td');
        actionTd.appendChild(editButton);
        actionTd.appendChild(deleteButton);
        tr.appendChild(actionTd);

        tbody.appendChild(tr);
    });
}

// Call the function to populate table with embedded data
populateTableWithEmbeddedData();

// Function to load image for a specific location
function loadImagesForLocation(locationName) {
    const imageContainer = document.getElementById('imageContainer');
    // Clear existing images
    imageContainer.innerHTML = '';
    // Load image based on the location name
    const image = document.createElement('img');
    // Assuming the image filenames are the same as the location names with lowercase letters and spaces replaced by underscores
    const imageName = locationName.toLowerCase().replace(/\s/g, '_') + '.jpg';
    // Construct the path to the image folder relative to the HTML file
    const imagePath = 'img/' + imageName;
    image.src = imagePath; // Use the generated image filename
    imageContainer.appendChild(image);
}

// Function to delete a location
function deleteLocation(index) {
    // Remove the location from the data array
    excelData.splice(index, 1);
    // Repopulate the table
    populateTableWithEmbeddedData();
}

// Function to edit a location
function editLocation(index) {
    const newData = prompt('Enter new data separated by commas (Location, Rating, Type, Address, City):');
    if (newData) {
        const newValues = newData.split(',');
        if (newValues.length === 5) {
            excelData[index] = newValues;
            populateTableWithEmbeddedData();
        } else {
            alert('Invalid input! Please enter all fields separated by commas.');
        }
    }
}

// Function to add a new location
document.getElementById('addLocationBtn').addEventListener('click', () => {
    const newData = prompt('Enter new data separated by commas (Location, Rating, Type, Address, City):');
    if (newData) {
        const newValues = newData.split(',');
        if (newValues.length === 5) {
            excelData.push(newValues);
            populateTableWithEmbeddedData();
        } else {
            alert('Invalid input! Please enter all fields separated by commas.');
        }
    }
});

/*
// For example, to handle form submission:
document.getElementById('review-form').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from the form
    const rating = document.getElementById('rating').value;
    const location = document.getElementById('location').value;
    const recommend = document.getElementById('recommend').value;
    const review = document.getElementById('review').value;

    // Create a new row and cells for the table
    const table = document.querySelector('.reviews-table tbody');
    const newRow = table.insertRow();
    const ratingCell = newRow.insertCell(0);
    const locationCell = newRow.insertCell(1);
    const recommendCell = newRow.insertCell(2);
    const reviewCell = newRow.insertCell(3);

    // Fill the cells with the form values
    ratingCell.textContent = rating;
    locationCell.textContent = location;
    recommendCell.textContent = recommend;
    reviewCell.textContent = review;

    // Clear the form for the next entry
    document.getElementById('review-form').reset();
});
*/