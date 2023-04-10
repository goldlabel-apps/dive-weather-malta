import {gsap} from "gsap";

export const setScale = (mcId: string, scale: number) => {
    try {
        const el = document.getElementById(mcId);
        if (!el) {
            // console.warn("setScale", mcId, "missing");
            return false;
        };
        gsap.set(`#${mcId}`, {
            scaleX: scale,
            scaleY: scale,
        });
        return true;
    } catch (error) {
        return false
    }
};
