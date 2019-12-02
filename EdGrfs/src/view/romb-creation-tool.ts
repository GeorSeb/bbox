import { Figure } from '../model/figure';
import { Rombo } from '../model/rombo';
import { CreationTool } from './creation-tool';

export class RombCreationTool extends CreationTool {

    protected createFigure(
        ptPressed: MouseEvent | null,
        ptReleased: MouseEvent | null ): Figure | null {

        if ( !!ptPressed && !!ptReleased ) {

            return new Rombo({
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