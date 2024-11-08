// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. 
// Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


// todo : 
// 1. --> Define a union type Circle and Rectangle ----> done ---<type Shape = Circle | Rectangle>---
// 2. --> where each type has a unique shape property ----> done ---<type Circle{radius : number}, Rectangle{width: number;height: number;}>---
// 3. --> Create a function calculateShapeArea ----> done ---<const calculateShapeArea = () =>{}>---
// 4. --> calculateShapeArea that uses type guards ----> done ---<if(shape.shape === 'circle'){}>---
// 5. --> uses type guards to calculate the area ----> done ---<if(shape.shape === 'circle'){return Math.PI * shape.radius * shape.radius}>---
// 6. --> calculate the area based on the shape type ----> done ---<const circleArea = calculateShapeArea(circle) //console.log(circleArea);//const rectangleArea = calculateShapeArea(rectangle)//console.log(rectangleArea);>---


type Circle = {
    shape: 'circle';
    radius : number;
    
}
type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
    
}
type Shape = Circle | Rectangle;

const calculateShapeArea = (shape : Shape) : number =>{
    if(shape.shape === 'circle'){
        return Math.PI * shape.radius * shape.radius;
    }else if(shape.shape === 'rectangle'){
        return shape.width * shape.height;
    }
    return 0;
}

const circle : Circle = {
    shape: "circle",
    radius: 5,
}
const rectangle : Rectangle = {
    shape:"rectangle",
    width: 4,
    height: 6,
}


const circleArea = calculateShapeArea(circle);
console.log(circleArea);
const rectangleArea = calculateShapeArea(rectangle);
console.log(rectangleArea);

// Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// Sample Output 2:
// 24;