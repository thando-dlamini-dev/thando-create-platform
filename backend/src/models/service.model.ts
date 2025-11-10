import { query } from '../db.config'
import { RowDataPacket } from "mysql2/promise";

interface Service {
    id: string;
    name: string;
    description: string;
    price: number
}

export interface ServiceData {
    serviceName: string;
    description: string;
    imageUrl: string;
    price: number
}

interface SelectedOptions {
    service: Service;
    serviceType: string;
    selectedFeatures: string[];
    estimatedPrice: number;
    status:string;
    customerNotes: string;
    adminNotes: string;
    colorPalette: string[];
    discountCode: string;
    finalPrice: number;
}

// interface cartServices {
//     id: number;
//     userId: string;
//     selectedOptions: SelectedOptions;
// }

//Checks if a service already exists
export const serviceExists = async (service: number | string, known: boolean): Promise<RowDataPacket> => {
    //If the service ID is known then the ID will be used to query else the service name will be used
    const sql = known ? `SELECT * FROM database_services WHERE id = ?` : `SELECT * FROM database_services WHERE service_name = ?`;
    console.log('Logging sql: ', sql);
    const result = await query(sql, [service]) as RowDataPacket;

    return result[0];
}

//Fetches service a user selects to purchase
export const FetchService = async (searchValue: number | string) => {
    const isNumber = typeof searchValue === 'number';
    const sql = isNumber ? `SELECT * FROM database_services WHERE id = ?` : `SELECT * FROM database_services WHERE service_name = ?`;

    const params = [
        searchValue
    ]
    const service = await query(sql, params) as RowDataPacket[];

    if(service.length === 0){
        console.log(`Error while fetching service with id ${searchValue}`);
        throw new Error('Error while fetching service with id ' + searchValue);
    }

    return service[0];
}

//Adds new service to user account
export const AddService = async (userId: string, selectedOptions: SelectedOptions): Promise<RowDataPacket[]> => {

    const sql = `INSERT INTO user_services (
        user_id,
        service_type,
        selected_features,
        estimated_price,
        status,
        customer_notes,
        admin_notes,
        color_palette,
        discount_code,
        final_price,
    ) VALUES (?, ?, ?, ?, ?, ?)`

    const params = [
        userId,
        selectedOptions.serviceType,
        JSON.stringify(selectedOptions.selectedFeatures),
        selectedOptions.estimatedPrice,
        selectedOptions.status,
        selectedOptions.customerNotes,
        selectedOptions.adminNotes,
        selectedOptions.colorPalette,
        selectedOptions.discountCode,
        selectedOptions.finalPrice,
    ]

    return await query(sql, params) as RowDataPacket[]
}

export const RemoveService = async (serviceId: string): Promise<object> => {
    const sql = `DELETE * FROM user_services WHERE id = ?`

    const params = [serviceId]

    try {
        await query(sql, params);
    }
    catch (error) {
        console.log(`Error while deleting service with id ${serviceId}: ${error}`);
        throw new Error(`Error while deleting service`);
    }

    return {
        success: true,
        message: 'Service removed successfully.',
    }
}

//Fetches user services
export const FetchUserServices = async (userId: string) => {
    const sql = `SELECT * FROM user_services where user_id = ?`
    try {
        return await query(sql, [userId]) as RowDataPacket[];
    }
    catch (error) {
        console.log(`Error while getting service with userId ${userId}: ${error}`);
        throw error;
    }
}

//Displays all services that users will choose from
export const DisplayAllServices = async (): Promise<RowDataPacket> => {
    const sql = `SELECT * FROM database_services`

    try {
        const result = await query(sql, []) as RowDataPacket;

        console.log("Query Result", result);

        return result[0];
    }
    catch (error) {
        console.log(`Error while fetching database services: ${error}`);
        throw error;
    }
}


//Allows the admin to create new a service that users will choose from
export const CreateServiceForUsers = async (serviceData: ServiceData): Promise<RowDataPacket> => {
    try {
        console.log('Service Data Recieved: ', serviceData)

        const sql = `INSERT INTO database_services (
            service_name,
            description,
            img_url,
            price
        ) VALUES (
                ?,
                ?,
                ?,
                ?
        )`

        const params = [
            serviceData.serviceName,
            serviceData.description,
            serviceData.imageUrl,
            serviceData.price
        ]

        const result = await query(sql, params) as RowDataPacket;

        if (result[0].length === 0) {
            throw new Error('Service not created');
        }

       return result

    }
    catch (error) {
        throw error;
    }
}

//Deletes a service
//Passed testing
export const DeleteServiceForUsers = async (serviceId: number) => {
    try {
        const sql = `DELETE FROM database_services WHERE id = ?`
        console.log('Logging sql: ', sql)
        const params = [serviceId]

        await query(sql, params);

        return {
            message: 'Service deleted successfully.'
        }
    }
    catch (error) {
        throw error;
    }
}