function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
 const MbPerGb = 1000;
 const sizeMb = hardDriveSizeGb * MbPerGb

   
  return Math.floor(sizeMb /photoSizeMb);
}
// Example usage:
console.log(numberOfPhotos(5, 1)); // should return 200
console.log(numberOfPhotos(10, 2)); // should return 200
console.log(numberOfPhotos(15, 3)); // should return 200
console.log(numberOfPhotos(20, 4)); // should return 200
console.log(numberOfPhotos(25, 5)); // should return 200
console.log(numberOfPhotos(8, 2)); // should return 250