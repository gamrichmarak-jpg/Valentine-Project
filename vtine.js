
const valentine = {
    state: "start",
    DOM: document.querySelector(".pic"),
    txt: document.querySelector(".para"),

    transition () {
       this.state = "accepted"  
       this.DOM.src = "200.gif"

       let msg = "";
       if (this.state === "wrong") msg = "NOOOOO !!!!!";
       else msg = "YAAYYYYYYY !!!!!!"
       this.txt.textContent = msg;
       
    }
}
document.querySelector(".Yes").addEventListener("click", () => {
    valentine.transition();
});

const noBtn = document.querySelector(".No");
const yesBtn = document.querySelector(".Yes");

let esp = 0;
 function moveNo() {
    esp ++;

    const x = Math.random() * 300 - 230;
    const y = Math.random() * 100 - 50;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    const scale = Math.min (1 + esp * 0.1, 1.6);
    yesBtn.style.transform = `scale(${scale})`;

}
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);
