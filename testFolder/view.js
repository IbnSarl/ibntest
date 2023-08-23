function blockAccess(event){
    if(event.keyCode==123 || (event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.keyCode == 85)){
        event.preventDefault();
    }
}

document.addEventListener('keydown', blockAccess);
document.addEventListener('contextmenu', event=>event.preventDefault());