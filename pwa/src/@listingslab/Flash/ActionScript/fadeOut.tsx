import { gsap, Power1 } from "gsap";

export const fadeOut = (mcId: string, customDuration?: number) => {
    try {
        let duration = 1;
        if (customDuration) duration = customDuration;
        const el = document.getElementById(mcId);
        if (!el) {
            console.warn("fadeIn", mcId, "missing");
            return false;
        };
        let tween = gsap.fromTo(`#${mcId}`,{
            opacity: 1,
        }, {
            duration, 
            ease: Power1.easeOut,
            opacity: 0,
            onComplete: () => {
                // console.log("fadeOut done");
            },
        });
        tween.play();
        return true;
    } catch (error) {
        return false
    }
};
