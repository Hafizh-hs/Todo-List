let todos = [];

        function addTodo(){
            const txtInput = document.getElementById("InputTodo");
            todos.push({
                id: +new Date(),
                title: txtInput.value,
                status: false
            });
            txtInput.value = "";

            localStorage.setItem("todos",JSON.stringify(todos));
        
            renderTodoList();
            console.table(todos);
        }

        function deleteTodo(id){
            const index = todos.findIndex(todo => todo.id === id);
            todos.splice(index,1);
            localStorage.setItem("todos",JSON.stringify(todos));
        
            renderTodoList();

            }

        function updateTodoStatus(id){
            const index = todos.findIndex(todo => todo.id === id);
            todos[index].status = !todos[index].status;

            localStorage.setItem("todos",JSON.stringify(todos));
            renderTodoList();
            
        }
        function renderTodoList(){
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = "";

            todos.forEach(function(todo){
            todoList.innerHTML += `<tr>
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

        document.getElementById("btnAdd")
            .addEventListener("click",function(event){
                event.preventDefault();

                localStorage.setItem("todos",JSON.stringify(todos));
                addTodo();      
        });

        document.addEventListener("DOMContentLoaded",() => {

        todos = JSON.parse(localStorage.getItem("todos"));
        
        localStorage.setItem("todos",JSON.stringify(todos));

        renderTodoList();
    })              