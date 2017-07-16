import * as classnames from 'classnames';

const styles = require<any>('./index.scss');

export interface BsodOptions {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
}

let container: HTMLDivElement;

export class Bsod {
	static show(title: string, error: Error | string, options?: BsodOptions) {

		Bsod.hide();

		// container
		const containerElement = container = document.createElement('div');
		if (options && options.id) {
			containerElement.id = options.id;
		}
		containerElement.className = classnames(styles.container, 'bsod', options && options.className);

		// title
		const titleElement = document.createElement('h2');
		titleElement.className = classnames(styles.title, 'bsod-title');
		titleElement.innerText = title;
		containerElement.appendChild(titleElement);

		// details
		if (error) {
			// message
			if (typeof error === 'string') {
				const messageElement = document.createElement('p');
				messageElement.className = classnames(styles.message, 'bsod-message');
				messageElement.innerText = error;
				containerElement.appendChild(messageElement);
			} else if (typeof error === 'object') {
				/*
				if (error.message) {
					const messageElement = document.createElement('p');
					messageElement.className = classnames(styles.message, 'bsod-message');
					messageElement.innerText = (error.name ? error.name + ': ' : '') + error.message;
					containerElement.appendChild(messageElement);
				}
				*/
				if (error.stack) {
					const stackPreElement = document.createElement('pre');
					stackPreElement.className = classnames(styles.stack, 'bsod-stack');

					const stackCodeElement = document.createElement('code');
					stackCodeElement.innerText = error.stack;
					stackPreElement.appendChild(stackCodeElement);

					containerElement.appendChild(stackPreElement);
				}
			}
		}

		// show
		document.body.appendChild(containerElement);
	}

	static hide() {
		if (!container) {
			return;
		}

		container.remove();
	}
}

export default Bsod;
