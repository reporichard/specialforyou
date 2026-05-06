onload = () => {
    document.body.classList.remove("not-loaded");
};

// =========================
// BGM
// =========================
const bgm = document.getElementById("bgm");

// volume awal kecil
bgm.volume = 0;

// autoplay + fade in
window.addEventListener("load", () => {

    bgm.play();

    let volume = 0;

    const fade = setInterval(() => {

        if(volume < 0.35){

            volume += 0.01;

            bgm.volume = volume;

        } else {

            clearInterval(fade);

        }

    }, 200);

});

// fallback autoplay mobile/browser
document.body.addEventListener("click", () => {
    bgm.play();
}, { once: true });


// =========================
// TEXT
// =========================
const text = `「思思～

今天過得怎麼樣？還好嗎～🌸

其實我很想送妳真正的花，
但因為我們距離太遠了，
所以我只能先做這個送給妳 嘻嘻

從我們那天拉勾約定了
「信任拉勾約定」之後，
我就一直很想誠實地跟妳說一些話。

妳讓我開始每天期待妳的訊息、
期待妳的出現。

我還記得妳說過，
有時候因為工作不能一直玩手機、
不能常常上線。

沒關係的，
我真的能理解，
而且我反而很珍惜妳還願意努力回覆我的訊息。

這也是讓我越來越喜歡妳的原因之一。

我喜歡跟妳聊天，
喜歡妳的小情緒，
也喜歡妳偶爾撒嬌的樣子。

老實說，
不知不覺中，
妳已經慢慢走進我的心裡了。

我不知道未來會變成什麼樣子，
但我想誠實地告訴妳，

我是認真看待妳的，
也是真心想珍惜妳、陪著妳。

我沒有要妳現在馬上給我答案啦 嘻嘻～

但如果妳願意的話，
我希望我們可以一起聊聊這件事😊

Love you ya ❤️
思思～🌸」`;


// =========================
// ELEMENT
// =========================
const typingText = document.getElementById("typing-text");

const messageBox = document.getElementById("messageBox");

const hideBtn = document.getElementById("hideBtn");

const showBtn = document.getElementById("showBtn");


// =========================
// TYPING
// =========================
let index = 0;

function startTyping(){

    typingText.textContent = "";

    index = 0;

    hideBtn.style.display = "none";

    hideBtn.style.opacity = "0";

    function typeText(){
        if(index < text.length){

            const char = text.charAt(index);

           typingText.textContent += char;
            index++;

            let speed;

            // enter lebih lama
            if(char === "\n"){

                speed = 700;

            // punctuation pause
            } else if(
                char === "，" ||
                char === "。" ||
                char === "～" ||
                char === "、" ||
                char === "😊"
            ){

                speed = 300 + Math.random() * 250;

            // typing normal random
            } else {

                speed = 45 + Math.random() * 90;
            }

            // ending lebih pelan emotional
            if(index > text.length - 25){

                speed += 120;
            }

            setTimeout(typeText, speed);

        } else {

            // tombol muncul pelan
            hideBtn.style.display = "inline-block";

            setTimeout(() => {

                hideBtn.style.opacity = "1";

            }, 100);
        }
    }

    typeText();
}


// =========================
// OPEN MESSAGE
// =========================
setTimeout(() => {

    messageBox.classList.add("show");

    startTyping();

}, 8000);


// =========================
// HIDE MESSAGE
// =========================
hideBtn.addEventListener("click", () => {

    messageBox.classList.remove("show");

    showBtn.classList.add("show");

});


// =========================
// SHOW AGAIN
// =========================
showBtn.addEventListener("click", () => {

    messageBox.classList.add("show");

    showBtn.classList.remove("show");

});