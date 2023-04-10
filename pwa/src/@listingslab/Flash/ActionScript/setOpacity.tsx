// import {SizeShape, PositionShape} from "../types";
import { gsap } from "gsap";
import { 
    getElement,
} from "../";

export const setOpacity = (mcId: string, opacity: number) => {
    try {
        const el = getElement(mcId);
        if (!el) {
            console.warn('setPosition: mcId ', mcId);
            return false;
        };
        gsap.fromTo(`#${mcId}`,{}, {
            opacity,
        });
    } catch (error) {
        return false;
    }
}
