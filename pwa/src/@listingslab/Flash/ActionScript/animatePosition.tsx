import {MovieClipShape, PositionShape} from "../types";
import { gsap, Power1 } from "gsap";
import {getFlashSize} from "../";

export const animatePosition = (flashId: any, movieclip: MovieClipShape) => {
    try {
        const {mcId, mcWidth, mcHeight, defaultPosition} = movieclip;
        const el = document.getElementById(mcId);
        if (!el) {
            // console.warn("animatePosition", mcId, "missing");
            return false
        };
        const flashSize: any = getFlashSize(flashId);
        const stageW = flashSize.w;
        const stageH = flashSize.h;
        const elW: any = mcWidth;
        const elH: any = mcHeight;

        let pos: PositionShape = {
            x: 0,
            y: 0,
        };
        if (defaultPosition === "topleft"){
            pos = { x: 0, y: 0};
        };
        if (defaultPosition === "topmiddle"){
            pos = { 
                x: stageW / 2 - elW / 2,
                y: 0,
            };
        };
        if (defaultPosition === "topright"){
            pos = { 
                x: stageW - elW,
                y: 0,
            };
        };
        if (defaultPosition === "centered"){
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH / 2 - elH / 2,
            };
        };
        if (defaultPosition === "bottomleft"){
            pos = {
                x: 0,
                y: stageH - elH,
            };
        };
        if (defaultPosition === "bottommiddle"){
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH - elH,
            };
        };
        if (defaultPosition === "bottomright"){
            pos = {
                x: stageW - elW,
                y: stageH - elH,
            };
        };
        gsap.to(`#${mcId}`, {
            x: pos.x,
            y: pos.y,
            duration: 0.5,
            ease: Power1.easeOut,
            onComplete: () => {
                // console.log("ok.");
            },
        });
        return true;
    } catch (error) {
        return false
    }
};
