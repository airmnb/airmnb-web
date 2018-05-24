import { fetchUser } from './actions';
import { fetchUserEpic } from './epics'
import { configureStore } from '../../store';
import * as deps from '../../services/httpClient';
import { Subject } from 'rxjs/Subject';

fdescribe('when the user fetch', () => {
    let store, get$ = new Subject();
    beforeEach(() => {
        store = configureStore();
        deps.get = jest.fn().mockReturnValue(get$);
        store.dispatch(fetchUser());        
    })
    it('should show loading', () => {
        expect(store.getState().user.loading).toBeTruthy();
    })
    describe('the user api is resolved', () => {
        let state, user = {name: 'any'};
        beforeEach(() => {
            get$.next(user);
        });
    
        it('should hide loading', () => {
            expect(store.getState().user.loading).toBeFalsy();
        });

        it('should set the user in the store', () => {
            expect(store.getState().user.data).toBe(user);
        });
    });
});