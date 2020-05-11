// 获取题目，并获取答案
function cnosole_question() {
    try {
        var question = className("ListView").findOnce().parent().child(0).desc();
        window.answer.setText(question)
        console.log(".题目：" + question);
    } catch(err) {
        console.log("出错了")
    }
}



// 悬浮框部分代码
var window = floaty.window(
    <frame>
        <button id="action" text="开始运行" w="90" h="40" bg="#77ffffff"/>
        <text id="answer" text="点击可调整位置" textSize="16sp"/>
    </frame>
);
window.exitOnClose();

window.action.click(()=>{
    cnosole_question()
});

window.action.longClick(()=>{
   window.setAdjustEnabled(!window.isAdjustEnabled());
   return true;
});

setInterval(()=>{}, 1000);


