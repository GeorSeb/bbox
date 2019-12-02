import { GeometricFigure, } from './geometric';
export class Rectangle extends GeometricFigure {
    constructor(position, size, color = { r: 0, g: 128, b: 128, a: 1 }, lineWidth = 10, lineStyle = 'solid') {
        super(position, size, color, lineWidth, lineStyle);
    }
    doPaint(context) {
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.rect(this.position.x, this.position.y, this.size.w, this.size.h);
        context.stroke();
    }
}
