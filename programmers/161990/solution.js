// https://school.programmers.co.kr/learn/courses/30/lessons/161990

const solution = (wallpaper) => {
  let pointX = []
  let pointY = []

  wallpaper.map((rows, x) => {
    [...rows].map((cols, y) => {
      if (cols === '#') {
        pointX.push(x)
        pointY.push(y)
      }
    });
  })

  return [
    Math.min(...pointX),
    Math.min(...pointY),
    Math.max(...pointX) + 1,
    Math.max(...pointY) + 1];
}

// return [lux, luy, rdx, rdy]