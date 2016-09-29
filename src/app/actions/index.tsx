export interface Action<T> {
    type: string;
    payload: T;
}

export const INCR_ACTION = "INCR";
export type INCR_ACTION = {
    by: number
}

export const clickIncrement = function (incr: number): Action<INCR_ACTION> {
    return {
        payload: {
            by: incr
        },
        type: INCR_ACTION
    };
};
