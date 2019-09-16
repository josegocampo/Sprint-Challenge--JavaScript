// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker  {
    constructor(cuboidAttr) {
    this.leng = cuboidAttr.leng;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
    }
    
  
  volume() {
    return this.leng * this.width * this.height
  };
  
 
  surfaceArea() {
    return 2 * (this.leng * this.width + this.leng * this.height + this.width * this.height)
  };
  
  }
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const cuboid = new CuboidMaker({
    leng: 4,
    width: 5,
    height: 5
    
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
// properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {

  constructor(cubeAttr){
  super(cubeAttr);
  }
  volume() {
    return this.leng * this.width * this.height
  };
  
  surfaceArea() {
    return 6 * (this.leng * this.width )
  };
  
  }


  const cube = new CubeMaker({
    leng: 5,
    width: 5,
    height: 5
    
  });


console.log(cube.volume()); 
console.log(cube.surfaceArea());