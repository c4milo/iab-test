$(function() {
  function onChange(instance) {
    $('#preview > *').remove();

    var iframe = $('<iframe/>', {
      id: 'sandbox',
      src: '',
      url: 'about:blank
    }).appendTo('#preview');

    var sandbox = iframe[0].contentWindow.document;
    sandbox.write(instance.getValue());
    sandbox.close();
  }

  var editor = CodeMirror(document.getElementById('editor'), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    onChange: onChange
  });

  editor.setSize(null, '900');
});
