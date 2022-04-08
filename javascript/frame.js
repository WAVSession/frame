/**
 * 
 * 
 * 
 */

 $(document).ready(function(){
    const $body = document.querySelector('body');
    const $input = document.getElementById('input-file');
    const $output = document.querySelector('.output');
    const $event = document.querySelector('.event');
    const $photo = document.querySelector('.photo');

    const $select = document.querySelector('.select');
    const $delete = document.querySelector('.delete');
    const $download = document.querySelector('.download');

    const frame = {
        enabled: true,
        image: null
    }

    const fileChange = () => {
        let e = $input;
        if ($photo && e.files && e.files[0]) {
            let image = URL.createObjectURL(e.files[0]);
            $photo.style.background = `url('${image}')`;
            frame.image = image;
            $('.right').fadeIn('slow');
        }
    }

    const outputMoviment = (e) => {
        if (frame.enabled && frame.image != null) {
            // $photo.style.backgroundPosition = `0px ${e.offsetY}px`;
            console.log(`${e.offsetX} ${e.offsetY}`);
        }
    }

    const outputDisable = (e) => {
        if (frame.image == null)
            $input.click();
        if (frame.image != null)
            frame.enabled = !frame.enabled;
    }

    function getMeta(url){   
        const img = new Image();
        img.addEventListener("load", function() {
            alert( this.naturalWidth +' '+ this.naturalHeight );
        });
        img.src = url;
    }

    // document.getElementById('input-file').click();

    $input.addEventListener('change', e => fileChange(e));
    $body.addEventListener('mousemove', e => outputMoviment(e));
    $output.addEventListener('click', e => outputDisable(e));

    $select.addEventListener('click', e => {
        $input.click();
    });

    $delete.addEventListener('click', e => {
        frame.enabled = true;
        $photo.style.background = `unset`;
        frame.image = null;
        $('.right').fadeOut('fast');
    });
});