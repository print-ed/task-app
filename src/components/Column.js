import React from 'react';
import styled from 'styled-components';
import Task from './Task';
import {Droppable} from 'react-beautiful-dnd';

// Styled Components
const Container = styled.div`
    margin: 5px;
    border: 1px solid black;
    border-radius: 2px;
    width: 25%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 5px;
    margin: 0;
    background-color: lightblue;
`;

const TaskList = styled.div`
    padding: 5px;
    background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'lightgrey')};
    flex-grow: 1;
    min-height: 100px;
`;

// Class to handle a more optimized performance with shouldComponentUpdate
class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) {
            return false;
        }
        return true;
    }
    render() {
        return this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index}/>
        ));
    }
}

class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                {/* maps through tasks contents*/}
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.isDropDisabled}
                >
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {/* {this.props.tasks.map((task, index) => (<Task key={task.id} task={task} index={index} />))} Code is not optimized */}
                        {/* Below is the more optimized code */}
                        <InnerList tasks={this.props.tasks}/>
                        {provided.placeholder}
                    </TaskList>
                )}
                </Droppable>
            </Container>
        );
    }
}

export default Column;