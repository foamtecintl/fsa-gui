var mainPanel = new Ext.Panel({
  frame:true,
  columnWidth: 1,
  height: 649,
  style: '{text-align:left;}',
  items: [
    {
      html: '<br><div id="content"></div>'
    }
  ]
});

var panelMenu = new Ext.Panel({
  renderTo: 'body',
  style: '{text-align:center;}',
  layout:'column',
  tbar: [{}],
  items: [mainPanel]
});