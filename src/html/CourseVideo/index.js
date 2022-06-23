function show_course_menu() {
  if (document.getElementById("course-menu").style.display !== "block") {
         document.getElementById("course-menu").style.display === "block";
  } else {
         document.getElementById("course-menu").style.display === "none";
  }
}

function go_back(){
    let btn_back = document.querySelector("#btn_back")
    btn_back.addEventListener("click", ()=>{
        window.history.back()
    })
}