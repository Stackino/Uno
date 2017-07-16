import { ValidationLevel } from './validation-level';

interface ValidationMessage {
	level: ValidationLevel;
	message: string;
}

export default ValidationMessage;
export { ValidationMessage };