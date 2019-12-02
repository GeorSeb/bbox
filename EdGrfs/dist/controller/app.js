import { Drawing } from '../model/drawing';
import { MainWindow } from '../view/main-window';
export class App {
    constructor() {
        this.drawing = new Drawing();
        this.mainWindow = new MainWindow();
    }
    static getInstance() {
        if (App.instance) {
            // NOOP
        }
        else {
            App.instance = new App();
        }
        return App.instance;
    }
    run() {
        this.repaint();
    }
    repaint() {
        this.mainWindow
            .repaint();
    }
    addFigure(f) {
        this.drawing
            .addFigure(f);
        this.repaint();
    }
    paint(context) {
        if (context) {
            this.drawing
                .paint(context);
        }
        else {
            console.error('NULL 2D CONTEXT');
        }
    }
    selectPoint(pt) {
        this.drawing
            .selectPoint(pt);
    }
    setActiveTool(tidx) {
        this.mainWindow
            .setActiveTool(tidx);
    }
    setLineCreation() {
        this.setActiveTool(MainWindow.LINE_TOOL);
    }
    setRectCreation() {
        this.setActiveTool(MainWindow.RECT_TOOL);
    }
    setTriaCreation() {
        this.setActiveTool(MainWindow.TRIA_TOOL);
    }
    setTextCreation() {
        this.setActiveTool(MainWindow.TEXT_TOOL);
    }
    setElliCreation() {
        this.setActiveTool(MainWindow.ELLI_TOOL);
    }
    setRombCreation() {
        this.setActiveTool(MainWindow.ROMB_TOOL);
    }
}
