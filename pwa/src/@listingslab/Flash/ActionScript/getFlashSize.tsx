import {
    getElement,
} from "../../../@raaf/Flash/";

export const getFlashSize = (flashId: string ) => {
    try {
        const el = getElement(flashId);
        if (!el) {
            console.warn('getFlashSize error: flashId ', flashId);
            return false;
        }
        return {
            id: flashId,
            h: el.offsetHeight,
            w: el.offsetWidth,
        }
    } catch (error) {
        return false
    }
}
