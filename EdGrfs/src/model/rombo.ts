import {
    Color,
    Dimension,
    Position,
} from './figure';

import {
    GeometricFigure,
} from './geometric';

export class Rombo extends GeometricFigure {

    constructor(
        position: Position,
        size: Dimension,
        color: Color = { r: 246, g: 107, b: 8 , a: 1 },
        lineWidth: number = 10,
        lineStyle: string = 'solid' ) {

        super( 
            position,
            size,
            color,
            lineWidth,
            lineStyle 
        );
    }

    doPaint(
        context: CanvasRenderingContext2D ): void {

        context.lineWidth = this.lineWidth;
        context.lineCap = 'round';

        context.beginPath();
        context.moveTo(
            this.position.x + this.size.w/2,
            this.position.y
        );
        context.lineTo(
            this.position.x ,
            this.position.y + this.size.h/2
        );
        context.stroke();
        
        context.beginPath();
        context.moveTo(
            this.position.x ,
            this.position.y + this.size.h/2
        );
        context.lineTo(
            this.position.x + this.size.w/2,
            this.position.y + this.size.h
        );
        context.stroke();

        context.beginPath();
        context.moveTo(
            this.position.x + this.size.w/2,
            this.position.y + this.size.h
        );
        context.lineTo(
            this.position.x + this.size.w,
            this.position.y + this.size.h/2
        );
        context.stroke();

        context.beginPath();
        context.moveTo(
            this.position.x + this.size.w,
            this.position.y + this.size.h/2
        );
        context.lineTo(
            this.position.x + this.size.w/2,
            this.position.y
        );
        context.stroke();
        
    }
}