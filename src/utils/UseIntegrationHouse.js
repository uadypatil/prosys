import { handleResponse, api } from "./IntegrationHouse";

/**
 * 🔑 Login Super Admin
 */
export const loginSuperAdmin = async (email, password) => {
    if (!email || !password) {
        throw new Error("Super Admin Login: Email and password are required");
    }

    const payload = { email, password };
    const endpoint = "api/superadmin/login";

    return handleResponse(api.post(endpoint, payload));
};

/**
 * 🔑 Login Organization Admin
 */
export const loginOrgAdmin = async (email, password) => {
    if (!email || !password) {
        throw new Error("Organization Admin Login: Email and password are required");
    }

    const payload = { organization_mail: email, password };
    const endpoint = "api/organization/login";

    return handleResponse(api.post(endpoint, payload));
};

/**
 * 🔑 Login Employee
 */
export const loginEmployee = async (organizationId, department, email, password) => {
    if (!organizationId || !department || !email || !password) {
        throw new Error("Employee Login: Organization ID, department, email, and password are required");
    }

    const payload = { organizationId, department, email, password };
    const endpoint = "/auth/employee/login";

    return handleResponse(api.post(endpoint, payload));
};
