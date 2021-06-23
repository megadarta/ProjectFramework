class Shape2D {
 abstract getArea();
}
class Shape3D{
 abstract getVolume();
}
class Rectangle extends Shape2D {
 double heightRectangle;
 double widthRectangle;
 
 Rectangle(double heightRectangle, double widthRectangle) {
 this.heightRectangle = heightRectangle;
 this.widthRectangle = widthRectangle;
 }
  getArea() {
 return heightRectangle * widthRectangle;
 }
}
class Square extends Shape2D {
 double sideSquare;
 
 Rectangle(double sideSquare) {
 this.sideSquare = sideSquare;
 }
 getArea() {
 return sideSquare * sideSquare;
 }
}
class Circle extends Shape2D {
 double radiusCircle;
 
 Rectangle(double radiusCircle) {
 this.radiusCircle = radiusCircle;
 }
 getArea() {
 return 3.14 * radiusCircle * radiusCircle;
 }
}
class Cube extends Shape3D {
 double sideCube;
 
 Rectangle(double sideCube) {
 this.sideCube = sideCube;
 }
 getVolume() {
 return sideCube * sideCube * sideCube;
 }
}
class Cuboid extends Shape3D {
 double lengthCuboid;
 double widthCuboid;
double heightCuboid;
 Rectangle(double lengthCuboid, double widthCuboid, double heightCuboid) {
 this.lengthCuboid = lengthCuboid;
 this.widthCuboid = widthCuboid;
 this.heightCuboid = heightCuboid;
 }
 getVolume() {
 return lengthCuboid * widthCuboid * heightCuboid;
 }
}
class Cone extends Shape3D {
 double baseCone;
double heightCone;
 Rectangle(double baseCone, double heightCone) {
 this.baseCone = baseCone;
 this.heightCone = heightCone;
 }
 getVolume() {
 return 1/3 * baseCone * heightCone;
 }
}
class Sphere extends Shape3D {
 double radiusSphere;
 Rectangle(double radiusSphere) {
 this.radiusSphere = radiusSphere;
 }
 getVolume() {
 return 4/3 * 3.14 * radiusSphere * radiusSphere * radiusSphere;
 }
}
public class ShapeCalculator {
 
 public ShapeCalculator() {
 Shape2D square = new Square(5);
 Shape2D rectangle = new Rectangle(9,6);
 Shape2D circle = new Circle(14);
 Shape3D cube = new Cube(14);
 Shape3D cuboid = new Cuboid(9,6,18);
 Shape3D sphere = new Sphere(21);
 Shape3D cone = new Cone(9,18);
 calculateArea(square, rectangle, circle);
 calculateVolume(cube, cuboid, sphere, cone);
 }
 public double calculateArea(Shape2D shape1, Shape2D shape2, Shape2D shape3) {
 return shape1.getArea() + shape2.getArea + shape3.getArea; 
 }
public double calculateVolume(Shape3D shape1, Shape3D shape2, Shape3D shape3, 
Shape3D shape4) {
 return shape1.getVolume() + shape2. getVolume() + shape3. getVolume() + 
shape4.getVolume(); 
 }
}