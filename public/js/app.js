(function($, window, caja) {
  caja.initialize({
    cajaServer: 'https://caja.appspot.com/',
    debug: true
  });
  
  function onChange(instance) {
    $('#preview > *').remove();
    caja.load(window.document.getElementById('preview'), undefined, function(frame) {
      frame.code(null, 'text/html', instance.getValue()).run();
    });
    //$('#preview').contents().html(instance.getValue());
  }

  var editor = CodeMirror(document.getElementById('editor'), {
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true,
    onChange: onChange
  });

  editor.setSize(null, '900');
})(jQuery, window, caja);