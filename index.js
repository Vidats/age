const btn = document.getElementById("btn");
const bd = document.getElementById("birthday");
const result = document.getElementById("result");

function tuoi(){
  const birthdayvalue = bd.value;
  if(!birthdayvalue){
    alert("vui lòng nhập ngày tháng năm sinh");
    bd.focus(); 
    result.textContent = "";
    return;
  }

  const age = getAgeSafe(birthdayvalue);
  if(age < 0){
    alert("ngay thang nam sinh khong hop le");
    bd.focus();
    result.textContent = "";
    return;
  }
  const unit = age === 1 ? "" : "";
  result.textContent = `Bạn đã ${age} ${unit} tuổi`;
}

function getAgeSafe(birthdayvalue){
  const today = new Date();
  // Cách tạo Date an toàn hơn
  const [y, m, d] = birthdayvalue.split("-").map(Number);// tách chuỗi và chuyển về số split trả về mảng 
  const birthday = new Date(y, m - 1, d);
// vì tháng trong Date bắt đầu từ 0 (0-11) nên trừ đi 1
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
// so sánh tháng hiện tại và tháng sinh
  if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())){
    age--;//chua den sinh nhat
  }

  return age;
}

btn.addEventListener("click", tuoi);