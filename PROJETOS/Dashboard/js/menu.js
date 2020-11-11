let iconMenu = document.getElementById('iconMenu');
let sidebar = document.getElementById('sidebar1');
let mainContent = document.getElementById('mainContent')
let w = window.innerWidth;


window.addEventListener("resize", () =>{
    w = window.innerWidth;
});


function responsiveSidebar(){
  if(w <=  780){
    sidebar.style.left = '-300px';
  }else if(sidebar.style.display == 'none'){
    sidebar.style.display= 'block';
    mainContent.style.width = 'calc(100% - 300px)';
  } else{
    sidebar.style.display= 'none';
    mainContent.style.width = '100%';
  };
};

