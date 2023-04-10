import { gsap, Power1 } from "gsap";

export const animateSpin = (mcId: string) => {
    try {
        const el = document.getElementById(mcId);
        if (!el) {
            console.warn("animateSpin", mcId, "missing");
            return false
        }
        gsap.fromTo(`#${mcId}`, {
            rotation: 0,
        },{
            rotation: 360,
            duration: 0.75,
            ease: Power1.easeOut,
            onComplete: () => {},
        });
        return true;
    } catch (error) {
        return false
    }
};
