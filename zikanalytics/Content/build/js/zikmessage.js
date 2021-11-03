

function callMessage(message, type) {
    var template = '<div class="UI-messageBox"> <div class="UI-messageBoxIcon"><i class="far fa-bell"></i></div><span>' + message + '</span> <div class="UI-messageBoxClose"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 12px; fill: #fff;"> <path d="M505.943 6.058c-8.077-8.077-21.172-8.077-29.249 0L6.058 476.693c-8.077 8.077-8.077 21.172 0 29.249A20.612 20.612 0 0 0 20.683 512a20.614 20.614 0 0 0 14.625-6.059L505.943 35.306c8.076-8.076 8.076-21.171 0-29.248z"></path> <path d="M505.942 476.694L35.306 6.059c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l470.636 470.636a20.616 20.616 0 0 0 14.625 6.058 20.615 20.615 0 0 0 14.624-6.057c8.075-8.078 8.075-21.173-.001-29.25z"></path> </svg> </div></div>';
    var newMessage = {
        message: message,
        type: type,
        display: function () {
            if (type === 'err') {
               template = '<div class="UI-messageBox msgErr"> <div class="UI-messageBoxIcon"><i class="far fa-bell"></i></div><span>' + message + '</span> <div class="UI-messageBoxClose"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 12px; fill: #fff;"> <path d="M505.943 6.058c-8.077-8.077-21.172-8.077-29.249 0L6.058 476.693c-8.077 8.077-8.077 21.172 0 29.249A20.612 20.612 0 0 0 20.683 512a20.614 20.614 0 0 0 14.625-6.059L505.943 35.306c8.076-8.076 8.076-21.171 0-29.248z"></path> <path d="M505.942 476.694L35.306 6.059c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l470.636 470.636a20.616 20.616 0 0 0 14.625 6.058 20.615 20.615 0 0 0 14.624-6.057c8.075-8.078 8.075-21.173-.001-29.25z"></path> </svg> </div></div>';
            }
            $(template).appendTo('body').delay(7000).queue(function () {
                $(this).addClass('msgLeave');
                setTimeout(function () {
                    $('.msgLeave').remove();
                },7000);
            });
            closePrevious();

        }
    };
    return newMessage.display();
}

    function closePrevious() {
        $('.UI-messageBox:not(:last-child)').addClass('msgLeave');
        setTimeout(function () {
            $('.UI-messageBox:not(:last-child)').remove();
        }, 7000);
    }

    $(document).on("click", ".UI-messageBoxClose", function () {
        $(this).parent().addClass('msgLeave');
        var rem = $(this).parent();
        setTimeout(function () {
            rem.remove();
        }, 500);
    });

















