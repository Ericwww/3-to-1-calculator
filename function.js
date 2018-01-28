function timer() {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let diff = Math.floor((new Date("2018-06-07 09:00") - new Date()) / 1000);
    days = Math.floor(diff / 86400);
    diff = diff - days * 86400;
    hours = Math.floor(diff / 3600);
    diff = diff - hours * 3600;
    minutes = Math.floor(diff / 60);
    seconds = diff - minutes * 60;
    return `${days}天${hours}小时${minutes}分${seconds}秒`;
}
setInterval(() => {
    document.getElementsByClassName('timer')[0].innerHTML = timer();
}, 1000);
document.getElementsByClassName('timer')[0].innerHTML = timer();


//计算综合成绩的函数
function zhcj() {
    var a = document.form1.text1.value;
    var b = document.form1.text2.value;
    var c = document.form1.text3.value;
    var d = document.form1.text4.value;
    var ms = document.form1.text5.value;
    var gk = document.form1.text6.value;
    var score;
    var xk;
    var zf = 7.5;
    var i = 0;
    if (a === "" || b === "" || c === "" || d === "") {
        alert("请输入学考成绩");
        i++;
    }
    if (ms === "") {
        alert("请输入面试成绩");
        i++;
    }
    if (gk === "") {
        alert("请输入高考成绩");
        i++;
    }
    if (i == 0) {
        if (document.getElementById("university").value == "浙江工业大学") {
            score = (50 + a * 5 + b * 2) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江师范大学") {
            score = (a * 10 + b * 6 + c * 2) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "宁波大学") {
            score = (50 + a * 5) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "杭州电子科技大学") {
            score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江工商大学") {
            score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江理工大学(普通类)") {
            score = a * 15 + b * 9 + c * 3 + ms * 1 + gk * 0.5
            alert("您的综合分为" + score.toFixed(2) + "分")
        }
        if (document.getElementById("university").value == "浙江理工大学(美术类)") {
            score = (a * 15 + b * 9 + c * 3) * 0.5 + ms * 1 + gk * 0.3
            alert("您的综合分为" + score.toFixed(2) + "分")
        }
        if (document.getElementById("university").value == "温州医科大学") {
            score = (50 + a * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江海洋大学") {
            score = (a * 10 + b * 7 + c * 4) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江农林大学") {
            score = (a * 10 + b * 6 + c * 2) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江中医药大学") {
            score = (a * 10 + b * 7 + c * 4) * 0.15 + ms * 0.3 + gk / zf * 0.55
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "中国计量大学") {
            score = (a * 10 + b * 9 + c * 8 + d * 7) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江万里学院") {
            score = (a * 10 + b * 6 + c * 3 + d * 1) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江科技学院(普通类)") {
            score = (a * 15 + b * 9 + c * 3) / 1.5 * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江科技学院(艺术类)") {
            score = (a * 15 + b * 9 + c * 3) / 1.5 * 0.1 + ms * 0.4 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江财经大学") {
            score = (a * 10 + b * 5 + c * 2) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "嘉兴学院") {
            score = (a * 10 + b * 7 + c * 4) * 0.15 + ms * 0.3 + gk / zf * 0.55
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "杭州师范大学(小学教育、学前教育、特殊教育、护理学、电子商务)") {
            score = (a * 10 + b * 5 + c * 2) * 0.1 + ms * 0.4 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "湖州师范学院") {
            score = (a * 15 + b * 9 + c * 3) / 1.5 * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "绍兴文理学院") {
            score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "台州学院") {
            score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.1 + ms * 0.4 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "温州大学") {
            score = (a * 15 + b * 9 + c * 3) * 5 * 0.15 + ms * 7.5 * 0.35 + gk * 0.5
            alert("您的综合分为" + score.toFixed(2) + "分")
        }
        if (document.getElementById("university").value == "浙江外国语学院") {
            score = (a * 10 + b * 6 + c * 2) * 0.1 + ms * 0.4 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "宁波工程学院") {
            score = (a * 10 + b * 5 + c * 3) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "衢州学院") {
            score = (a * 10 + b * 7 + c * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江水利水电学院") {
            score = (a * 10 + b * 5) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江警察学院") {
            //score=(a*10+b*5+c*2)*0.2+ms*0.3+gk/zf*0.5
            //alert("您的综合分为"+score.toFixed(3)+"分")
        }
        if (document.getElementById("university").value == "丽水学院") {
            score = (a * 10 + b * 7 + c * 4 + d * 1) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "温州肯恩大学") {
            score = (a * 15 + b * 9 + c * 3) * 5 * 0.1 + ms * 7.5 * 0.4 + gk * 0.5
            alert("您的综合分为" + score.toFixed(2) + "分")
        }
        if (document.getElementById("university").value == "宁波诺丁汉大学") {
            score = (45 + a * 5) * 0.1 + ms * 0.3 + gk / zf * 0.6
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江音乐学院") {
            score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.1 + ms * 0.6 + gk / zf * 0.3
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江大学城市学院") {
            score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江大学宁波理工学院") {
            score = (a * 10 + b * 5 + c * 2) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江树人学院") {
            score = (a * 10 + b * 7 + c * 3 + d * 1) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江越秀外国语学院") {
            score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "宁波大红鹰学院") {
            xk = a * 12 + b * 8 + c * 4 + d * 2
            if (xk >= 100) xk = 100;
            score = xk * 0.1 + ms * 0.4 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "温州医科大学仁济学院") {

            score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "浙江中医药大学滨江学院") {
            score = (a * 10 + b * 8 + c * 6) * 0.15 + ms * 0.3 + gk / zf * 0.55
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "中国计量大学现代科技学院") {
            score = (a * 10 + b * 9 + c * 8 + d * 7) * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "杭州师范大学钱江学院") {
            score = (a * 10 + b * 7 + c * 5) * 0.1 + ms * 0.4 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "温州商学院") {
            xk = a * 12 + b * 8 + c * 5 + d * 2
            if (xk >= 100) xk = 100;
            score = xk * 0.15 + ms * 0.35 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "同济大学浙江学院") {
            score = (a * 10 + b * 5 + c * 3) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "上海财经大学浙江学院") {
            score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
        if (document.getElementById("university").value == "金华职业技术学院") {
            score = (a * 30 + b * 25 + c * 18) / 3 * 0.1 + ms * 0.3 + gk / zf * 0.6
            alert("您的综合分为" + score.toFixed(3) + "分")
        }
    }
}


//计算高考成绩的函数
function gkcj() {
    var a = document.form1.text1.value;
    var b = document.form1.text2.value;
    var c = document.form1.text3.value;
    var d = document.form1.text4.value;
    var ms = document.form1.text5.value;
    var zh = document.form1.text6.value;
    var score;
    var xk;
    var zf = 7.5;
    var i = 0;
    if (a === "" || b === "" || c === "" || d === "") {
        alert("请输入学考成绩");
        i++;
    }
    if (ms === "") {
        alert("请输入面试成绩");
        i++;
    }
    if (zh === "") {
        alert("请输入目标综合成绩");
        i++;
    }
    if (i == 0) {
        if (document.getElementById("university").value == "浙江工业大学") {
            score = (zh - (50 + a * 5 + b * 2) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江师范大学") {
            score = (zh - (a * 10 + b * 6 + c * 2) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "宁波大学") {
            score = (zh - (50 + a * 5) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "杭州电子科技大学") {
            score = (zh - (a * 15 + b * 10 + c * 5) / 1.5 * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江工商大学") {
            score = (zh - (a * 10 + b * 5) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江理工大学(普通类)") {
            score = (zh - a * 15 - b * 9 - c * 3 - ms * 1) * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江理工大学(美术类)") {
            score = (zh - (a * 15 + b * 9 + c * 3) * 0.5 - ms * 1) / 0.3
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "温州医科大学") {
            score = (zh - (50 + a * 5) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江海洋大学") {
            score = (zh - (a * 10 + b * 7 + c * 4) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江农林大学") {
            score = (zh - (a * 10 + b * 6 + c * 2) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江中医药大学") {
            score = (zh - (a * 10 + b * 7 + c * 4) * 0.15 - ms * 0.3) * zf / 0.55
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "中国计量大学") {
            score = (zh - (a * 10 + b * 9 + c * 8 + d * 7) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江万里学院") {
            score = (zh - (a * 10 + b * 6 + c * 3 + d * 1) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江科技学院(普通类)") {
            score = (zh - (a * 15 + b * 9 + c * 3) / 1.5 * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江科技学院(艺术类)") {
            score = (zh - (a * 15 + b * 9 + c * 3) / 1.5 * 0.1 - ms * 0.4) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江财经大学") {
            score = (zh - (a * 10 + b * 5 + c * 2) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "嘉兴学院") {
            score = (zh - (a * 10 + b * 7 + c * 4) * 0.15 - ms * 0.3) * zf / 0.55
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "杭州师范大学(小学教育、学前教育、特殊教育、护理学、电子商务)") {
            score = (zh - (a * 10 + b * 5 + c * 2) * 0.1 - ms * 0.4) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "湖州师范学院") {
            score = (zh - (a * 15 + b * 9 + c * 3) / 1.5 * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "绍兴文理学院") {
            score = (zh - (a * 10 + b * 8 + c * 6 + d * 4) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "台州学院") {
            score = (zh - (a * 10 + b * 8 + c * 6 + d * 4) * 0.1 - ms * 0.4) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "温州大学") {
            score = (zh - (a * 15 + b * 9 + c * 3) * 5 * 0.15 - ms * 7.5 * 0.35) * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江外国语学院") {
            score = (zh - (a * 10 + b * 6 + c * 2) * 0.1 - ms * 0.4) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "宁波工程学院") {
            score = (zh - (a * 10 + b * 5 + c * 3) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "衢州学院") {
            score = (zh - (a * 10 + b * 7 + c * 4) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江水利水电学院") {
            score = (zh - (a * 10 + b * 5) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江警察学院") {
            //score=(a*10+b*5+c*2)*0.2+ms*0.3+gk/zf*0.5
            //alert("为达到目标综合成绩\n您的高考成绩应为"+score.toFixed(1)+"分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "丽水学院") {
            score = (zh - (a * 10 + b * 7 + c * 4 + d * 1) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "温州肯恩大学") {
            score = (zh - (a * 15 + b * 9 + c * 3) * 5 * 0.1 - ms * 7.5 * 0.4) * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "宁波诺丁汉大学") {
            score = (zh - (45 + a * 5) * 0.1 - ms * 0.3) * zf / 0.6
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江音乐学院") {
            score = (zh - (a * 10 + b * 8 + c * 6 + d * 4) * 0.1 - ms * 0.6) * zf / 0.3
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江大学城市学院") {
            score = (zh - (a * 10 + b * 5) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江大学宁波理工学院") {
            score = (zh - (a * 10 + b * 5 + c * 2) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江树人学院") {
            score = (zh - (a * 10 + b * 7 + c * 3 + d * 1) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江越秀外国语学院") {
            score = (zh - (a * 10 + b * 8 + c * 6 + d * 4) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "宁波大红鹰学院") {
            xk = a * 12 + b * 8 + c * 4 + d * 2
            if (xk >= 100) xk = 100;
            score = (zh - xk * 0.1 - ms * 0.4) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "温州医科大学仁济学院") {
            score = (zh - (a * 10 + b * 5) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "浙江中医药大学滨江学院") {
            score = (zh - (a * 10 + b * 8 + c * 6) * 0.15 - ms * 0.3) * zf / 0.55
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "中国计量大学现代科技学院") {
            score = (zh - (a * 10 + b * 9 + c * 8 + d * 7) * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "杭州师范大学钱江学院") {
            score = (zh - (a * 10 + b * 7 + c * 5) * 0.1 - ms * 0.4) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "温州商学院") {
            xk = a * 12 + b * 8 + c * 5 + d * 2
            if (xk >= 100) xk = 100;
            score = (zh - xk * 0.15 - ms * 0.35) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "同济大学浙江学院") {
            score = (zh - (a * 10 + b * 5 + c * 3) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "上海财经大学浙江学院") {
            score = (zh - (a * 10 + b * 5) * 0.2 - ms * 0.3) * zf * 2
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
        if (document.getElementById("university").value == "金华职业技术学院") {
            score = (zh - (a * 30 + b * 25 + c * 18) / 3 * 0.1 - ms * 0.3) * zf / 0.6
            alert("为达到目标综合成绩\n您的高考成绩应为" + score.toFixed(1) + "分\n请继续加油吧！")
        }
    }
}


//“清除”按钮清除所有文本框
function delet() {
    document.form1.text1.value = "";
    document.form1.text2.value = "";
    document.form1.text3.value = "";
    document.form1.text4.value = "";
    document.form1.text5.value = "";
    document.form1.text6.value = "";
    document.form1.text7.value = "";
    document.form1.text8.value = "";
}

$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        } else {
            $("footer").removeClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});
