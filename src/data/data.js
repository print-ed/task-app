let tasks = {
    backlog: {
        title: "backlog",
        items: [
            {
                id: '1',
                title: "testing",
            },
        ],
    },
    pending: {
        title: "pending",
        items: [],
    },
    ongoing: {
        title: "ongoing",
        items: [],
    },
    completed: {
        title: "completed",
        items: [],
    },
};

//👇🏻 host the tasks object via the /api route
export default tasks;