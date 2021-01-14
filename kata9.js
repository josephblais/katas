const sphereVolume = (radius) => {
  return 4/3 * Math.PI * Math.pow(radius, 3)
};


const coneVolume = (radius, height) => {
  return 1/3 * Math.PI * Math.pow(radius, 2) * height;
};

const prismVolume = (height, width, depth) => {
  return height * width * depth;
};

const totalVolume = (solids) => {
  volume = 0;
  for (let solid of solids) {
    if (solid.type === 'sphere') {
      volume += sphereVolume(solid.radius);
    }
    else if (solid.type === 'cone') {
      volume += coneVolume(solid.radius, solid.height);
    }
    else if (solid.type === 'prism') {
      volume += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return volume;
};