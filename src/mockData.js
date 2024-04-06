// Importa la función v4 de la librería UUID para generar identificadores únicos
import { v4 as uuidv4 } from "uuid";

// Define un conjunto de datos de ejemplo para inicializar el tablero kanban
const mockData = [
  {
    // Crea un objeto para la primera columna "Por hacer"
    id: uuidv4(), // Genera un identificador único para la columna
    title: "🗒️ Por hacer", // Título de la columna
    tasks:[ // Lista de tareas dentro de la columna
        {
            id:uuidv4(), // Genera un identificador único para la tarea
            title: "Estudiar React js" // Título de la tarea
        },
        {
            id:uuidv4(),
            title: "Estudiar HTML5"
        },
        {
            id:uuidv4(),
            title: "Estudiar CSS3"
        },
    ]
  },
  {
    // Crea un objeto para la segunda columna "En progreso"
    id: uuidv4(), // Genera un identificador único para la columna
    title: "🖋️ En progreso", // Título de la columna
    tasks:[ // Lista de tareas dentro de la columna
        {
            id:uuidv4(),
            title: "Curso React codigo369"
        },
        {
            id:uuidv4(),
            title: "Curso HTML5 codigo369"
        },
        {
            id:uuidv4(),
            title: "Curso CSS3 codigo369"
        },
    ]
  },
  {
    // Crea un objeto para la tercera columna "Completado"
    id: uuidv4(), // Genera un identificador único para la columna
    title: "✅ Completado", // Título de la columna
    tasks:[ // Lista de tareas dentro de la columna
        {
            id:uuidv4(),
            title: "Curso Sap Abab"
        },
        {
            id:uuidv4(),
            title: "Curso Peliculas codigo369"
        },
        {
            id:uuidv4(),
            title: "Curso Angular codigo369"
        },
    ]
  },
];

// Exporta el conjunto de datos de ejemplo
export default mockData;
