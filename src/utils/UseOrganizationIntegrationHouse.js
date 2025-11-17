import { handleResponse, api } from "./IntegrationHouse";


/**
 * 🔑 get departments by organization id
 */
export const getDepartmentsByOrganizationId = async (organizationId) => {
    if (!organizationId) {
        throw new Error("Organization ID is missing");
    }

    const payload = {"organization_id": organizationId};
    const endpoint = "/api/employee/login";

    return handleResponse(api.post(endpoint, payload));
};

export const createOrganization = async (requestBody) => {
    
    const payload = requestBody;
    const endpoint = "/api/organization/create";

    return handleResponse(api.post(endpoint, payload));
}