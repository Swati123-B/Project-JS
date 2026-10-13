let envirment = "production";
let result = (envirment == "production") ? "Production server" : "Development server";
console.log(result);

let envirment1 = "Staging";
let baseUrl = (envirment1 == "production") ? "https://api.production.com" : "https://api.staging.com";
console.log(baseUrl);