import express, {Request, Response } from 'express';
import { widgetServices } from '../services/widget.service'
import { createErrorResponse } from '../unitilies/errorResponse'

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const widgetId = Number(req.query.id);
        const widget = await widgetServices.fetchWidget(widgetId);
        res.status(200).json(widget);
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const inserted = await widgetServices.addWidget(req.body);
        res.status(200).json(inserted);
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
});

router.put("/", async (req: Request, res: Response) => {
    try {
        const updated = await widgetServices.updateWidget(req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
});

router.delete("/", async (req: Request, res: Response) => {
    try {
        const widgetId = Number(req.query.id);
        await widgetServices.deleteWidget(widgetId);
    } catch (error) {
        res.status(500).json(createErrorResponse(error));
    }
});

export const widgetRoutes = router;