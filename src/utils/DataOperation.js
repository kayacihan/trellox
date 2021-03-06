///// using data operations
//////////////////////////////////////////////
import uuid from '../utils/uuid'

// to avoid string typing error and as a list of operations
const reducer = {
    ADD_NEW_COLUMN: "ADD_NEW_COLUMN",
    ADD_NEW_CARD: "ADD_NEW_CARD",
    EDIT_CARD: "EDIT_CARD",
    DELETE_CARD: "DELETE_CARD",
    EDIT_COLUMN: "EDIT_COLUMN",
    DELETE_COLUMN: "DELETE_COLUMN",
}

// data operations
const operation = (params) => {
    const data = params.data.data
    const columnid = uuid()
    const taskid = uuid()

    switch (params.reducer) {
        case reducer.ADD_NEW_COLUMN:
            return ({
                ...data,
                columns: {
                    ...data.columns,
                    [columnid]: {
                        id: columnid,
                        title: params.data.title,
                        taskIds: []
                    }
                },
                columnOrder: data.columnOrder.concat([columnid])

            })
        case reducer.ADD_NEW_CARD:
            return ({
                ...data,
                tasks: {
                    ...data.tasks,
                    [taskid]: {
                        id: taskid,
                        content: params.data.content
                    }
                },
                columns: {
                    ...data.columns,
                    [params.data.columnid]: {
                        ...data.columns[params.data.columnid],
                        taskIds: data.columns[params.data.columnid].taskIds.concat([taskid])
                    }
                }
            })
        case reducer.EDIT_CARD:
            return ({
                ...data,
                tasks: {
                    ...data.tasks,
                    [params.data.taskid]: {
                        id: params.data.taskid,
                        content: params.data.content
                    }
                }
            })
        case reducer.DELETE_CARD:
            return ({
                ...data,
                tasks: Object.keys(data.tasks)
                    .filter(task => task !== params.data.taskid)
                    .reduce((obj, key) => {
                        obj[key] = data.tasks[key];
                        return obj;
                    }, {}),
                columns: {
                    ...data.columns,
                    [params.data.columnid]: {
                        ...data.columns[params.data.columnid],
                        taskIds: data.columns[params.data.columnid].taskIds.filter(task => task !== params.data.taskid)
                    }
                }
            })
        case reducer.EDIT_COLUMN:
            return ({
                ...data,
                columns: {
                    ...data.columns,
                    [params.data.columnid]: {
                        ...data.columns[params.data.columnid],
                        title: params.data.title
                    }
                },
            })
        case reducer.DELETE_COLUMN:
            return ({
                ...data,
                tasks: Object.keys(data.tasks)
                    .filter(task => !data.columns[params.data.columnid].taskIds.includes(task))
                    .reduce((obj, key) => {
                        obj[key] = data.tasks[key];
                        return obj;
                    }, {}),
                columns: Object.keys(data.columns)
                    .filter(column => column !== params.data.columnid)
                    .reduce((obj, key) => {
                        obj[key] = data.columns[key];
                        return obj;
                    }, {}),
                columnOrder: data.columnOrder.filter(column => column !== params.data.columnid)
            })
        default:
            return {}
    }
}


export { operation, reducer }