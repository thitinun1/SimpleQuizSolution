let count = 0;  //นับคะแนนที่ถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count=1;  // (+=2)count = count + 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 } 

 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'b') {
        result.textContent = "ถูกต้อง MKT ย่อมาจาก การตลาด";
        result.style.color = 'green';
        count++;  //count = count + 1;  เพิ่มคะแนนกรณีกดถูก
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"
    count = 0;
} 