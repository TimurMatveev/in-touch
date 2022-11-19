export enum Language {
	Ru = 'ru',
	En = 'en',
}

export type LocalizationDictionary = typeof import('./en').default;
