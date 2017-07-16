import { ValidationMessage } from './validation-message';
import { ValidationLevel } from './validation-level';

export interface StateStore {
	[name: string]: ValidationMessage[];
}

export class ValidationState {
	constructor(state?: StateStore) {
		if (!state) {
			state = {};
		}

		this.state = state;
	}

	state: StateStore;

	getMessage(name: string): ValidationMessage | null {
		const messages = this.state[name];

		if (!messages || messages.length <= 0) {
			return null;
		}

		return messages[0];
	}

	getWarning(name: string): string | null {
		const messages = this.state[name];

		if (!messages || messages.length <= 0) {
			return null;
		}

		for (const message of messages) {
			if (message.level !== ValidationLevel.warning) {
				continue;
			}

			return message.message;
		}

		return null;
	}

	getError(name: string): string | null {
		const messages = this.state[name];

		if (!messages || messages.length <= 0) {
			return null;
		}

		for (const message of messages) {
			if (message.level !== ValidationLevel.error) {
				continue;
			}

			return message.message;
		}

		return null;
	}

	static create(source: any): ValidationState | null {
		if (typeof source !== 'object' || source === null) {
			return null;
		}

		return new ValidationState(source as StateStore);
	}
}

export default ValidationState;
