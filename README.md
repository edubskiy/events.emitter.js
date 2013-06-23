Event model can be used as mixin for any object or as global event broadcaster

Example :
```javascript
var event = new Events();
event.on('change', function(eventType) {
   console.log('event was triggered--------->');
});
event.on('change2', function() {
  console.log('event was triggered 2-------->');
});
event.off('change2');
event.trigger('change');
event.trigger('change2');
```