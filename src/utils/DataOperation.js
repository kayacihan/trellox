import { useContext } from "react";
import uuid from '../utils/uuid'

export default function DataOperation(params) {
    const data = params.data.data
    const columnid = uuid()
    const taskid = uuid()

    switch (params.reducer) {
        case "ADD_NEW_COLUMN":
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
        case "ADD_NEW_CARD":
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
        case "EDIT_CARD":
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
        default:
            return {}
    }
}
