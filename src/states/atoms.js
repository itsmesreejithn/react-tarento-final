import { atom } from "recoil";

export const passwordsAtom = atom({
    key: "passwordsAtom",
    default: [
        {
            website: "facebook",
            email: "mark.austin@hotmail.com",
            password: "12@ABcdef#",
        }
    ]
});