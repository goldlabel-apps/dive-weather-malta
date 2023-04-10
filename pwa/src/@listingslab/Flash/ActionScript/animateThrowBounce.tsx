import { gsap } from "gsap";

export const animateThrowBounce = (mcId: string, throwHeight: number) => {
    try {
        const el = document.getElementById(mcId);
        if (!el) {
            console.warn("animateThrowBounce", mcId, "missing");
            return false;
        };
        let tween = gsap.fromTo(`#${mcId}`,{
            top: throwHeight*4,
            rotation: -180,
        }, {
            top: 0, 
            duration: 2, 
            ease: "bounce.out",
            rotation: 0,
            onComplete: () => {
                // console.log("animateThrowBounce complete");
            },
        });
        tween.play();
        return true;
    } catch (error) {
        return false
    }
};
