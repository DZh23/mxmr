document.addEventListener function {

            var neonSound = document.getElementById('neon-sound');
            var btnWork = document.getElementsByClassName('btn')[0];
            btnWork.addEventListener('click', (function () {
            
                    audio.play();
                })
            });


