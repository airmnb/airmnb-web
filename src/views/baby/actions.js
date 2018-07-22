export const BABIES_FETCH = "BABIES_FETCH";
export const BABIES_FETCH_FULFILED = "BABIES_FETCH_FULFILED";
export const BABIES_FETCH_FAILED = "BABIES_FETCH_FAILED";
export const BABY_FETCH = "BABY_FETCH";
export const BABY_FETCH_FULFILED = "BABY_FETCH_FULFILED";
export const BABY_FETCH_FAILED = "BABY_FETCH_FAILED";
export const BABY_SAVE = "BABY_SAVE";
export const BABY_SAVE_FULFILED = "BABY_SAVE_FULFILED";
export const BABY_SAVE_FAILED = "BABY_SAVE_FAILED";
export const BABY_EDIT = "BABY_EDIT";
export const BABY_EDIT_FULFILED = "BABY_EDIT_FULFILED";
export const BABY_EDIT_FAILED = "BABY_EDIT_FAILED";
export const BABY_DELETE = "BABY_DELETE";
export const BABY_DELETE_FULFILED = "BABY_DELETE_FULFILED";
export const BABY_DELETE_FAILED = "BABY_DELETE_FAILED";

export const fetchBabies = () => ({
    type: BABIES_FETCH,
});

export const fetchBabiesFulfilled = (payload) => ({
    type: BABIES_FETCH_FULFILED,
    payload
});

export const fetchBabiesFailed = (error) => ({
    type: BABIES_FETCH_FAILED,
    error
});

export const fetchBaby = (babyId) => ({
    type: BABY_FETCH,
    babyId
});

export const fetchBabyFulfilled = (payload) => ({
    type: BABY_FETCH_FULFILED,
    payload
});

export const fetchBabyFailed = (error) => ({
    type: BABY_FETCH_FAILED,
    error
});

export const saveBaby = (payload) => ({
    type: BABY_SAVE,
    payload
});

export const saveBabyFulfilled = ({baby}) => ({
    type: BABY_SAVE_FULFILED,
    payload: baby
});

export const saveBabyFailed = (error) => ({
    type: BABY_SAVE_FAILED,
    error
});

export const editBaby = (payload) => ({
    type: BABY_EDIT,
    payload
});

export const editBabyFulfilled = (payload) => ({
    type: BABY_EDIT_FULFILED,
    payload
});

export const editBabyFailed = (error) => ({
    type: BABY_EDIT_FAILED,
    error
});

export const deleteBaby = (babyId) => ({
    type: BABY_DELETE,
    babyId
});

export const deleteBabyFulfilled = (payload) => ({
    type: BABY_DELETE_FULFILED,
    payload
});

export const deleteBabyFailed = (error) => ({
    type: BABY_DELETE_FAILED,
    error
});