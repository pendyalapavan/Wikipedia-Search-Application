Wikipedia Search Application   check here:  https://pavanstodosapp.netlify.app
This project is a simple web application that allows users to search for articles on Wikipedia. The application fetches search results from a Wikipedia search API and displays them on the page.

Features
Input field to enter search queries.
Displays search results including titles, links, and descriptions.
Shows a loading spinner while fetching data.
Results open in a new tab when clicked.
Technologies Used
HTML
CSS
JavaScript
How It Works
The user types a search query into the input field and presses the "Enter" key.
A loading spinner is displayed while the application fetches data from the Wikipedia search API.
The search results are displayed on the page, each with a title, link, and description.
Code Overview
HTML Elements 
searchInputEl: Input field where the user types the search query.
searchResultsEl: Container where search results are displayed.
spinnerEl: Loading spinner element that is shown while data is being fetched.
Functions
createAndappendSearchResult(result)
This function creates and appends a search result element to the searchResultsEl container.

Parameters:

result: An object containing title, link, and description properties.
Steps:

Destructure title, link, and description from the result object.
Create a div element with the class result-item and append it to searchResultsEl.
Create an anchor element for the title, set its text, href, and target attributes, and append it to the div.
Add a line break.
Create an anchor element for the URL, set its text, href, and target attributes, and append it to the div.
Add another line break.
Create a paragraph element for the description, set its text, and append it to the div.
displayResults(search_results)
This function handles displaying the search results by calling createAndappendSearchResult for each result.

Parameters:

search_results: An array of result objects.
Steps:

Toggle the visibility of the loading spinner.
Loop through each result in the search_results array and call createAndappendSearchResult.
searchWikipedia(event)
This function handles the search operation when the user presses the "Enter" key.

Parameters:

event: The keydown event object.
Steps:

Check if the pressed key is "Enter".
Toggle the visibility of the loading spinner.
Clear the previous search results.
Get the search query from the input field.
Construct the API URL with the search query.
Fetch data from the API.
Parse the JSON response.
Call displayResults with the search results.
Event Listeners
Add a keydown event listener to the searchInputEl input field to call searchWikipedia when the "Enter" key is pressed.
Installation and Usage
Clone the repository:
sh
Copy code
git clone https://github.com/your-username/wiki-search-app.git
Navigate to the project directory:
sh
Copy code
cd wiki-search-app
Open the index.html file in your web browser.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
