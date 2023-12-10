import { selector } from "recoil";
import { isUserAuthenticatedAtom, passwordsAtom, reviewAtom } from "./atoms";

export const appendPasswordsSelector = selector({
    key: 'appendPasswordsSelector',
    get: ({get}) => {
        return get(passwordsAtom);
    },
    set: ({set}, newPasswordData) => {
        set(passwordsAtom, (prevPasswords) => [...prevPasswords, newPasswordData]);
    }

})

export const isUserAuthenticatedSelector = selector({
    key: 'isUserAuthenticatedSelector',
    get: ({get}) => get(isUserAuthenticatedAtom),

    set: ({set}, isUserAuthenticated) => {
        set(isUserAuthenticatedAtom, isUserAuthenticated);
    }
})

export const appendReviewsSelector = selector({
    key: "appendReviewsSelector",
    get: ({get}) => get(reviewAtom),

    set:({set}, newReview) => {
        set(reviewAtom, (prevReview) => [...prevReview, newReview]);
    }
})