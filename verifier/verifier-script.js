
$(document).ready(function(){
    $("#fileToUpload").on('change', function(evt){	 
        evt.preventDefault();
        var formData = new FormData($("form")[0]);
     $.ajax({
         url: 'http://localhost/startmin/upload_cert.php',
         type: 'POST',
         data: formData,
         async: false,
         cache: false,
         contentType: false,
         enctype: 'multipart/form-data',
         processData: false,
         success: function (response) {
            console.log(response);
            var viewElem = $('#validate-cert-element');
            var viewElemBlock = $('#validate-cert-element-block');
            var certWrapper = $('.certificate-display');
            var newHref = viewElem.attr('href').replace('filename.json', response);
            viewElem.attr('href', newHref);
            viewElemBlock.attr('href', newHref);
            certWrapper.css('display', 'block');
            $('.form-container').css('display', 'none');
            $('#header-name').html(response.replace('.json', ''));
            $('.header').css('display', 'block');
         }
     });
     return false;
    });
});