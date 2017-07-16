import { ValidationLevel } from './validation-level';
var ValidationState = (function () {
    function ValidationState(state) {
        if (!state) {
            state = {};
        }
        this.state = state;
    }
    ValidationState.prototype.getMessage = function (name) {
        var messages = this.state[name];
        if (!messages || messages.length <= 0) {
            return null;
        }
        return messages[0];
    };
    ValidationState.prototype.getWarning = function (name) {
        var messages = this.state[name];
        if (!messages || messages.length <= 0) {
            return null;
        }
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            if (message.level !== ValidationLevel.warning) {
                continue;
            }
            return message.message;
        }
        return null;
    };
    ValidationState.prototype.getError = function (name) {
        var messages = this.state[name];
        if (!messages || messages.length <= 0) {
            return null;
        }
        for (var _i = 0, messages_2 = messages; _i < messages_2.length; _i++) {
            var message = messages_2[_i];
            if (message.level !== ValidationLevel.error) {
                continue;
            }
            return message.message;
        }
        return null;
    };
    ValidationState.create = function (source) {
        if (typeof source !== 'object' || source === null) {
            return null;
        }
        return new ValidationState(source);
    };
    return ValidationState;
}());
export { ValidationState };
export default ValidationState;
//# sourceMappingURL=validation-state.js.map