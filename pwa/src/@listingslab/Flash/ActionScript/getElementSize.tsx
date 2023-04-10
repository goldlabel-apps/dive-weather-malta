export const getElementSize = (mcId: string) => {
    try {
        const el = document.getElementById(mcId);
        if (!el) {
            // console.warn("getElementSize", mcId, "is missing");
            return false
        }
        let mobile = false;
        let portrait = false;
        if (el.offsetWidth < 750) mobile = true;
        return {
            id: `#${mcId}`,
            h: el.offsetHeight,
            w: el.offsetWidth,
            mobile,
            portrait,
        }
    } catch (error) {
        return false
    }
}
