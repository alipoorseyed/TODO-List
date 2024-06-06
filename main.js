let todo_add_button = document.getElementsByClassName("To-do-add-button")[0];
let todo_add_div = document.getElementsByClassName("To-do-add-div")[0];
let todo_pic = document.getElementsByClassName("To-do-pic")[0];
let todo_priority_tag = document.getElementsByClassName("tags")[0];
let todo_priority_div = document.getElementsByClassName("priority")[0];
let todo_priority_low = document.getElementsByClassName("priority-low")[0];
let todo_priority_medium = document.getElementsByClassName("priority-medium")[0];
let todo_priority_high = document.getElementsByClassName("priority-high")[0];
let todo_submit = document.querySelector(".down div");
let input_title = document.querySelector(".up input:nth-child(1)");
let input_def= document.querySelector(".up input:nth-child(2)");
let Todo_item_span = document.getElementsByClassName("ToDO-List-item-span")[0];
let task_todo_text = document.querySelector(".To-do-title p")




let todo_list_items = [];
let prioritystring = "";
let counter = 0;




todo_add_button.addEventListener("click",todo_add_popup);

function todo_add_popup(){
    todo_add_div.classList.toggle("To-do-add-div-show");
    todo_pic.classList.toggle("To-do-pic-show");
    todo_priority_div.classList.remove("To-do-priority-show");
    todo_priority_tag.classList.remove("To-do-tag-show");
    todo_priority_tag.classList.remove("transform90");
    input_title.value = "";
    input_def.value = "";

    if(document.getElementsByClassName("new_priority_tag")[0]!==undefined){
        document.getElementsByClassName("new_priority_tag")[0].remove();
    }

    if(todo_list_items.length!==0){
        todo_pic.classList.add("To-do-pic-show");
    }
}






todo_priority_tag.addEventListener("click",todo_priority_popup);


function todo_priority_popup(){
    todo_priority_div.classList.toggle("To-do-priority-show");
    todo_priority_tag.classList.toggle("transform90");
}






todo_priority_high.addEventListener("click",todo_add_priority);
todo_priority_medium.addEventListener("click",todo_add_priority);
todo_priority_low.addEventListener("click",todo_add_priority);

function todo_add_priority(event){


    if(input_def.value.trim() !== "" || input_title.value.trim() !== ""){
        todo_submit.classList.add("down-bagcolor");
    }
    
    prioritystring = event.target.innerHTML;

    let new_priority_tag = document.createElement("div");
    let new_priority_tag_p = document.createElement("p");
    let new_priority_tag_img = document.createElement("img");

    new_priority_tag_p.innerText = prioritystring;
    new_priority_tag_img.src = "./images/close-circle.svg";
    new_priority_tag.appendChild(new_priority_tag_img);
    new_priority_tag.appendChild(new_priority_tag_p);

    let computedStyle = window.getComputedStyle(event.target);
    new_priority_tag.style.backgroundColor = computedStyle.backgroundColor;
    new_priority_tag.style.color = computedStyle.color;
    
    new_priority_tag.setAttribute("class","new_priority_tag");
    todo_priority_tag.parentNode.appendChild(new_priority_tag);

    new_priority_tag_img.addEventListener("click",function(){
        new_priority_tag.remove();
        todo_priority_tag.classList.remove("To-do-tag-show");
        todo_submit.classList.remove("down-bagcolor");
    });

    todo_priority_div.classList.remove("To-do-priority-show");
    todo_priority_tag.classList.add("To-do-tag-show");
    todo_priority_tag.classList.remove("transform90");

}





input_def.addEventListener("input", checkfuncion);
input_title.addEventListener("input" , checkfuncion);

function checkfuncion(){
    if(input_def.value.trim() !== "" && input_title.value.trim() !== "" && document.getElementsByClassName("new_priority_tag")[0]!==undefined){
        todo_submit.classList.add("down-bagcolor");
    }else{
        todo_submit.classList.remove("down-bagcolor");
    }
}






todo_submit.addEventListener("click",todo_add_submit);

function todo_add_submit(){
    if(input_def.value.trim() === "" || input_title.value.trim() === "" || document.getElementsByClassName("new_priority_tag")[0]===undefined){
        alert("شما باید نام تسک و توضیحات را وارد کنید و اولویت خود را انتخاب کنید .");
        return;
    }

    let todoList_span_div = document.createElement("div");
    let todoList_span_div_right = document.createElement("div");
    let todoList_span_div_left = document.createElement("div");
    let todoList_span_div_left_image = document.createElement("img");
    todoList_span_div_left_image.src = "./images/Frame 33317.svg"
    let todoList_span_div_right_line = document.createElement("div");
    let todoList_span_div_right_def = document.createElement("div");
    let todoList_span_div_right_def_top = document.createElement("div");
    let todoList_span_div_right_def_bottom = document.createElement("p");
    let todoList_span_div_right_def_top_check = document.createElement("input");
    todoList_span_div_right_def_top_check.type = "checkbox";
    let todoList_span_div_right_def_top_h4 = document.createElement("h4");
    let todoList_span_div_right_def_top_priority = document.getElementsByClassName("new_priority_tag")[0].cloneNode(true);
    todoList_span_div_right_def_top_priority.className = "priority_in_list";
    let image = todoList_span_div_right_def_top_priority.querySelector("img");
    let priority_value = todoList_span_div_right_def_top_priority.querySelector("p");
    image.remove();


    todoList_span_div_right_def_top_h4.innerHTML = input_title.value;
    todoList_span_div_right_def_bottom.innerHTML = input_def.value;


    todoList_span_div.appendChild(todoList_span_div_right);
    todoList_span_div.appendChild(todoList_span_div_left);
    todoList_span_div_right.appendChild(todoList_span_div_right_line);
    todoList_span_div_right.appendChild(todoList_span_div_right_def);
    todoList_span_div_right_def.appendChild(todoList_span_div_right_def_top);
    todoList_span_div_right_def.appendChild(todoList_span_div_right_def_bottom);
    todoList_span_div_right_def_top.appendChild(todoList_span_div_right_def_top_check);
    todoList_span_div_right_def_top.appendChild(todoList_span_div_right_def_top_h4);
    todoList_span_div_right_def_top.appendChild(todoList_span_div_right_def_top_priority);
    todoList_span_div_left.appendChild(todoList_span_div_left_image);

    todoList_span_div.setAttribute("class" , "todoList_span_div");
    todoList_span_div_right.setAttribute("class" , "todoList_span_div_right");
    todoList_span_div_right_line.setAttribute("class" , "todoList_span_div_right_line");
    todoList_span_div_right_def.setAttribute("class" , "todoList_span_div_right_def");
    todoList_span_div_right_def_top.setAttribute("class" , "todoList_span_div_right_def_top");
    todoList_span_div_left.setAttribute("class" , "todoList_span_div_left");
    console.log(todoList_span_div);

    todoList_span_div_right_line.style.backgroundColor = document.getElementsByClassName("new_priority_tag")[0].style.backgroundColor;


    let editremove_span_div = document.createElement("div")
    let trash_image = document.createElement("img");
    let edit_image = document.createElement("img");
    let editremove_line = document.createElement("div");
    trash_image.src = "./images/tabler_trash-x.svg"
    edit_image.src = "./images/tabler_edit.svg"
    editremove_span_div.appendChild(trash_image);
    editremove_span_div.appendChild(editremove_line);
    editremove_span_div.appendChild(edit_image);
    editremove_span_div.setAttribute("class","editremove_span_div");
    todoList_span_div_left.appendChild(editremove_span_div);






    todoList_span_div_left_image.addEventListener("click" , editremove);
    function editremove(){
        editremove_span_div.classList.toggle("editremove_span_div_show");
    }

    // todoList_span_div.setAttribute("id" , `${counter}`);
    // counter++;


    // Todo_item_span.appendChild(todoList_span_div);


    let index = -1;
     for(let i=0 ; i<todo_list_items.length ; i++){
          let priority_value_index = todo_list_items[i].querySelector(".todoList_span_div_right .todoList_span_div_right_def_top div p"); 
          if(priority_value.innerHTML==="بالا"){
            if(priority_value_index.innerHTML==="متوسط" || priority_value_index.innerHTML==="پایین"){
                index = i;
                break;
            }
          }else if(priority_value.innerHTML==="متوسط"){
            if(priority_value_index.innerHTML==="پایین"){
                index = i;
                break;
            }
          }
     }

     if(index===-1){
        todo_list_items.push(todoList_span_div);
     }else{
        todo_list_items.splice(index,0,todoList_span_div);
     }

    

    // todo_list_items.push(todoList_span_div);
    task_todo_text.innerHTML = `${todo_list_items.length} تسک را باید انجام دهید .`;

    for (let i = 0; i < todo_list_items.length; i++) {
        Todo_item_span.appendChild(todo_list_items[i]);
    }

}