export const BABY_SAVE = "BABY_SAVE";
export const BABY_SAVE_FULFILED = "BABY_SAVE_FULFILED";
export const BABY_SAVE_FAILED = "BABY_SAVE_FAILED";

export const saveBaby = (payload) => ({
    type: BABY_SAVE,
    payload
});

export const saveBabyFulfilled = (payload) => ({
    type: BABY_SAVE_FULFILED,
    payload
});

export const saveBabyFailed = (error) => ({
    type: BABY_SAVE_FAILED,
    error
});