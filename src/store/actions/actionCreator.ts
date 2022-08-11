import {Action, IActionCreator} from "./types";

export function actionCreator<P>(type: string): IActionCreator<P> {
    return Object.assign(
        (payload: P) => ({type, payload}),
        {type}
    );
}

export function isType<P>(action: Action<any>,
                   actionCreator: IActionCreator<P>): action is Action<P> {
    return action.type === actionCreator.type;
}
