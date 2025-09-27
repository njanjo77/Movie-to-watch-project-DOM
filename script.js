document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector("#movie-list ul")
    const forms = document.forms

    // delete movies
    list.addEventListener("click", function (e) {
        if (e.target.className == 'deleteicon') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })
    list.addEventListener("click", function (e) {
        if (e.target.className == 'editicon') {
            const li = e.target.parentElement.parentElement;
            li.parentNode.editChild(li);
        }
    })

    //add movie
    const addMovieForm = forms['add-movie']
    addMovieForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // create elements
        const value = addMovieForm.querySelector('input[type="text"]').value;

        // check if the input is empty
        if (!value) {
            alert("Please enter a movie name!");
            return;
        }

        const container = document.getElementById('icon-container');
      //create first icon
      const editIcon = document.createElement('i');
      editIcon.classList.add('fa-solid', 'fa-pen-to-square');

        //create second icon
        const deleteicon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-trash');
        // create elements
        const li = document.createElement('li');
        const movieName = document.createElement('span')
        const editBtn = document.createElement('editicon')
        const deleteBtn = document.createElement('deleteicon')

        // adding content
        movieName.textContent = value;
        editBtn.textContent = editIcon;
        deleteBtn.textContent = deleteicon;

        // adding classes
        movieName.classList.add('name');
        editBtn.classList.add('edit');
        deleteBtn.classList.add('delete');

        // append to DOM
        li.appendChild(movieName);
        li.appendChild(editicon);
        li.appendChild(deleteicon);
        list.appendChild(li);
        // reset the form
        addMovieForm.reset();
    })

});