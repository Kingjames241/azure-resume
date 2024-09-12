window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount(); // Call the function properly
});

const functionApi = ''; // Add your API endpoint here

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
        .then(response => {
            return response.json(); // json is a function, so parentheses are needed
        })
        .then(data => {
            console.log("Website called function API.");
            count = data.count; // Use 'data' as the response from the API
            document.getElementById("counter").innerText = count;
        })
        .catch(function(error) {
            console.log(error); // Handle errors properly
        });
    
    return count; // Return count, though this will likely return before the fetch completes
}
