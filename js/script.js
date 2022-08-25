 let todos = [];

        function addTodo(){
            const txtInput = document.getElementById("InputTodo");
            todos.push({
                id: +new Date(),
                title: txtInput.value,
                status: false
            });
            txtInput.value = "";

            localStorage.setItem("todoList",JSON.stringify(todos));
        
            renderTodoList();
            console.table(todos);
        }

        function deleteTodo(id){
            const index = todos.findIndex(todo => todo.id === id);
            todos.splice(index,1);
            localStorage.setItem("todoList",JSON.stringify(todos));
        
            renderTodoList();

            }

        function updateTodoStatus(id){
            const index = todos.findIndex(todo => todo.id === id);
            todos[index].status = !todos[index].status;

            localStorage.setItem("todoList",JSON.stringify(todos));
            renderTodoList();
// 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
            
        }
        function renderTodoList(){
        todos.forEach(function(todo){
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = "";
            todoList.innerHTML += `tr>
                            <td width="10%">
                                <input type="checkbox" 
                                ${todo.status === true?"checked":""}
                                class="form-check-input" 
                                onclick="updateTodoStatus(${todo.id})"></td>
                            <td class="${todo.status === true?"text-decoration-line-through":""}">${todo.title}</td>
                            <td width="10%"><button ${todo.status===false?"disabled":""} class="btn btn-danger" onclick="deleteTodo(${todo.id})">Delete</button></td>
                        </tr>`;
        })
    }

        // function renderTodoList(){
        //     const todoList = document.getElementById("todo-list");
        //     todoList.innerHTML = "";
        //     for (const todo of todos) {
                // todoList.innerHTML += `<tr>
                //             <td width="10%">
                //                 <input type="checkbox" 
                //                 ${todo.status === true?"checked":""}
                //                 class="form-check-input" 
                //                 onclick="updateTodoStatus(${todo.id})"></td>
                //             <td class="${todo.status === true?"text-decoration-line-through":""}">${todo.title}</td>
                //             <td width="10%"><button ${todo.status===false?"disabled":""} class="btn btn-danger" onclick="deleteTodo(${todo.id})">Delete</button></td>
                //         </tr>`;
        //     }
        //     console.log(todos);
        // }

        document.getElementById("btnAdd")
            .addEventListener("click",function(event){
                event.preventDefault();

                localStorage.setItem("todoList",JSON.stringify(todos));
                addTodo();      
        });

        document.addEventListener("DOMContentLoaded",() => {

        todos = JSON.parse(localStorage.getItem("todoList"));
        
        localStorage.setItem("todoList",JSON.stringify(todos));

        renderTodoList();
    })              