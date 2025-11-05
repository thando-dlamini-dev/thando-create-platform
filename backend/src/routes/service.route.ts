import { Router } from 'express';
import {
    addService,
    Checkout,
    createServiceForUsers,
    deleteService,
    deleteServiceForUsers,
    fetchAllServices,
    fetchService
} from "../controllers/service.controller";

const router = Router();

router.get('/', fetchService);

router.get('/allservices', fetchAllServices);
router.post('/createservice', createServiceForUsers);
router.delete('/deleteservice/:serviceId', deleteServiceForUsers);
router.post('/:userId', addService);
router.delete('/:userId', deleteService);
router.get('/checkout/:userId', Checkout);

export default router;