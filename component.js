
AFRAME.registerComponent('apear', {
    　  init : function(){
        var marker = this.el;

        marker.addEventListener('markerFound', () => {
            var markerId = marker.id;
            console.log('markerFound', markerId);

            document.querySelector('#box').emit('markerfound');
        });

        marker.addEventListener('markerLost', () => {
            var markerId = marker.id;
            console.log('markerLost', markerId);

            document.querySelector('#box').emit('markerlost');
        });
    }
});





AFRAME.registerComponent('hit-card', {
    　  init : () => {
        // var hitcard = this.el;

        var modal = document.querySelector('.cardModal');
        var modalClose = document.querySelector('.modalClose');
        console.log("src init");

        　addEventListener('click',() => {
          console.log("click");
          modal.classList.toggle('active');
          modalClose.classList.toggle('active');
    　   });
        }
    　 });    

