function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x
  }

  if (y >= z && y >= x) {
    return y
  }

  if (z >= x && z >= y) {
    return z
  }
}

export default maxOfThree

//the By using >= instead of >, we ensure that it correctly identifies 
//the maximum even when some numbers are equal. 
//This way, it should handle all potential cases.