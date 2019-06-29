import { Laya } from "Laya";
import { Stage } from "laya/display/Stage";
import { Text } from "laya/display/Text";
import { Browser } from "laya/utils/Browser";
import { WebGL } from "laya/webgl/WebGL";
export class Timer_CallLater {
    constructor(maincls) {
        this.Main = null;
        this.Main = maincls;
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        //
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        //
        //			Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#232628";
        this.demonstrate();
    }
    demonstrate() {
        for (var i = 0; i < 10; i++) {
            Laya.timer.callLater(this, this.onCallLater);
        }
    }
    onCallLater(e = null) {
        console.log("onCallLater triggered");
        var text = new Text();
        text.font = "SimHei";
        text.fontSize = 30;
        text.color = "#FFFFFF";
        text.text = "打开控制台可见该函数仅触发了一次";
        text.size(Laya.stage.width, Laya.stage.height);
        text.wordWrap = true;
        text.valign = "middle";
        text.align = "center";
        this.Main.box2D.addChild(text);
    }
}