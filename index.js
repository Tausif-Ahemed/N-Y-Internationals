//function for navebar
//function myFunction() {
//  var navbar = document.getElementsByClassName(".SecondaryNavBar");
//  navbar.style.display = "flex"
//   } 

function showMenu(){
    const sidebar = document.querySelector('.mobile-sidebar')
    const barIcon = document.querySelector('#barIcon');
    barIcon.style.display = 'none'
    sidebar.style.display = 'flex'

}

function hideMenu(){
    const sidebar = document.querySelector('.mobile-sidebar')
    const barIcon = document.querySelector('#barIcon');
    barIcon.style.display = 'block'
    sidebar.style.display = 'none'
}

