import React from "react"

export const useOnWindowResize = (callback: any) => {
    const listener: any = React.useRef(null)
    React.useEffect(() => {
      if (listener.current)
        window.removeEventListener('resize', listener.current)
      listener.current = window.addEventListener('resize', callback)
      return () => {
        window.removeEventListener('resize', listener.current)
      }
    }, [callback])
}
