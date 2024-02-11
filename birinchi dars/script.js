function openInfo(evt, info) {
    let i, information, tablinks;
  
    information = document.getElementsByClassName("information");
    for (i = 0; i < information.length; i++) {
        information[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();