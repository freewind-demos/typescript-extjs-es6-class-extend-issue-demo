Ext.onReady(() => {
    class MyPanel extends Ext.panel.Panel {
        renderTo= 'main'
        height= 100
        width= 200
        title= 'Hello world'
        html= 'Hello Ext!'
    }
    new MyPanel({})
});