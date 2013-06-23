/**
 * Event model can be used as mixin for any object or as global event broadcaster
 *
 * @author Evgeniy Dubskiy
 * @example :
 * var event = new Events();
 * event.on('change', function(eventType) {
 *    console.log('event was triggered--------->');
 * });
 * event.on('change2', function() {
 *   console.log('event was triggered 2-------->');
 * });
 *
 * event.off('change2');
 *
 * event.trigger('change');
 * event.trigger('change2');
 */
(function(exports, undefined) {

    function Events() {
        this.events = {};
    }

    Events.prototype.on = function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    };

    Events.prototype.off = function(event) {
        if (this.events[event]) {
            delete this.events[event];
        }
    };

    Events.prototype.trigger = function(event) {
        if (this.events[event]) {
            var i,
                eventCount = this.events[event].length;
            for (i = 0; i < eventCount; i++) {
                if (typeof this.events[event][i] === 'function') {
                    this.events[event][i].apply(this, [event]);
                }
            }
        }
        return this;
    };

    exports.Events = Events;

}(window));
