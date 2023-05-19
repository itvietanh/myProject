let i = 0, images = ['./image/banner_1.jpg', './image/banner_2.jpg','./image/banner_3.jpg','./image/banner_4.jpg','./image/banner_5.jpg'];
document.getElementById('picture').src = images[0];

function next() {
    i++;
    if ( i == images.length ) {
        i = 0;
    }
    document.getElementById('picture').src = images[i];
}

let id = 0;

if ( id == 0 ) {
    id = setInterval(next, 2000);
}
 