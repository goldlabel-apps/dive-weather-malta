import {raafStore} from "../../../@raaf/raafStore";
import {
    AlignmentShape, 
    PositionShape,
} from "../types";
import { gsap } from "gsap";
import {setSharedKey} from "../../../@raaf";
import { 
    getElement,
    getFlashSize,
    getElementSize,
} from "../";
export const align = (
        mcId: string, 
        flashId: string, 
        alignment: AlignmentShape
    ) => {
    try {
        const fl = getElement(flashId);
        const el = getElement(mcId);
        if (!el || !fl) {
            throw `Flash align: ${mcId} not found on ${flashId}`;
            return false;
        };
        const flashSize = getFlashSize(flashId);
        const mcSize = getElementSize(mcId);
        const stageW = flashSize.w;
        const stageH = flashSize.h;
        const elW = mcSize.w;
        const elH = mcSize.h;
        // console.log("stageW", stageW);
        // console.log("stageH", stageH);
        // console.log("elW", elW);
        // console.log("elH", elH);
        let pos: PositionShape = {
            x: 0,
            y: 0,
        };

        if (alignment === "topleft"){
            pos = { x: 0, y: 0};
        };
        if (alignment === "topmiddle"){
            pos = { 
                x: stageW / 2 - elW / 2,
                y: 0,
            };
        };
        if (alignment === "topright"){
            pos = { 
                x: stageW - elW,
                y: 0,
            };
        };
        if (alignment === "centered"){
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH / 2 - elH / 2,
            };
        };
        if (alignment === "bottomleft"){
            pos = {
                x: 0,
                y: stageH - elH,
            };
        };
        if (alignment === "bottommiddle"){
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH - elH,
            };
        };
        if (alignment === "bottomright"){
            pos = {
                x: stageW - elW,
                y: stageH - elH,
            };
        };
        gsap.set(`#${mcId}`, {
            x: pos.x,
            y: pos.y,
        });    
    } catch (error: any) {
        raafStore.dispatch(setSharedKey({key: "notification", value:{
            code: "align",
            severity: "warning",
            message: error.toString(),  
        }}));
        return false;
    }
}
