export interface ILanguage {
  locale: string
  label: string
}

export const languagesMock: ILanguage[] = [
  { locale: 'es-ES', label: 'Spanish' },
  { locale: 'en-US', label: 'English' },
  { locale: 'ca-ES', label: 'Catalan' },
]
