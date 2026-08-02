/**
 * Replaces Polish diacritics with standard Latin characters
 */
export function removePolishDiacritics(text: string): string {
	return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
