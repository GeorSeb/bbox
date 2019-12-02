import { GeometricFigure, } from './geometric';
export class Ellipse extends GeometricFigure {
    constructor(position, size, color = { r: 191, g: 27, b: 101, a: 1 }, lineWidth = 10, lineStyle = 'solid') {
        super(position, size, color, lineWidth, lineStyle);
    }
    doPaint(context) {
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.ellipse(this.position.x + this.size.w / 2, this.position.y + this.size.h / 2, Math.abs(this.size.w / 2), Math.abs(this.size.h / 2), 0, 0, 360, false);
        context.stroke();
    }
}
