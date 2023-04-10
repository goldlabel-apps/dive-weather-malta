import {SizeShape, PositionShape} from "../types";
// topleft, topmiddle, topright, centered, bottomleft, bottommiddle, bottomright
import { gsap } from "gsap";
import { 
    getElement,
    getFlashSize,
} from "../";
export const setPosition = (flashId: any, movieclip: any) => {
    try {
        const fl = getElement(flashId);
        if (!fl) {
            // console.warn('setPosition: flashId', flashId);
            return false;
        };
        const {
            mcId, 
            mcWidth, 
            mcHeight, 
            defaultPosition, 
            opacity,
        } = movieclip;
        const position = defaultPosition;
        const el = getElement(mcId);
        if (!el) {
            console.warn('setPosition: mcId ', mcId);
            return false;
        };
        const flashSize: any = getFlashSize(flashId);

        // console.log("flashSize", flashSize);

        const stageW = flashSize.w;
        const stageH = flashSize.h;
        const elW = mcWidth;
        const elH = mcHeight;
        let o = opacity;
        if (!o) o = 1;
        
        let pos: PositionShape = {
            x: 0,
            y: 0,
        };
        if (position === "topleft"){
            pos = { x: 0, y: 0};
        };
        if (position === "topmiddle"){
            pos = { 
                x: stageW / 2 - elW / 2,
                y: 0,
            };
        };
        if (position === "topright"){
            pos = { 
                x: stageW - elW,
                y: 0,
            };
        };
        if (position === "centered"){
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH / 2 - elH / 2,
            };
        };
        if (position === "bottomleft"){
            pos = {
                x: 0,
                y: stageH - elH,
            };
        };
        if (position === "bottommiddle"){
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH - elH,
            };
        };
        if (position === "bottomright"){
            pos = {
                x: stageW - elW,
                y: stageH - elH,
            };
        };

        gsap.set(`#${mcId}`, {
            opacity: o,
            x: pos.x,
            y: pos.y,
        });

    
    } catch (error) {
        return false;
    }
}
