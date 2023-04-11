export const navigateTo = (url: string, target?: string) => {
  try {
    let t = target
    if (!t) t = "_self"
    window.open(url, t)
  } catch (error: any) {
    console.error("navigateTo", error)
  }
}
