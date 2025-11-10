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
import {authenticateJWT} from "../middleware/authMiddleware";

const router = Router();

router.get('/', fetchService);

router.get('/allservices', fetchAllServices);
router.post('/createservice', authenticateJWT, createServiceForUsers);
router.delete('/deleteservice/:serviceId', authenticateJWT, deleteServiceForUsers);
router.post('/:userId', authenticateJWT, addService);
router.delete('/:userId', authenticateJWT, deleteService);
router.get('/checkout/:userId', authenticateJWT, Checkout);

export default router;