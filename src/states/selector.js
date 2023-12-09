import { selector } from "recoil";
import { passwordsAtom } from "./atoms";

export const appendPasswordsSelector = selector({
    key: 'appendPasswordsSelector',
    get: ({get}) => {
        return get(passwordsAtom);
    },
    set: ({set}, newPasswordData) => {
        set(passwordsAtom, (prevPasswords) => [...prevPasswords, newPasswordData]);
    }

})