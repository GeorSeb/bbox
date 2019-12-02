import { Figure, } from './figure';
export class Text extends Figure {
    constructor(position, size, color = { r: 0, g: 0, b: 0, a: 1 }, fontName = 'serif', fontSize = size.h, fontStyle = 'italic', text = prompt('Ingrese su Texto:', 'Hola Mundo')) {
        super(position, size, color);
        this.fontName = fontName;
        this.fontSize = fontSize;
        this.fontStyle = fontStyle;
        this.text = text;
    }
    // @Override
    setColor(context, color) {
        context.fillStyle = color;
    }
    doPaint(context) {
        context.beginPath();
        context.rect(this.position.x, this.position.y, this.size.w, this.size.h);
        //        context.clip();
        context.font = `${this.fontStyle} ${this.fontSize}px ${this.fontName}`;
        context.fillText(this.text, this.position.x, this.position.y + this.size.h - 10);
    }
}
