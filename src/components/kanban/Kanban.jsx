// import "./kanban.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { Card } from "../card/Card";
import { useState } from "react";
import "./kanban.scss";
export function Kanban() {
    const [data, setData] = useState(mockData);
  
    const onDragEnd = (result) => {
      if (!result.destination) return;
      const { source, destination } = result;
  
      if (source.droppableId !== destination.droppableId) {
        const newData = Array.from(data);
        const sourceColIndex = newData.findIndex((e) => e.id === source.droppableId);
        const destinationColIndex = newData.findIndex((e) => e.id === destination.droppableId);
  
        const sourceTask = [...newData[sourceColIndex].tasks];
        const destinationTask = [...newData[destinationColIndex].tasks];
  
        const [removed] = sourceTask.splice(source.index, 1);
        destinationTask.splice(destination.index, 0, removed);
  
        newData[sourceColIndex].tasks = sourceTask;
        newData[destinationColIndex].tasks = destinationTask;
  
        setData(newData);
      }
    };
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban">
          {data.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className="kanban_section"
                  ref={provided.innerRef}
                >
                  <div className="kanban_section_title">{section.title}</div>
                  <div className="kanban_section_content">
                    {section.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : "1",
                            }}
                          >
                            <Card>{task.title}</Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    );
  }