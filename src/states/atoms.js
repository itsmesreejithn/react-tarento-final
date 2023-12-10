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

export const isUserAuthenticatedAtom = atom({
    key: "isUserAuthenticatedAtom",
    default: false,
});

export const userDataAtom = atom({
    key: "userDataAtom",
    default: {
        email: "rudra.pratap@yahoo.com",
        password: "mypassword",
    }
})