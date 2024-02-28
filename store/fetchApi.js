const BASE_URL = "http://localhost:5500/mocking_data/data/"

// method get data
// the data that we get is depending on the end point that we will paste in the script.js file
export async function getProduct(endPoint) {
    const res = await fetch(BASE_URL + endPoint + ".json", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await res.json();
    return data;
}
