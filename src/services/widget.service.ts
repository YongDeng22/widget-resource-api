import { widgetData } from '../widgetData';
import Widget from '../types/widget';

// intentionally make the following service functions as async to mimick real database operations
const addWidget = async (widget: Widget) => {
    await widgetData.push(widget);
    return widgetData.find(w => w.id === widget.id);
}

const updateWidget = async (widget: Widget) => {
    const index = await widgetData.findIndex( w => w.id === widget.id);
    if (index > -1) {
        widgetData[index] = widget;
        return widgetData.find(w => w.id === widget.id);
    } else {
        throw new Error("The widget does not exist");
    }
}

const fetchWidget = async (widgetId: number) => {
    return await widgetData.find(w => w.id === widgetId);
}

const deleteWidget = async (widgetId: number) => {
    const index = await widgetData.findIndex( w => w.id === widgetId);
    if (index > -1) {
        widgetData.splice(index, 1);
    } else {
        throw new Error("The widget does not exist");
    }
}

export const widgetServices = { addWidget, updateWidget, fetchWidget, deleteWidget };