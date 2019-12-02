import { GeometricFigure, } from './geometric';
export class Triangle extends GeometricFigure {
    constructor(position, size, color = { r: 0, g: 153, b: 102, a: 1 }, lineWidth = 10, lineStyle = 'solid') {
        super(position, size, color, lineWidth, lineStyle);
    }
    doPaint(context) {
        context.lineWidth = this.lineWidth;
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x, this.position.y + this.size.h);
        context.stroke();
        context.beginPath();
        context.moveTo(this.position.x, this.position.y + this.size.h);
        context.lineTo(this.position.x + this.size.w, this.position.y + this.size.h);
        context.stroke();
        context.beginPath();
        context.moveTo(this.position.x + this.size.w, this.position.y + this.size.h);
        context.lineTo(this.position.x, this.position.y);
        context.stroke();
    }
}
