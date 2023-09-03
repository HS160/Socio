//sidebar
const menuItems = document.querySelectorAll('.menu-item');

//message
const messagesNotification = document.querySelector('#messages-notification');
const messages =document.querySelector('.messages');

//theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color');

//================SIDEBAR==================

//remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click',() => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


//================messages================

//highlight
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },1000);
})

//=======================theme=======================

//open modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';

}


//close modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


//================fonts================
// const removeSizeSelector =() => {
//     fontSizes.forEach(size =>{
//         size.classList.remove('active');
//     })
// }

// fontSizes.forEach(size =>{
    

//     size.addEventListener('click',() =>{
//         removeSizeSelector();
//         let fontSize;
//         size.classList.toggle('active');
//         if(size.classList.contains('font-size-1'))
//     {
//         fontSize ='10px';
//         root.style.setProperty('----sticky-top-left', '5.4rem');
//         root.style.setProperty('----sticky-top-right', '5.4rem');
//     }else if(size.classList.contains('font-size-2')){
//         fontSize ='13px';
//         root.style.setProperty('----sticky-top-left', '5.4rem');
//         root.style.setProperty('----sticky-top-right', '-7rem');
//     }else if(size.classList.contains('font-size-3')){
//         fontSize ='16px';
//         root.style.setProperty('----sticky-top-left', '-2rem');
//         root.style.setProperty('----sticky-top-right', '-17rem');
//     }else if(size.classList.contains('font-size-4')){
//         fontSize ='19px';
//         root.style.setProperty('----sticky-top-left', '-5rem');
//         root.style.setProperty('----sticky-top-right', '-25rem');
//     }else if(size.classList.contains('font-size-5')){
//         fontSize ='22px';
//         root.style.setProperty('----sticky-top-left', '-12rem');
//         root.style.setProperty('----sticky-top-right', '-35rem');
//     }

//     document.querySelector('html').style.fontSize = fontSize;
//     })
// })

// //primary color
// colorPalette.forEach(color => {
//     color.addEventListener('click', () => {
//         let primaryHue;

//         if(color.classList.contains('color-1')){
//             primaryHue = 252;
//         }
//         else if(color.classList.contains('color-2')){
//             primaryHue = 52;
//         }
//         else if(color.classList.contains('color-3')){
//             primaryHue = 352;
//         }
//         else if(color.classList.contains('color-4')){
//             primaryHue = 152;

//         }else if(color.classList.contains('color-5')){
//             primaryHue = 202;
//         }        
//         color.classList.add('active');
//         root.style.setProperty('--primary-color-hue',primaryHue);
//     })
// })
