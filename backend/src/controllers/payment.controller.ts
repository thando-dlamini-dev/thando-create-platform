import { Request, Response } from "express";
import { ServiceData } from "../models/service.model"
import axios from '../axios'

interface PaymentData {
    userName: string
    emailAddress: string
    selectedServices: ServiceData[];
    total: number;
}

interface CompletePaymentData {
    merchant_id: number;
    merchant_key: string;
    return_url: string;
    cancel_url: string;
    notify_url: string;
    name_first: string;
    email_address: string;
    amount: number;
    item_name: string;
    item_description: string;
    email_confirmation: boolean;
    confirmation_address: string;
}

export const MakePayment = async (req: Request<object, object, PaymentData>, res: Response) => {
    try{
        const paymentData = req.body;

        const completePaymentData: CompletePaymentData = {
            merchant_id: parseInt(process.env.PF_MERCHANT_ID!),
            merchant_key: process.env.PF_MERCHANT_KEY!,
            return_url: `${process.env.BACKEND_URL!}${process.env.RETURN_URL!}`,
            cancel_url: `${process.env.BACKEND_URL!}${process.env.CANCEL_URL!}`,
            notify_url: `${process.env.BACKEND_URL!}${process.env.NOTIFY_URL!}`,
            name_first: paymentData.userName,
            email_address: paymentData.emailAddress,
            amount: paymentData.total,
            item_name: paymentData.selectedServices.map((service) => service.serviceName).join(', '),
            item_description: paymentData.selectedServices.map((service) => service.description).join(', '),
            email_confirmation: true,
            confirmation_address: paymentData.emailAddress
        }



        //Append each object field to formData
        //Payfast only accepts formData not JSON objects
        const params = new URLSearchParams();
        Object.entries(completePaymentData).forEach(([key, value]) => {
            params.append(key, value.toString());
        })

        const payFastUrl = `https://www.payfast.co.za/eng/process?${params.toString()}`;

        console.log('Redirecting to payFast: ',payFastUrl);

        res.json({
            success: true,
            redirectUrl: payFastUrl,
            message: 'Redirect to payment gateway',
        })
    }
    catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Error while processing payment',
        })
    }
}