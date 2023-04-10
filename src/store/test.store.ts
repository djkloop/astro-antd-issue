import { atom } from "nanostores"


export const isOpen = atom(false)


isOpen.subscribe((v) => {
  console.log(v, " <<< ")
})