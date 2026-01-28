function scaleImage(size, scale) {
  const [width, height] = size.split('x').map(Number);

  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  return `${scaledWidth}x${scaledHeight}`;
}

