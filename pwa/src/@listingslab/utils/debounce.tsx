export const debounce = (func: any) => {
    let timer: any;
    return function (...args: any) {
      // @ts-ignore
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 150);
    };
  };