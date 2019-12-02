import { Figure } from '../model/figure';
import { Triangle } from '../model/triangle';
import { CreationTool } from './creation-tool';

export class TriaCreationTool extends CreationTool {

    protected createFigure(
        ptPressed: MouseEvent | null,
        ptReleased: MouseEvent | null ): Figure | null {

        if ( !!ptPressed && !!ptReleased ) {

            return new Triangle({
                x: ptPressed.offsetX,
                y: ptPressed.offsetY,
            }, {
                w: ptReleased.offsetX - ptPressed.offsetX,
                h: ptReleased.offsetY - ptPressed.offsetY,
            });
        }

        return null;
    }
}