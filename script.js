$(document).ready(() => {
    $('#myModal2 button').on('click', () => {
        $('.modal').modal('hide');
    });
    $("#test").click(() => {
        sendInvit();
    });
})

function sendInvit(index) {
    let message = 'Hello guys!';
    let button  = '.connect';
    $(button).trigger('click');
    console.log('first modal 1/4');

    setTimeout(
        () => {
          if (!message) {
              $('.send').trigger('click');
              console.log('empty message 0/4');
          } else if (message.length > 0) {
                $('.add-note').trigger('click');
                console.log('second modal 2/4');

                setTimeout(
                    () => {
                        $('.paste').focus();
                        $('.paste').val(message);
                        console.log('message pasted 3/4');

                        setTimeout(
                            () => {
                                $('.send').trigger('click');
                                console.log('message sended 4/4');
                            }, 900
                        );

                    }, 1615
                );

            }

        }, 1800);
}
