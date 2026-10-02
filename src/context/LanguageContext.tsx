import { createContext, useContext, useState } from "react"
import { translations } from "../lib/translations"
type Lang = "tr" | "en"
const Ctx = createContext<{ lang: Lang; t: typeof translations.tr; setLang: (l:Lang)=>void }>(null as any)
export function LanguageProvider({children}:{children:any}){
  const [lang,setLang]=useState<Lang>("tr")
  return <Ctx.Provider value={{lang, t: translations[lang], setLang}}>{children}</Ctx.Provider>
}
export const useLang = ()=> useContext(Ctx)
