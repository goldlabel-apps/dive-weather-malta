
export const getElement = (mcId: string) => {
    try {
        // console.log("getElement", mcId);
        const el = document.getElementById(mcId);
        if (!el) {
            // console.warn("Element", mcId, "missing");
            return false
        }
        return el;
        // let mode = 'square';
        // let isMobile = false;
        // if (el.offsetWidth < 650) isMobile = true;
        // if (el.offsetHeight < el.offsetWidth) mode = 'landscape';
        // if (el.offsetHeight > el.offsetWidth) mode = 'portrait';
        // return {
        //     id: `#${divId}`,
        //     height: el.offsetHeight,
        //     width: el.offsetWidth,
        //     mode,
        //     isMobile,
        // }
    } catch (error) {
        return false
    }
}
