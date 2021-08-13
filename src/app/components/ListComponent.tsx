import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Item } from '@common/types';
import { ItemComponent } from '@components/ItemComponent';

interface ListComponentProps {
    items: Item[];
    deleteItem: any;
}

export const ListComponent = ({items, deleteItem } : ListComponentProps) => {
    return (
        <div className="list">
            <Typography variant="h5">The List</Typography>
            <ul className="list_body">
                {items?.map((item, index) => (
                    <li key={item.id}>
                        <ItemComponent 
                            index={index}
                            item={item} 
                            deleteItem={deleteItem}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}