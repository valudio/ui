export interface ILanguage {
  locale: string
  label: string
}

export const languagesMock: ILanguage[] = [
  { locale: 'es', label: 'Spanish' },
  { locale: 'en', label: 'English' },
  { locale: 'de', label: 'German' },
]
