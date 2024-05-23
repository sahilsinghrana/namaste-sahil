import { colors, styles } from "./constants.js";

class Logger {
    static text = "";
    static currentColor = "";
    static currentBg = "";
    static currentStyle = "";

    constructor(text) {
        this.text = text;
    }

    static reset() {
        this.text = "";
        this.currentColor = "";
        this.currentBg = "";
        this.currentStyle = "";
    }

    static updateTextColor(styleCode = "") {
        this.currentColor = styleCode;
        return this;
    }

    static updateBg(styleCode = "") {
        this.currentBg = styleCode;
        return this;
    }

    static updateStyle(styleCode = "") {
        this.currentStyle = styleCode;
        return this;
    }


    static getString(message = "") {
        const styles = [this.currentStyle, this.currentBg, this.currentColor]

        let stylesStr = "";
        let resets = "";

        styles.forEach(style => {
            if (style) {
                stylesStr += style;
                resets += colors.reset;
            }
        })
        return `${stylesStr}${this.text}${message}${resets}`;
    }


    static log(message = "") {
        console.log(this.getString(message));
        this.reset();
        return this;
    }


    static get black() { return this.updateTextColor(colors.text.black); }
    static get red() { return this.updateTextColor(colors.text.red); }
    static get green() { return this.updateTextColor(colors.text.green); }
    static get yellow() { return this.updateTextColor(colors.text.yellow); }
    static get blue() { return this.updateTextColor(colors.text.blue); }
    static get magenta() { return this.updateTextColor(colors.text.magenta); }
    static get cyan() { return this.updateTextColor(colors.text.cyan); }
    static get white() { return this.updateTextColor(colors.text.white); }

    static get bgBlack() { return this.updateBg(colors.bg.black); }
    static get bgRed() { return this.updateBg(colors.bg.red); }
    static get bgGreen() { return this.updateBg(colors.bg.green); }
    static get bgYellow() { return this.updateBg(colors.bg.yellow); }
    static get bgBlue() { return this.updateBg(colors.bg.blue); }
    static get bgMagenta() { return this.updateBg(colors.bg.magenta); }
    static get bgCyan() { return this.updateBg(colors.bg.cyan); }
    static get bgWhite() { return this.updateBg(colors.bg.white); }

    static get bold() { return this.updateStyle(styles.bold); }
    static get underline() { return this.updateStyle(styles.underline); }
}

export default Logger;