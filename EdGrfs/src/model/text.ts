import {
    Color,
    Dimension,
    Figure,
    Position,
} from './figure';

export class Text extends Figure {

    constructor(
        position: Position,
        size: Dimension,
        color: Color = { r: 0, g: 0, b: 0, a: 1 },
        protected fontName: string = 'serif',
        protected fontSize: number = size.h,
        protected fontStyle: string = 'italic',
        protected text: string | null = prompt('Ingrese su Texto:','Hola Mundo') ) {

        super( 
            position,
            size,
            color
        );
    }

    // @Override
    setColor(
        context: CanvasRenderingContext2D,
        color: string ): void {
            
        context.fillStyle = color;
    }

    doPaint(
        context: CanvasRenderingContext2D ): void {
        
        context.beginPath();
        context.rect(
            this.position.x,
            this.position.y ,
            this.size.w,
            this.size.h
        );
//        context.clip();

        context.font = `${this.fontStyle} ${this.fontSize}px ${this.fontName}`;

        context.fillText(
            this.text,
            this.position.x,
            this.position.y+this.size.h-10
        );
    }
}