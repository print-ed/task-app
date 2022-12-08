import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import tasks from "../data/data";

const TasksContainer = () => {
    const [task, setTasks] = useState({});

    useEffect(() => {
        setTasks(tasks)
    },[]);

    const handleDragEnd = ({ destination, source }) => {
        if (!destination) return;
        if (
            destination.index === source.index &&
            destination.droppableId === source.droppableId
        )
            return;

        const itemMoved = {
            ...task[source.droppableId].items[source.index],
        };
        task[source.droppableId].items.splice(source.index, 1);
        task[destination.droppableId].items.splice(destination.index, 0, itemMoved);
    };

    return (
        <div className='container'>
            <DragDropContext onDragEnd={handleDragEnd}>
                {Object.entries(task).map((task) => (
                    <div
                        className={`${task[1].title.toLowerCase()}__wrapper`}
                        key={task[1].title}
                    >
                         <h3>{task[1].title} Tasks</h3>
                         <div className={`${task[1].title.toLowerCase()}__container`}>
                            <Droppable droppableId={task[1].title}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {task[1].items.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`${task[1].title.toLowerCase()}__items`}
                                                    >
                                                        <p>{item.title}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                         </div>
                    </div>
                ))}
            </DragDropContext>
        </div>
    );
};

export default TasksContainer;