AOS.init({
  delay: 200
});

var content = document.getElementById('content');

let num = 1;

let idCheck = 0;

var idContentOptions = 0;

var idAddOptions = 0;

var demoQuestion = document.getElementById('questionContent');


function createQuestionOpen() {

  content.innerHTML += `
      <div class="col-4 py-4 delete" data-aos="fade-right">
        <div class="d-flex align-items-center justify-content-center">
          <label class="form-label fw-bolder m-0 p-0">${num++}.</label>
          <input type="text" class="border-0 border-bottom form-control form-control-sm mx-2" placeholder="Edit here">
        </div>

        <div class="text-end">
          <button onclick="deleteItems();" type="button" class="btn btn-sm text-danger my-2" ><i class="bi bi-trash-fill"></i></i></button>
        </div>
      </div>
      `
      window.scrollTo(0, document.body.scrollHeight);
}

function createQuestionRadio() {

    
  idContentOptions++;

  content.innerHTML += `
  <div class="col-4 py-4 delete" data-aos="fade-right">
    <div class="d-flex align-items-center justify-content-center">
      <label class="form-label fw-bolder m-0 p-0">${num++}.</label>
      <input class="border-0 border-bottom form-control form-control-sm mx-2" placeholder="Question here">
    </div>

    <div id="${idContentOptions}"></div>

    <button onclick="addOption();" id="addOption" type="button" class="btn btn-sm text-primary my-2 p-0 m-0" >Add Option</button>

    <div class="text-end">
      <button onclick="deleteItems();" type="button" class="btn btn-sm text-danger my-2" ><i class="bi bi-trash-fill"></i></button>
    </div>
  </div>
  `
  window.scrollTo(0, document.body.scrollHeight);
}

function addOption() {

  var idContent = document.getElementById(idContentOptions);

  idContent.innerHTML += `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault_${idCheck++}">
      <input class="border-0 border-bottom form-control form-control-sm" placeholder="Option here">
    </div>
  </div>
  `;

  console.log(idContent.textContent);

  
if (idCheck >= 10) {

  var numOption = 0;

  disabledOption = document.getElementById('addOption');

  disabledOption.disabled = true;

  idCheck = 0;

  disabledOption.id = `addOption_${numOption}`;

  console.log(numOption);

}

window.scrollTo(0, document.body.scrollHeight);


}



function deleteItems() {

  let delete_item = document.getElementsByClassName('delete');

  var current_items = delete_item;
  for (var i = 0; i < current_items.length; i++) {
    current_items[i].onclick = function () {
      this.parentNode.removeChild(this);
    }
  }

  num = 1;

}