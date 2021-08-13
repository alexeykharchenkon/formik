import { bindActionCreators } from 'redux';
import * as itemsActions from '@common/store/actionCreators/itemsActions';
import { Item } from '@common/types';

  
export const mapStateToProps = (state: any) => ({
      items: state.itemsState.items,
});

 export const mapDispatchToProps = (dispatch: any) => ({
      itemsActions: bindActionCreators(itemsActions, dispatch),
});