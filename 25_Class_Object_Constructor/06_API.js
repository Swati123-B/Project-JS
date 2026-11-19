class APIClinet {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get(endpoint) {
        return this.baseUrl + endpoint;
        // Implementation for GET request
    }

    post(endpoint, data) {
        // Implementation for POST request
    }
}
let staging= new APIClinet("https://staging.api.com");
console.log(staging.get("/users")); // Output: https://staging.api.com/users
let production= new APIClinet("https://production.api.com");
console.log(production.get("/users")); // Output: https://production.api.com/users