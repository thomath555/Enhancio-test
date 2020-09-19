import React, { useEffect, useState } from 'react'
import SingleField from '../../SingleField/index,'
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = sortableElement(({ item, test, isRecycleBin, removeItemHandler }) => (
    <li>
        <DragHandle />
        <SingleField {...{ ...item, index: test, isRecycleBin, removeItemHandler, isStandardField: true }} />
    </li>
));

const SortableContainer = sortableContainer(({ children }) => {
    return <ul className = 'filed-wrapper'>{children}</ul>;
});

const FieldWrapper = ({ fields = [], isRecycleBin, removeItemHandler }) => {
    const [items, setItem] = useState(fields);

    useEffect(() => {
        setItem(fields)
    }, [fields])

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const newItems = arrayMove(items, oldIndex, newIndex);
        setItem(newItems);
    };
    return (
        <SortableContainer onSortEnd={onSortEnd} useDragHandle axis = 'xy'>
            {items.map((item, index) => {
                console.log(index)
               return <SortableItem key={`item-${index}`} {...{ item, test:index, index, isRecycleBin, removeItemHandler }} />
            })}
        </SortableContainer>
    );
};


export default FieldWrapper