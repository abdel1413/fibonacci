function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {

  const videoUnits = {
    B: 1,
    KB: 1000,
    MB: 1000**2,
    GB: 1000**3
  }
  const driveUnits={
    GB: 1000**3,
    TB: 1000**4
  }

  if(!videoUnits[videoUnit]) return "Invalid video unit"
  if(!driveUnits[driveUnit]) return "Invalid drive unit"
  const videoBytes = videoSize * videoUnits[videoUnit]
  const driveBytes = driveSize * driveUnits[driveUnit];


  return  Math.floor(driveBytes/videoBytes);
}
// Example usage:
console.log(numberOfVideos(500, "MB", 2, "GB"));    // should return 4
console.log(numberOfVideos(1, "GB", 5, "TB"));      // should return 5000
console.log(numberOfVideos(200, "KB", 1, "GB"));    // should return 5000
console.log(numberOfVideos(2, "GB", 10, "TB"));     // should return 5000
console.log(numberOfVideos(100, "MB", 3, "GB"));    // should return 30
console.log(numberOfVideos(50, "KB", 0.5, "TB"));   // should return 10000  