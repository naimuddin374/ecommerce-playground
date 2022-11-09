import { createStore } from 'easy-peasy'
import AuthModel from './model/auth-model';
import CategoryModel from './model/category-model';

const store = createStore({
    auth: AuthModel,
    category: CategoryModel
})
export default store;