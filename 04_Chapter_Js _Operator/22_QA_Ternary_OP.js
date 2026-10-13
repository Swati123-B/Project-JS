let responseTime =850;
let sla = 1000;
let slaStatus = (responseTime <= sla) ? "Within SLA" : "Exceeded SLA";

// template literals $ will be replaced with the variable value
console.log(`Response : ${responseTime}, SLA Status: ${slaStatus}`);

