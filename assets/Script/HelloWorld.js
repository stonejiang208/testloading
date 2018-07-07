cc.Class({
    extends: cc.Component,

    properties: {
        pkPrefab: {
            default: null,
            type: cc.Prefab,
          },
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },
    btTest:function(){
        cc.log("btTest");
        var node = cc.instantiate(this.pkPrefab);

        node.parent = this.node;
        node.setPosition(0, 0);
    },
    // called every frame
    update: function (dt) {

    },
});