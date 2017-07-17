import { ValidationLevel } from './validation-level';

export interface ValidationMessage {
	level: ValidationLevel;
	message: string;
}

export default ValidationMessage;
