import { selector } from "recoil";
import { isUserAuthenticatedAtom, passwordsAtom } from "./atoms";

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