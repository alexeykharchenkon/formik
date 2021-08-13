import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '@styles/material';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Item } from '@common/types';

interface ItemComponentProps {
    item: Item;
    deleteItem: any;
    index: number;
}

export const ItemComponent = ({item, deleteItem, index} : ItemComponentProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
        <div>
          {index + 1}) {item.firstName} {item.lastName} {item.email}
        </div>
        <div>
          <IconButton 
            aria-label="delete"
            onClick={() => deleteItem(item.id)}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </div>
    </Card>
  );
}

