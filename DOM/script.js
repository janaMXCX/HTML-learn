//javaScript Document
function cal(btn) {
    if (btn.value == "+") {//加法操作
        var span = btn.nextElementSibling;//1.先获取下一个兄弟元素节点
        var value = span.innerHTML;//2.获取兄弟节点的文本内容
        value = parseInt(value) + 1;//3.文本加1
        span.innerHTML = value;//4.将加一后的结果赋值给兄弟元素节点

        var pNode = btn.parentNode;//5.
        var priceTd = pNode.previousElementSibling;
        var price = parseInt(priceTd.innerHTML);

        var sum = value * price;

        var sumTd = pNode.nextElementSibling;

        sumTd.innerHTML = sum;
    } else {
        var value = parseInt(btn.previousElementSibling.innerHTML);

        if (value > 1) {
            value = value - 1;

            btn.previousElementSibling.innerHTML = value;
            var pNode = btn.parentNode;

            var priceTd = pNode.previousElementSibling;

            var price = parseInt(priceTd.innerHTML);

            var sum = value * price;

            var sumTd = pNode.nextElementSibling;

            sumTd.innerHTML = sum;
        }
    }
    calTotal();
}

function calTotal() {
    var tbody = document.getElementById("tbody");

    var trs = tbody.getElementsByTagName("tr");
    var length = trs.length;

    var total = 0;
    for (var i = 0; i < length; i++) {
        var tr = trs[i];

        var last = tr.lastElementChild;
        total += parseInt(last.innerHTML);
    }
    document.getElementById("total").innerHTML = total;
}

window.onload = calTotal;