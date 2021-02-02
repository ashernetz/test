import schema from '../schema/index';
import { fromJS} from 'immutable';

// immutable
// listas remplazan a los arrays
// mapas remplazan a los objectos

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
});

function data(state = initialState, action){
  switch(action.type) {
    case 'SEARCH_VIDEO': {
     // action.payload.query
      /*let results = [];
      const list = state.data.categories[2].playlist;

      if(action.payload.query) {
        results = list.filter((item)=> {
          console.log(item);
          return item.author.toUpperCase().includes(action.payload.query.toUpperCase());
        });
      }

      return {
          ...state,
          search: results
      }*/
      return state.set('search', action.payload.query)
    }
    default:
      return state;
  }
}

export default data;