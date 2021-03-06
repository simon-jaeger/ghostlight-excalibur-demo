export function makeImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => resolve(img)
    img.onerror = () => reject()
  })
}
