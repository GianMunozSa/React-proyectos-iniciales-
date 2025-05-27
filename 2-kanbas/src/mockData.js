import {v4 as uuidv4} from 'uuid'

const mockData=[
    {
        id:uuidv4(),
        title:"Por Hacer",
        tasks: [
            {
                id:uuidv4(),
                title:"Estudiar javaScript"
            },
                        {
                id:uuidv4(),
                title:"Estudiar HTML"
            },
                        {
                id:uuidv4(),
                title:"Estudiar CSS"
            },
        ]
    },
    {
        id:uuidv4(),
        title:"En Progreso",
        tasks: [
            {
                id:uuidv4(),
                title:"Curos javaScript"
            },
                        {
                id:uuidv4(),
                title:"Curso HTML"
            },
                        {
                id:uuidv4(),
                title:"Curso CSS"
            },
        ]

    },
    {
        id:uuidv4(),
        title:"Completado",
        tasks: [
            {
                id:uuidv4(),
                title:"javaScript"
            }
        ]

    }
];

export default mockData;