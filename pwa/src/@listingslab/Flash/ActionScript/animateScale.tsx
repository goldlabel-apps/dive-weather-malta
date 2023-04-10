import { gsap, Power1 } from "gsap";

export const animateScale = (mcId: string, scale: number, duration?: number) => {
    try {
        const el = document.getElementById(mcId);
        if (!el) {
            // console.warn("animateScale", mcId, "missing");
            return false;
        };
        let tween = gsap.fromTo(`#${mcId}`,{
            
        }, {
            duration, 
            ease: Power1.easeOut,
            scaleX: scale,
            scaleY: scale,
            onComplete: () => {
                // console.log("animateScale done");
            },
        });
        tween.play();
        return true;
    } catch (error) {
        return false
    }
};
