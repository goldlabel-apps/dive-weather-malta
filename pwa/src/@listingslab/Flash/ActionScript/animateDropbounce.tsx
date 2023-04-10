import { gsap } from "gsap";

export const animateDropbounce = (mcId: string, dropHeight: number) => {
    try {
        const el = document.getElementById(mcId);
        if (!el) {
            console.warn("animateDropbounce", mcId, "missing");
            return false;
        };
        let tween = gsap.fromTo(`#${mcId}`,{
            top: -dropHeight*4,
            rotation: -180,
        }, {
            top: 0, 
            duration: 2, 
            ease: "bounce.out",
            rotation: 0,
            onComplete: () => {
                console.log("animateDropbounce complete");
            },
        });
        tween.play();
        return true;
    } catch (error) {
        return false
    }
};
