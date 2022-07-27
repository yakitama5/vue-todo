export const state = () => ({
    list: [
        {
            id: "hogehoge",
            title: "ほげほげする",
            completed: false,
        },
        {
            id: "fugafuga",
            title: "ふがふがする",
            completed: false,
        },
    ]
})

export const mutations = {
    add(state, text) {
        let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
        for (let i = 0, len = chars.length; i < len; i++) {
            switch (chars[i]) {
                case "x":
                    chars[i] = Math.floor(Math.random() * 16).toString(16);
                    break;
                case "y":
                    chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                    break;
            }
        }

        const uuid = chars.join("");

        state.list.push({
            id: uuid,
            title: text,
            completed: false
        });
    },
    remove(state, { todo }) {
        state.list = [...state.list.filter(e => e.id != todo.id)];
    },
    toggle(state, todo) {
        state.list = [...state.list.map(function (e) {
            e.completed = (e.id == todo.id) ? !e.completed : e.completed;
            return e;
        })];
    }
}