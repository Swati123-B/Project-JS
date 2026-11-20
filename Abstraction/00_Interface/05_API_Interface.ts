interface APIResponse {
    statusCode: number;
    body?: String;
    header? : object;
    responseTime: number;

    //? means it optional property, it may or may not be present in the object
}
const responseDataGET: APIResponse = {
    statusCode: 200,
    responseTime: 150
};

const responseDataPOST: APIResponse = {
    statusCode: 201,
    body: "Data created successfully",
    header: { "Content-Type": "application/json" },
    responseTime: 250
};