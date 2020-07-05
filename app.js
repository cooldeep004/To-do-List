
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addText = document.getElementById('addText');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";

    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
<div class="notecard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${index + 1}<h5>
                    
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger" >Delete Note </button>
                </div>
            </div>
`
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else
        notesElm.innerHTML = `Nothing to show add above`;

}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}



let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputval = search.value;
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;

        if (cardtxt.includes(inputval))
            element.style.display = "block";
        else
            element.style.display = "none";

    });
});

