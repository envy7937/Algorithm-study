// https://school.programmers.co.kr/learn/courses/30/lessons/161990

const solution = (wallpaper) => {
  let startX = []
  let startY = []
  let endX = []
  let endY = []

  wallpaper.map((rows, index) => {
    [...rows].map((cols, key) => {
      if (cols === '#') {
        startX.push(index)
        startY.push(key)
        endX.push(index + 1)
        endY.push(key + 1)
      }
    });
  })

  return [Math.min(...startX), Math.min(...startY), Math.max(...endX), Math.max(...endY)];
}

// return [lux, luy, rdx, rdy]