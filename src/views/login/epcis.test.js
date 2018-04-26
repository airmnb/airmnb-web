import { loginUser } from "./actions";
import { loginUserEpic } from "./epics";
import { Observable } from 'rxjs';
import { configureStore } from "../../store";

describe('src/views/login/epcis', () => {
    let action, deps, store;
    beforeEach(() => {
        action = loginUser({ username: 'Mark', password: 'any' });
    })

    describe('when user enters valid credentials', () => {

        beforeEach(() => {
            deps = {
                ajax: {
                    getJSON: () => Observable.of({
                        name: 'Mark',
                        email: 'mark@email.com'
                    })
                }
            };
            store = configureStore(deps);
            store.dispatch(action);
        });

        it('should login the user', () => {
            expect(store.getState().login.user).toEqual({
                name: 'Mark',
                email: 'mark@email.com'
            });
        })
    });
});