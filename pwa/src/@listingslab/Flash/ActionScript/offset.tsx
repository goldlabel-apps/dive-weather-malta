import { gsap } from "gsap";

export const offset = (mcId: string, top: number, left: number) => {
    try {
        const currentX: any = gsap.getProperty(`#${mcId}`, "x");
        const currentY: any = gsap.getProperty(`#${mcId}`, "y");

        gsap.set(`#${mcId}`, {
            x: currentX + left,
            y: currentY + top,
        });
    } catch (error) {
        return false;
    }
}
