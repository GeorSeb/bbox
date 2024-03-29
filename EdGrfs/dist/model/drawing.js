import { Line } from './line';
import { Text } from './text';
export class Drawing {
    constructor() {
        this.figures = [];
        this.modified = false;
        this.name = null;
        // this.test();
    }
    addFigure(f) {
        this.figures
            .push(f);
        this.modified = true;
    }
    paint(context) {
        // iterator 
        this.figures
            .forEach((f) => f.paint(context));
    }
    // private methods ------------------------------------------------------
    test() {
        this.figures
            .push(new Line({
            x: 100,
            y: 100
        }, {
            w: 600,
            h: 0
        }, {
            r: 160,
            g: 0,
            b: 255,
            a: 1.0
        }, 10, 'solid'));
        this.figures
            .push(new Line({
            x: 700,
            y: 100
        }, {
            w: 0,
            h: 500
        }, {
            r: 0,
            g: 0,
            b: 255,
            a: 0.5
        }, 20, 'solid'));
        this.figures
            .push(new Line({
            x: 700,
            y: 600
        }, {
            w: -600,
            h: 0
        }, {
            r: 0,
            g: 0,
            b: 255,
            a: 1.0
        }, 30, 'solid'));
        this.figures
            .push(new Line({
            x: 100,
            y: 600
        }, {
            w: 0,
            h: -500
        }, {
            r: 0,
            g: 255,
            b: 0,
            a: 0.5
        }, 40, 'solid'));
        this.figures
            .push(new Text({
            x: 300,
            y: 300
        }, {
            w: 200,
            h: 100
        }, {
            r: 0,
            g: 0,
            b: 255,
            a: 1.0
        }, 'Arial', 32, 'bold', 'hola'));
    }
    selectPoint(pt) {
        // 1. iterate backwards
        // 2. etc.
    }
}
