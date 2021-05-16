const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'be happy' },
        'task-2': { id: 'task-2', content: 'dont worry' },
        'task-3': { id: 'task-3', content: 'take a walk' },
        'task-4': { id: 'task-4', content: 'Cook ' },
        'task-6': { id: 'task-6', content: 'run' },
        'task-5': { id: 'task-5', content: 'travel' }
    },

    columns: {
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: ['task-5', 'task-6']
        },
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: []
        }
    },

    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData
