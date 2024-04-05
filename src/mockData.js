import { v4 as uuidv4 } from "uuid";
const mockData = [
  {
    id: uuidv4(),
    title: "🗒️ Por hacer",
    tasks:[
        {
            id:uuidv4(),
            title: "Estudiar React js"
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
    id: uuidv4(),
    title: "🖋️ En progreso",
    tasks:[
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
    id: uuidv4(),
    title: "✅ Completado",
    tasks:[
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

export default mockData