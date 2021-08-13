import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '@common/store/actionCreators/itemsActions';
import '@styles/main.css'
import { ListComponent } from '@components/ListComponent';
import { FormComponent } from '@components/FormComponent';
import { Item } from '@common/types';

const mapStateToProps = (state: any) => ({
      items: state.itemsState.items,
});
const mapDispatchToProps = (dispatch: any) => ({
      itemsActions: bindActionCreators(itemsActions, dispatch),
});

interface AppProps {
  items: Item[];
  itemsActions: any;
}

const App = ({items, itemsActions}: AppProps) => {
  const { addItem, deleteItem } = itemsActions;

  return (
    <div className="app">
      <ListComponent items={items} deleteItem={deleteItem}/>
      <FormComponent addItem={addItem}/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)