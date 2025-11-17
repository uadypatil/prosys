import axios from "axios";
import api_url from "../config/APIConfig";

// 🧠 Create a reusable axios instance
export const api = axios.create({
    baseURL: api_url,
    timeout: 10000, // 10s timeout to prevent hanging requests
});

// 🧩 Common API handler — handles responses without blocking UI
export const handleResponse = async (requestPromise) => {
    try {
        const response = await requestPromise;

        // Return clean standardized response
        return {
            success: true,
            status: response.status,
            data: response.data,
            message: response.message,
        };
    } catch (error) {
        // Handle all types of errors (network / validation / server)
        const errMsg =
            error.response?.data?.message ||
            error.message ||
            "An unknown error occurred while communicating with the API";

        return {
            success: false,
            status: error.response?.status || 500,
            error: errMsg,
        };
    }
};

// 🚀 Non-blocking request execution helper
// It doesn’t block main thread — runs in the background
export const executeRequest = (fn) => {
    return new Promise((resolve) => {
        setTimeout(async () => {
            const res = await fn();
            resolve(res);
        }, 0); // Execute asynchronously
    });
};

/**
 * 🔹 GET Request
 * @param {string} endpoint
 * @param {object} [params={}]
 */
export const getData = async (endpoint, params = {}) => {
    if (!endpoint) throw new Error("GET: Endpoint is required");
    return handleResponse(api.get(endpoint, { params }));
};


/**
 * 🔹 POST Request
 * @param {string} endpoint
 * @param {object} [payload={}]
 */
export const postData = async (endpoint, payload = {}) => {
    if (!endpoint) throw new Error("POST: Endpoint is required");
    return executeRequest(() => handleResponse(api.post(endpoint, payload)));
};

/**
 * 🔹 PUT Request
 * @param {string} endpoint
 * @param {object} [payload={}]
 */
export const putData = async (endpoint, payload = {}) => {
    if (!endpoint) throw new Error("PUT: Endpoint is required");
    return executeRequest(() => handleResponse(api.put(endpoint, payload)));
};

/**
 * 🔹 DELETE Request
 * @param {string} endpoint
 * @param {object} [payload={}]
 */
export const deleteData = async (endpoint, payload = {}) => {
    if (!endpoint) throw new Error("DELETE: Endpoint is required");
    return executeRequest(() => handleResponse(api.delete(endpoint, { data: payload })));
};