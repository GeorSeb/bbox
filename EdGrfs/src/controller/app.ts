import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';
import { Figure } from '../model/figure';

export class App {
    private static instance: App;

    private drawing: Drawing;
    private mainWindow: MainWindow;
    
    private constructor() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();
    }

    static getInstance(): App {
        if ( App.instance ) {
            // NOOP
        }
        else {
            App.instance = new App();
        }

        return App.instance;
    }

    run(): void {
        this.repaint();
    }

    repaint() {
        this.mainWindow
            .repaint();
    }

    addFigure( 
        f: Figure ): void {

        this.drawing
            .addFigure(
                f
            );
        
        this.repaint();
    }

    paint(
        context: CanvasRenderingContext2D | null ): void  {

        if ( context ) {
            this.drawing
                .paint(
                    context
                );
        }
        else {
            console.error(
                'NULL 2D CONTEXT'
            );
        }
    }

    selectPoint(
        pt: MouseEvent | null ): void {

        this.drawing
            .selectPoint(
                pt
            );
    }

    setActiveTool(
        tidx: number ): void {

        this.mainWindow
            .setActiveTool(
                tidx
            );
    }

    setLineCreation(): void {
        this.setActiveTool(
            MainWindow.LINE_TOOL
        );
    }

    setRectCreation(): void {
        this.setActiveTool(
            MainWindow.RECT_TOOL
        );
    }

    setTriaCreation(): void {
        this.setActiveTool(
            MainWindow.TRIA_TOOL
        );
    }

    setTextCreation(): void {
        this.setActiveTool(
            MainWindow.TEXT_TOOL
        );
    }

    setElliCreation(): void {
        this.setActiveTool(
            MainWindow.ELLI_TOOL
        );
    }

    setRombCreation(): void {
        this.setActiveTool(
            MainWindow.ROMB_TOOL
        );
    }
}