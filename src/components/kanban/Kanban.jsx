// Importa los componentes necesarios de react-beautiful-dnd para implementar el drag and drop
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// Importa un conjunto de datos de ejemplo para inicializar el tablero kanban
import mockData from "../../mockData";
// Importa el componente Card para representar visualmente cada tarea en el tablero kanban
import { Card } from "../card/Card";
// Importa el hook useState de React para manejar el estado local del componente
import { useState } from "react";
// Importa los estilos CSS para el tablero kanban
import "./kanban.scss";

// Define el componente funcional Kanban
export function Kanban() {
  // Declara el estado local 'data' inicializado con los datos de ejemplo 'mockData'
  const [data, setData] = useState(mockData);

  // Función que se ejecuta cuando finaliza el arrastre de un elemento
  const onDragEnd = (result) => {
    // Si no hay un destino, sal del evento
    if (!result.destination) return;
    // Obtiene la fuente y el destino del resultado del arrastre
    const { source, destination } = result;

    // Si el origen y el destino son diferentes columnas
    if (source.droppableId !== destination.droppableId) {
      // Crea una copia de los datos
      const newData = Array.from(data);
      // Encuentra los índices de la columna de origen y destino en los datos
      const sourceColIndex = newData.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = newData.findIndex((e) => e.id === destination.droppableId);

      // Copia las tareas de las columnas de origen y destino
      const sourceTask = [...newData[sourceColIndex].tasks];
      const destinationTask = [...newData[destinationColIndex].tasks];

      // Elimina la tarea del origen y la inserta en el destino
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      // Actualiza las tareas en los datos
      newData[sourceColIndex].tasks = sourceTask;
      newData[destinationColIndex].tasks = destinationTask;

      // Actualiza el estado 'data' con los nuevos datos
      setData(newData);
    }
  };

  // Renderiza el componente Kanban
  return (
    // Proporciona el contexto global de arrastrar y soltar
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {/* Itera sobre cada sección (columna) en los datos del tablero */}
        {data.map((section) => (
          // Define una zona donde se pueden soltar las tareas
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              // Aplica la referencia proporcionada al elemento DOM
              <div
                {...provided.droppableProps}
                className="kanban_section"
                ref={provided.innerRef}
              >
                {/* Renderiza el título de la columna */}
                <div className="kanban_section_title">{section.title}</div>
                {/* Renderiza las tareas dentro de la columna */}
                <div className="kanban_section_content">
                  {section.tasks.map((task, index) => (
                    // Define cada tarea individual que se puede arrastrar
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        // Aplica la referencia y las propiedades del manejador de arrastre al elemento DOM
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // Aplica estilos adicionales mientras se arrastra la tarea
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          {/* Renderiza visualmente cada tarea */}
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
