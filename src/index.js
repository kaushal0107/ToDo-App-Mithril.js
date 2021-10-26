import m from "mithril";
let root = document.getElementById("root");

let task;
let taskArray = [];
function newTask(data, index) {
  return m("div.task", [
    m("input[type=checkbox]"),
    m("span.title", data),
    m(
      "button.delete",
      {
        onclick: function () {
          taskArray.splice(index, 1);
        },
      },
      "Delete"
    ),
  ]);
}
m.mount(root, {
  view: function (scope) {
    return m("main", [
      m("div#inputWrap", [
        m("input[type=text]", {
          placeholder: "Enter the task..",
          id: "taskInp",
          value: task,
          oninput: function () {
            task = this.value;
          },
        }),
        m(
          "button#add",
          {
            onclick: function () {
              if (task) {
                taskArray.push(task);
                task = "";
              }
            },
          },
          "Add"
        ),
      ]),
      m(
        "div#taskWrap",
        [].concat(taskArray.map((data, index) => newTask(data, index)))
      ),
    ]);
  },
});
