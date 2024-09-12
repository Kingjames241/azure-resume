/window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount
})

const functionApi = ''; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then (response => {
        return response.json
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }
}).catch(function(error){
    console.log(error);
}):
return count;
}




window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount(); // Call the function here
});

const functionApi = ''; // You need to add the actual API endpoint here

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
        .then(response => {
            return response.json(); // json() is a method, it needs parentheses
        })
        .then(response => {
            console.log("Website called function API.");
            count = response.count || count; // Fallback to default count if response.count is undefined
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });

    return count; // This return should be outside the fetch chain
}
