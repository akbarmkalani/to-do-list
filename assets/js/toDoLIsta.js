document.querySelector('#add').onclick = function(){
    if(inputTO = document.querySelector('#newtext>input').value.length == 0){
    inputTO.value = ""    
    alert("Please Enter text Name!")
    } else{
        document.querySelector('#writhText').innerHTML += `
            <ul class="_li-text">
                <li id="taskname">
                    ${document.querySelector('#newtext>input').value}
                </li>
                <button class="delete">
                Delete
                </button>
            </ul>
        `;

        var _texts = document.querySelectorAll(".delete");
        for(let  i=0; i<_texts.length; i++){
            _texts[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}