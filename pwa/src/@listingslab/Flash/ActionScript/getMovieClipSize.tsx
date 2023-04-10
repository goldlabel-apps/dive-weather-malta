import {
    getElement,
} from "../../../@raaf/Flash/";

export const getMovieClipSize = (mcId: string ) => {
    try {
        const el = getElement(mcId);
        if (!el) {
            console.warn('getMovieClipSize error: mcId ', mcId);
            return false;
        }
        return {
            mcId,
            height: el.offsetHeight,
            width: el.offsetWidth,
        }
    } catch (error) {
        return false
    }
}
