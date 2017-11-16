import * as classnames from 'classnames';
var styles = require('./index.scss');
var container;
var Bsod = /** @class */ (function () {
    function Bsod() {
    }
    Bsod.show = function (title, error, options) {
        Bsod.hide();
        // container
        var containerElement = container = document.createElement('div');
        if (options && options.id) {
            containerElement.id = options.id;
        }
        containerElement.className = classnames(styles.container, 'bsod', options && options.className);
        // title
        var titleElement = document.createElement('h2');
        titleElement.className = classnames(styles.title, 'bsod-title');
        titleElement.innerText = title;
        containerElement.appendChild(titleElement);
        // details
        if (error) {
            // message
            if (typeof error === 'string') {
                var messageElement = document.createElement('p');
                messageElement.className = classnames(styles.message, 'bsod-message');
                messageElement.innerText = error;
                containerElement.appendChild(messageElement);
            }
            else if (typeof error === 'object') {
                /*
                if (error.message) {
                    const messageElement = document.createElement('p');
                    messageElement.className = classnames(styles.message, 'bsod-message');
                    messageElement.innerText = (error.name ? error.name + ': ' : '') + error.message;
                    containerElement.appendChild(messageElement);
                }
                */
                if (error.stack) {
                    var stackPreElement = document.createElement('pre');
                    stackPreElement.className = classnames(styles.stack, 'bsod-stack');
                    var stackCodeElement = document.createElement('code');
                    stackCodeElement.innerText = error.stack;
                    stackPreElement.appendChild(stackCodeElement);
                    containerElement.appendChild(stackPreElement);
                }
            }
        }
        // show
        document.body.appendChild(containerElement);
    };
    Bsod.hide = function () {
        if (!container) {
            return;
        }
        container.remove();
    };
    return Bsod;
}());
export { Bsod };
export default Bsod;
//# sourceMappingURL=index.js.map