document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul");
    const forms = document.forms;

    // delete movies
    list.addEventListener("click", function (e) {
        if (e.target.closest(".delete")) {
            const li = e.target.closest("li");
            li.remove();
        }
    });

    // edit/save movies
    list.addEventListener("click", function (e) {
        const editBtn = e.target.closest(".edit");
        if (editBtn) {
            const li = editBtn.closest("li");
            const isEditing = li.classList.contains("editing");

            if (!isEditing) {
                // switch to editing mode
                const span = li.querySelector(".name");
                const input = document.createElement("input");
                input.type = "text";
                input.value = span.textContent;
                input.classList.add("edit-input");

                li.replaceChild(input, span);
                li.classList.add("editing");
                editBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
                input.focus();
            } else {
                // save changes
                const input = li.querySelector(".edit-input");
                const newSpan = document.createElement("span");
                newSpan.textContent = input.value.trim() || "Untitled Movie";
                newSpan.classList.add("name");

                li.replaceChild(newSpan, input);
                li.classList.remove("editing");
                editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            }
        }
    });

    // add movie
    const addMovieForm = forms['add-movie'];
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = addMovieForm.querySelector('input[type="text"]').value.trim();
        if (!value) {
            alert("Please enter a movie name!");
            return;
        }

        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const iconContainer = document.createElement('div');
        const editBtn = document.createElement('span');
        const deleteBtn = document.createElement('span');

        movieName.textContent = value;
        movieName.classList.add('name');

        iconContainer.id = "icon-container";

        editBtn.classList.add('edit');
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

        deleteBtn.classList.add('delete');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        iconContainer.appendChild(editBtn);
        iconContainer.appendChild(deleteBtn);

        li.appendChild(movieName);
        li.appendChild(iconContainer);
        list.appendChild(li);

        addMovieForm.reset();
    });
});