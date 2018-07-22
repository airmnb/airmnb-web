import { createSelector } from "reselect";

const getBaby = (state, {match: {params: {babyId}}}) => state.babies.list.find(b => b.babyId === babyId)

export const makeGetBabyState = () => createSelector(
    [getBaby],
    (baby) => baby
)