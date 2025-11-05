import { Request, Response } from 'express';
import {
    AddService, CreateServiceForUsers,
    RemoveService,
    DisplayAllServices,
    FetchService,
    FetchUserServices,
    serviceExists,
    ServiceData, DeleteServiceForUsers
} from "../models/service.model";

//returns a service based on its id
export const fetchService = async (req: Request, res: Response) => {
    const serviceId = parseInt(req.params.serviceId);

    try{
        const service = await FetchService(serviceId);

        return res.status(201).json({
            success: true,
            message: 'Service fetched successfully.',
            service
        });
    }
    catch(err){
        console.log(`Error in fetchService controller: ${err}`);
        return res.status(500).json({
            success: false,
            message: 'Error while fetching service.',
        })
    }
}

//Adds service to user cart
export const addService = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const serviceData = req.body;

    try {
        const service = await AddService(userId, serviceData);

        return res.status(201).json({ success: true, message: 'Service added to your cart', service });
    }
    catch(err){
        console.log(`Error in addService controller: ${err}`);
        return res.status(500).json({
            success: false,
            message: `Error while adding service to cart`,
        })
    }
}

//Removes service from cart
export const deleteService = async (req: Request, res: Response) => {
    const serviceId = req.params.serviceId;
    try {
        const response = await RemoveService(serviceId);

        return res.status(201).json(response)
    }
    catch (err) {
        console.log(`Error in deleteService controller: ${err}`);
        return res.status(500).json({
            success: false,
            message: 'Error while deleting service',
        })
    }
}

//Processes all services selected by user and handles the payment
export const Checkout = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    // let total = 0;

    try {
        const userServices = await FetchUserServices(userId);

        if (userServices.length === 0) {
            console.log(`No services selected`);
            return res.status(400).json({
                success: false,
                message: `No services selected`
            })
        }

        // userServices.forEach((service) => {
          // total += service.
        // })

        return res.status(200).json({
            success: true,
            message: 'Checkout successful.',
            // totalCost: total
        })
    }
    catch (e) {
        console.log(`Error in checkout service controller: ${e}`);
        return res.status(500).json({
            success: false,
            message: 'Error while checking out',
        })
    }
}

//
export const fetchAllServices = async (req: Request, res: Response) => {
    try {
        const displayServices = await DisplayAllServices();
        console.log("Services:", displayServices);

        if(displayServices.length === 0){
            return res.status(400).json({
                success: false,
                message: `No services exist.`
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Services fetched successfully.',
            services: displayServices
        })
    }
    catch (error) {
        console.log(`Error in displayAllServices controller: ${error}`);
        return res.status(500).json({
            success: false,
            message: "Error while displaying all services.",
            services: []
        })
    }
}

export const deleteServiceForUsers = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.serviceId);
        console.log("Service to be deleted: ", id)

        const result = await serviceExists(id, true);
        console.log('Result :', result)
        //return error response if element does not exist/already deleted
        if(result.length === 0) {

            return res.status(400).json({
                success: false,
                message: 'Service does not exist.',
            })
        }
        else{
            const { message } = await DeleteServiceForUsers(id)

            return res.status(200).json({
                success: true,
                message
            })
        }
    }
    catch (error) {
        console.log(`Error in deleteServiceForUsers controller: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Error while deleting service',
        })
    }
}

//Admin can create a new service for users to select from
export const createServiceForUsers = async (req: Request<object, object, { serviceData: ServiceData }>, res: Response) => {
    //TODO Check if user.IsAdmin is true, if not trow error and redirect to home page, only the admin should be able to add a new service

    const { serviceData } = req.body;
    console.log("Service Data: ", serviceData);
    try {
        //TODO Check if the exact same service already exists
        const exists = await serviceExists(serviceData.serviceName, false);
        console.log("Exists: ", exists);

        if(exists.length > 0){
            return res.status(409).json({
                success: false,
                message: "Service with same name already exists!",
            })
        }
        else{
            const result = await CreateServiceForUsers(serviceData);

            console.log("Create service for user Result: ", result);

            const service = await FetchService(serviceData.serviceName)

            const s = service[0]

            return res.status(201).json({
                success: true,
                message: `${s.service_name} Service created successfully.`,
                service: s
            })
        }
    }
    catch (error) {
        console.log(`Error in createServiceForUsers controller: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Error while creating service',
            service: {}
        })
    }
}

