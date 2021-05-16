import { useContext } from "react";
import uuid from '../utils/uuid'

export default function DataOperation(params) {
    const data = params.data.data
    const columnid = uuid()
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
        default:
            return {}
    }
}
