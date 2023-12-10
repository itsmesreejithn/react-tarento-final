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

export const reviewAtom = atom({
    key: "reviewAtom",
    default: [{
        userName: "Roshan",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi magni aperiam nulla praesentium vero veniam asperiores nesciunt nemo ipsum corporis!"
    }]
})