let textArea = document.getElementById("textarea");
let count = document.getElementById("count");

let countWords = (str) => {
    return str.split(' ')
        .filter(function (n) {
            return n != ''
        })
        .length;
}

document.getElementById("textarea").addEventListener("input", (event) => {
    let typedWords = textArea.value;
    let typedWordsCount = countWords(typedWords)
    count.innerHTML = parseFloat(typedWordsCount);

    let expectedCount = 20;
    let percentageWidth = typedWordsCount / expectedCount * 100
    document.getElementById("progress").style.width=percentageWidth + "%";
    //let progressbar=document.getElementById("progress").clientWidth;
});

/* let getSelect = () => {

    let htext = window.getSelection();
    let range = htext.getRangeAt(0);

    console.log(htext);
} */
function alertMe(){
    let selection=(textArea.value).substring(textArea.selectionStart,textArea.selectionEnd);
   
   console.log(selection);
    

}

document.getElementById("bold").addEventListener("click",alertMe);

function ToolBar(){

    this.selection=(textArea.value).substring(textArea.selectionStart,textArea.selectionEnd);

    this.bold=document.getElementById("bold");
    this.italics=document.getElementById("italics");
    this.underline=document.getElementById("underline");
    this.allignLeft=document.getElementById("allign-left");
    this.increaseFont=document.getElementById("increase-font");
    this.reduceFont=document.getElementById("reduce-font");
    this.delete=document.getElementById("delete");

    this.style=()=>{
        this.bold.addEventListener("click",()=>{
            this.selection.classList.add()
        })
    }
}