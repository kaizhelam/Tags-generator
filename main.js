let input = document.getElementById("myInput");
let listArr = [];
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){  // enter keyboard
        if(input.value != ''){
            let inValue = e.target.value;
            listArr.push(inValue.replace(/\s/g, ''));
            let newTagLi = '';
            listArr.forEach((element, index) => {
                newTagLi += `<span># ${element}<i class="fa fa-times" onclick="ondelete(${index})"></i></span>`;
            }) ;
            document.querySelector('.tags').innerHTML = newTagLi;
            input.value = '';
        }else{
            alert("Please input something");
        }
    }
})

function ondelete(index){
    listArr.splice(index, 1);
    let newTagLi = '';
    listArr.forEach((element, index) => {
        newTagLi += `<span># ${element}<i class="fa fa-times" onclick="ondelete(${index})"></i></span>`;
    });
    document.querySelector('.tags').innerHTML = newTagLi;
}