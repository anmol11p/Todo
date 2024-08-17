   export const getlocalstoragedata = () => {
        const rawTodos = localStorage.getItem("tasks");
        if (!rawTodos) {
          return [];
        } else {
          return JSON.parse(rawTodos);
        }
      };
 
      export const setlocalstoragedata = (task) => {
        return localStorage.setItem("tasks", JSON.stringify(task));

      };