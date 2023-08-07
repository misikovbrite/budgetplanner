
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
var showChatAuto = true;

if(window.location.host == 'sophie-market.uxp.ru' || window.location.host == ''){
    showChatAuto = false;
}
var activeConversation = 'konvActChat';
if(isMobile == null){
    var activeConversation = 'konvActChat-' + location.host;
}

var konvicons = {
    link    : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M476.853,35.148c-46.864-46.864-122.842-46.864-169.706-0.001L206.853,135.441c-48.475,48.477-43.987,125.717,0,169.706    c7.366,7.366,15.516,13.372,24.122,18.305l18.305-18.305c12.006-12.008,7.78-26.045,7.564-36.174    c-2.635-1.868-5.198-3.887-7.564-6.253c-22.573-22.571-23.588-61.265,0-84.853c3.503-3.503,98.166-98.166,100.292-100.292    c23.399-23.399,61.454-23.399,84.853,0c23.399,23.399,23.399,61.454,0,84.853l-66.293,66.293    c1.917,10.607,13.422,35.733,7.504,77.181c0.289-0.284,0.635-0.467,0.923-0.754l100.294-100.294    C523.715,157.99,523.715,82.012,476.853,35.148z" fill="#ffffff" data-original="#000000" style="" class=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M312.918,199.081c-7.365-7.366-15.516-13.372-24.12-18.305l-18.305,18.305c-12.008,12.006-7.782,26.043-7.566,36.172    c2.637,1.868,5.2,3.887,7.566,6.253c22.573,22.573,23.588,61.265,0,84.853c-3.511,3.511-106.015,106.015-108.066,108.066    c-23.399,23.399-61.454,23.399-84.853,0c-23.399-23.399-23.399-61.454,0-84.853l74.067-74.067    c-1.917-10.607-13.423-35.733-7.504-77.181c-0.289,0.284-0.637,0.469-0.925,0.756L35.147,307.147    c-46.862,46.864-46.862,122.842,0,169.706c46.864,46.862,122.841,46.862,169.705,0l108.066-108.066    C360.494,321.211,357.894,244.056,312.918,199.081z" fill="#ffffff" data-original="#000000" style="" class=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>',
    unlink  : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 472.951 472.951" style="enable-background:new 0 0 472.951 472.951;" xml:space="preserve"><g>	<g>		<g>			<path d="M462.557,77.627c-14.323-25.556-41.488-41.423-70.889-41.423c-13.835,0-27.54,3.585-39.602,10.364				l-152.557,85.635l17.55,31.279l152.565-85.635c6.747-3.78,14.371-5.779,22.069-5.779c16.428,0,31.596,8.852,39.594,23.11				c5.909,10.535,7.356,22.752,4.072,34.408c-3.268,11.656-10.876,21.346-21.411,27.255l-138.291,77.604				c-2.634-16.851-10.494-32.392-22.793-44.699c-21.687-21.663-56.063-29.328-84.935-18.964l-12.485,4.495l12.128,33.734				l12.534-4.471c16.127-5.869,35.319-1.496,47.406,10.567c6.974,6.982,11.388,15.826,12.786,25.41				c-0.585-0.138-1.171-0.285-1.731-0.447c-11.681-3.284-21.354-10.9-27.271-21.476l-6.519-11.518l-31.303,17.59l6.56,11.518				c10.6,18.915,27.93,32.571,48.836,38.44c0.723,0.187,1.455,0.39,2.187,0.561c-1.105,1.398-2.284,2.731-3.536,3.983				l-114.32,114.328c-8.551,8.543-19.931,13.241-32.035,13.241c-12.112,0-23.492-4.698-32.027-13.241				c-8.535-8.543-13.233-19.907-13.233-32.027c0-12.112,4.698-23.483,13.233-32.018l99.291-99.282l-25.369-25.369l-99.282,99.282				C8.446,319.427,0,339.806,0,361.468c0,21.679,8.446,42.049,23.776,57.396c15.339,15.339,35.709,23.768,57.388,23.768				s42.049-8.429,57.388-23.768l114.345-114.32c8.372-8.405,14.81-18.566,18.842-29.71c6.625-1.764,12.924-4.3,18.777-7.6				l140.99-79.115c18.875-10.608,32.514-27.946,38.375-48.828C475.749,118.4,473.148,96.493,462.557,77.627z"/>		</g>		<g>			<g>				<path d="M173.171,141.769c4.503-0.821,7.511-5.145,6.69-9.657l-17.103-94.942					c-0.821-4.519-5.162-7.527-9.665-6.722c-4.511,0.821-7.527,5.145-6.706,9.673l17.111,94.925					C164.311,139.575,168.644,142.574,173.171,141.769z"/>			</g>		</g>		<g>			<g>				<path style="fill:#010002;" d="M43.561,191.776l94.934-17.119c4.519-0.821,7.527-5.145,6.706-9.657					c-0.821-4.528-5.145-7.543-9.649-6.722L40.61,175.405c-4.503,0.797-7.519,5.145-6.698,9.657					C34.717,189.582,39.058,192.589,43.561,191.776z"/>			</g>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
    back_color: '<svg viewBox="-10 0 472 472.0097" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m444.003906 407.035156v57.289063h-53.949218v-57.289063zm0 0" fill="#fedb41"/><path d="m444.003906 7.683594v57.292968h-53.949218v-57.292968zm0 0" fill="#fedb41"/><path d="m417.035156 65.195312v341.839844h-26.980468v28.648438h-328.101563v-28.648438h-26.976563v-342.058594h26.976563v-28.652343h328.101563v28.652343h26.980468zm0 0" fill="#00efd1"/><path d="m61.953125 435.683594v28.640625h-53.949219v-57.289063h53.949219zm0 0" fill="#fedb41"/><path d="m61.953125 36.324219v28.652343h-53.949219v-57.292968h53.949219zm0 0" fill="#fedb41"/><g fill="#083863"><path d="m8.003906 399.003906c-4.421875.015625-7.99999975 3.605469-7.99999975 8.03125v57.289063c.01562495 2.089843.87109375 4.085937 2.37890575 5.53125 1.507813 1.445312 3.535157 2.222656 5.621094 2.148437h53.949219c2.09375.074219 4.128906-.699218 5.644531-2.144531s2.382813-3.441406 2.40625-5.535156v-20.320313h312v20.320313c.027344 2.09375.894532 4.089843 2.410156 5.535156 1.515626 1.445313 3.546876 2.21875 5.640626 2.144531h53.949218c2.089844.074219 4.117188-.703125 5.625-2.148437 1.503906-1.445313 2.363282-3.441407 2.375-5.53125v-57.289063c.003906-4.425781-3.574218-8.015625-8-8.03125h-19v-326h19c4.425782-.011718 8.003906-3.605468 8-8.027344v-57.292968c-.011718-2.085938-.871094-4.082032-2.375-5.527344-1.507812-1.449219-3.535156-2.2226562-5.625-2.15234375h-53.949218c-2.09375-.07421875-4.125.69921875-5.640626 2.14453175-1.515624 1.445312-2.382812 3.441406-2.410156 5.535156v20.320312h-312v-20.320312c-.023437-2.09375-.890625-4.089844-2.40625-5.535156-1.515625-1.445313-3.550781-2.2187505-5.644531-2.14453175h-53.949219c-2.085937-.07031245-4.113281.70312475-5.621094 2.15234375-1.507812 1.445312-2.3632808 3.441406-2.37890575 5.527344v57.292968c0 4.421876 3.57812475 8.015626 7.99999975 8.027344h19v326zm46 57h-38v-41h38zm382 0h-38v-41h38zm-38-440h38v41h-38zm-382 0h38v41h-38zm27 57h18.949219c4.4375-.007812 8.03125-3.59375 8.050781-8.027344v-20.972656h312v20.972656c.023438 4.433594 3.617188 8.019532 8.050782 8.027344h18.949218v326h-18.949218c-4.433594.011719-8.027344 3.597656-8.050782 8.03125v20.96875h-312v-20.96875c-.019531-4.433594-3.613281-8.019531-8.050781-8.03125h-18.949219zm0 0"/><path d="m138.003906 139.003906h80v195h-35c-4.417968 0-8 3.582032-8 8 0 4.417969 3.582032 8 8 8h86c4.417969 0 8-3.582031 8-8 0-4.417968-3.582031-8-8-8h-35v-195h80c4.417969 0 8-3.582031 8-8 0-4.417968-3.582031-8-8-8h-176c-4.417968 0-8 3.582032-8 8 0 4.417969 3.582032 8 8 8zm0 0"/></g></svg>',
    text_color : '<svg width="20" height="20" enable-background="new 0 0 512 512"  viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g><path d="m257 433v-254c0-32.585-26.415-59-59-59h-59v20c-32.585 0-59-27.415-59-60s26.415-60 59-60h-59c-33.137 0-60 26.863-60 60 0 33.137 26.863 60 60 60h58c32.585 0 59 26.415 59 59v234c0 32.585 26.415 59 59 59 10.957 0 21.208-2.997 30-8.2-17.355-10.272-29-29.172-29-50.8z" /><path d="m439 512c-19.499 0-37.831-7.594-51.619-21.381l-59.477-59.477c-20.263-20.263-33.941-45.826-39.559-73.925l-11.325-56.664c-1.311-6.557.742-13.334 5.471-18.062 4.728-4.728 11.509-6.778 18.062-5.47l56.664 11.326c28.1 5.617 53.662 19.295 73.926 39.559l59.477 59.477c13.787 13.786 21.38 32.118 21.38 51.617s-7.593 37.831-21.382 51.619c-13.788 13.788-32.12 21.381-51.618 21.381zm-116.877-189.877 5.447 27.253c4.063 20.329 13.96 38.822 28.619 53.481l59.477 59.477c6.232 6.233 14.52 9.666 23.334 9.666s17.102-3.433 23.335-9.666c6.232-6.232 9.665-14.52 9.665-23.334s-3.433-17.102-9.665-23.334l-59.478-59.477c-14.659-14.659-33.152-24.555-53.48-28.619z" /><path d="m256 512c-43.561 0-79-35.439-79-79v-234c0-21.505-17.495-39-39-39h-58c-44.112 0-80-35.888-80-80s35.888-80 80-80h352c44.112 0 80 35.888 80 80s-35.888 80-80 80h-58c-21.505 0-39 17.495-39 39v22c0 11.046-8.954 20-20 20s-20-8.954-20-20v-22c0-43.561 35.439-79 79-79h58c22.056 0 40-17.944 40-40s-17.944-40-40-40h-352c-22.056 0-40 17.944-40 40s17.944 40 40 40h58c43.561 0 79 35.439 79 79v234c0 21.505 17.495 39 39 39 10.318 0 20.046-3.991 27.39-11.236 7.861-7.76 20.525-7.673 28.283.189 7.758 7.863 7.674 20.526-.189 28.284-14.878 14.679-34.582 22.763-55.484 22.763z" /></g></svg>',
    check_list : '<svg version="1.1" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><g>	<g>		<polygon points="34.564,40.07 5.762,40.07 5.762,11.276 34.564,11.276 34.564,12.788 40.326,8.04 40.326,5.516 0,5.516 0,45.831 			40.326,45.831 40.326,20.854 34.564,27.765 		"/>		<polygon points="13.255,17.135 11.031,19.56 25.245,35.943 50,6.248 48.049,4.169 25.245,22.932 		"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
    keyhide : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <g xmlns="http://www.w3.org/2000/svg"> <g> <g> <polygon points="213.333,426.667 298.667,341.333 128,341.333    "  data-original="#000000" style="" class=""/> <path d="M384,0H42.667C19.093,0,0.213,19.093,0.213,42.667L0,256c0,23.573,19.093,42.667,42.667,42.667H384     c23.573,0,42.667-19.093,42.667-42.667V42.667C426.667,19.093,407.573,0,384,0z M192,64h42.667v42.667H192V64z M192,128h42.667     v42.667H192V128z M128,64h42.667v42.667H128V64z M128,128h42.667v42.667H128V128z M106.667,170.667H64V128h42.667V170.667z      M106.667,106.667H64V64h42.667V106.667z M298.667,256H128v-42.667h170.667V256z M298.667,170.667H256V128h42.667V170.667z      M298.667,106.667H256V64h42.667V106.667z M362.667,170.667H320V128h42.667V170.667z M362.667,106.667H320V64h42.667V106.667z" fill="#ffffff" data-original="#000000" style="" class=""/> </g> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>',
    share   : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512"  style="enable-background:new 0 0 512 512" xml:space="preserve" class="konv-svg"><g><g xmlns="http://www.w3.org/2000/svg" id="Solid"><path d="m182.461 155.48 49.539-49.539v262.059a24 24 0 0 0 48 0v-262.059l49.539 49.539a24 24 0 1 0 33.941-33.941l-90.509-90.51a24 24 0 0 0 -33.942 0l-90.509 90.51a24 24 0 1 0 33.941 33.941z" data-original="#000000" style="" class=""/><path d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z" fill="#ffffff" data-original="#000000" style="" class=""/></g></g></svg>',

}

localStorage.setItem('onchatMode', 'messenger');


var konvFramework = {elements : {}};

// -----------------------------------------------------------------
// ------------------------       CHAT         -------------------------
// -----------------------------------------------------------------

var soundNotification = true;
konvFramework.elements.chat = {
    context : 0,

    chatEdit : 0,

    actions : {

    },

    buildChatSearcher(target){

        var searcher = ''+
            '<div class="searcher-row konv-text" style="display: none;">'+
            '<div class="searcher-row_wrapper"> ' +
            '<div class="searcher-row_toolbar">' +
            '<div class="searcher-row_document-search"><i class="fas fa-file-image"></i></div>'+
            '</div>'+
            '<input type="text" class="searcher-row_input" placeholder="Введите сообщение">'+
            '<div class="searcher-row_buttons-container">'+
            '<div class="searcher-row_button"><i class="fas fa-search"></i></div>'+
            '<div class="searcher-row_close-button"><i class="fas fa-chevron-up"></i></div>'+
            '</div>'+
            '</div>'+
            '</div>';

        var overlay = ''+
            '<div class="searcher-main-messages-container">'+

            '</div>';

        //добавление строки поиска
        if( $('.online-chat-mainwrapper .searcher-row').length > 0 && $('.online-chat-mainwrapper .searcher-main-messages-container').length > 0) {

            $('.searcher-row').slideUp(function(){
                $('.searcher-main-messages-container').removeClass('show-searcher-container');
                $('.konv-start-search').html('<i class="fas fa-search"></i>');

                $(this).remove().delay(300);
                $('.searcher-main-messages-container').remove();

            });
        }else{
            $('.konv-start-search').html('<i class="fas fa-times"></i>');

            $(target).parent().parent().after(searcher);
            $('.searcher-row').after(overlay);
            $('.searcher-row').slideDown(300);
        }


        $('.searcher-row').on('click', '.searcher-row_close-button', function(){
            if(localStorage.getItem('konvUserMain') == 424){
                window.location.reload(true);
            }

            $('.searcher-main-messages-container').removeClass('show-searcher-container');

            $('.searcher-row').slideUp(function(){

                $('.searcher-main-messages-container').removeClass('show-searcher-container');

                $('.konv-start-search').html('<i class="fas fa-search konv-text"></i>');

                $(this).remove().delay(300);

                $('.searcher-main-messages-container').remove();

            });
        })


        $('.searcher-row').on('click', '.searcher-row_button', function () {

            var searcherText = $('.searcher-row_input').val();

            $('.searcher-main-messages-container').addClass('show-searcher-container');

            $('.searcher-main-messages-container').html('');

            if(searcherText == ''){

                $('.searcher-main-messages-container').append('<div class="emptydialog konv-text" style="text-align:center; display: none;">Пожалуйста введите сообщение</div>');
                $('.emptydialog').fadeIn().delay(1500).fadeOut(300, function(){

                    $('.searcher-main-messages-container').removeClass('show-searcher-container');

                    $(this).remove();

                })
            }
            else {
                // localStorage.getItem('konvActChat-sofie.ru')
                jQuery.ajax({
                    type: "POST",
                    url: konvController,
                    data: {
                        'action': 'find-chat-text-stack',
                        'qa_text': searcherText,
                        'qa_conversationid': localStorage.getItem('konvActChat-britetodo.com')
                    },
                    success: function ( messagesdataraw ) {
                        var messagesdata = JSON.parse( messagesdataraw );

                        console.log(messagesdata);

                        var messages = messagesdata[0];
                        var usersdata = messagesdata[1];

                        if (messages.length == 0) {

                            $('.searcher-main-messages-container').append('<div class="emptydialog konv-text" style="text-align:center; display: none;">Сообщения не найдены</div>');

                            $('.emptydialog').fadeIn().delay(1000).fadeOut(300, function () {

                                $( '.searcher-main-messages-container' ).removeClass( 'show-searcher-container' );

                                $(this).remove();
                            })

                        } //если сообщения есть
                        else {
                            for ( id in messages ) {

                                for ( key in usersdata ) {

                                    if ( usersdata[key].lt_userid == messages[id].oc_sender ) {

                                        $( '.searcher-main-messages-container' ).append( '' +

                                            '<div class="konv-messege-wrapper sender-messege konv-fade-in onchat-operator-messege-konver" data-konvsenderid="' + messages[id].oc_sender + '" data-mesesgeid="' + messages[id].oc_id + '">' +
                                            '<div class="onchatmessege-konver needsclick">' +
                                            '<div class="konv-chat-call-context user-message-context"><i class="fal fa-angle-down konv-text"></i></div>' +
                                            '<div class="konv-messege-body">' + messages[id].oc_body + '</div>' +
                                            '</div>' +
                                            '<div class="user-details user-details-ac messege-avatar konv-user-icon-m" data-stats="'+usersdata[key].lt_userid+'" style="background-image: url(' + usersdata[key].tm_avatar + ') !important"></div>' +
                                            '</div>');

                                        break;
                                    }
                                }
                            }
                        }
                    },
                    error: function(respond){
                        console.log(respond);
                    }
                });
            }
        })

        $('.searcher-row').on('click', '.searcher-row_document-search', function () {
            $('.searcher-main-messages-container').toggleClass('show-searcher-container');
            $('.searcher-main-messages-container').html('');
            jQuery.ajax({
                type: "POST",
                url: konvController,
                data: {
                    'action': 'find-docs-in-conv',
                    'qa_conversationid' :localStorage.getItem('konvActChat-britetodo.com')
                },
                success: function (messagesdataraw) {
                    console.log(messagesdataraw);
                    var messagesdata = JSON.parse(messagesdataraw);

                    if(messagesdata.length == 0){
                        $('.searcher-main-messages-container').append('<div class="emptydialog" style="text-align:center; display: none;">Сообщения не найдены</div>');
                        $('.emptydialog').fadeIn().delay(1000).fadeOut(300, function(){
                            $(this).remove();
                        })
                    }else {
                        for (id in messagesdata) {
                            $('.searcher-main-messages-container').append('' +
                                '<div class="konv-messege-wrapper docs sender-messege konv-fade-in">' +
                                messagesdata[id].oc_body+
                                '</div>');
                        }

                        $('.sender-messege.docs .konv-chat-file a').addClass('link external');
                    }
                }
            });
        })
    },

    envoq : {

        checkForMassage(){

        }
    },

    renderMessege(messege){
        //$('.onchat-main-body-chat').append('<div class="onchatmessege-konver onchat-user-messege-konver" data-konvSenderId="'+messege.oc_sender+'"><div><div class="konv-messege-body">'+messege.oc_body+'</div></div><div class="timestemponchat">'+processDate(messege.oc_date, 'time')+'</div></div>').hide().fadeIn();
    },

    getConversationsMessenger(userId, placement = 'body'){



        jQuery.ajax({
            type: "POST",
            url: konvController,
            data: {
                'action': 'check-for-conversations-messenger',
                'oc_participants': userId
            },
            success: function (onlineChatDialogsRaw) {

                //console.log(onlineChatDialogsRaw, '---------------Диалоги пользователя-----------------')
                var onlineChatDialogs = JSON.parse(onlineChatDialogsRaw);

                //console.log(onlineChatDialogs, 'Диалоги пользователя')
                var unreaded_mes = 0;



                if(onlineChatDialogs.length != 0){
                    $(placement).find('.konv-chat-user-selector').remove();
                    $(placement).append('<div class="konv-chat-user-selector konv-widget-botton konv-fade-in">' +
                        '<div class="konv-chat-user-selection-wrap konv-flex-row-start konv-height-100 konv-mob-flex-col-start">' +
                        '</div>' +
                        '</div>')
                }


                var chatsHtml = '';
                for(id in onlineChatDialogs){

                    var messegesCounter = '';

                    if(onlineChatDialogs[id].messengesAmount != 0){
                        messegesCounter = '<div class="konv-tiny-notification">'+onlineChatDialogs[id].messengesAmount+'</div>';
                        unreaded_mes ++;
                        console.log(321)
                    }
                    //console.log(participans, 'Собеседник')
                    var participans = JSON.parse(onlineChatDialogs[id].oc_participants);
                    var participantId = 0;
                    for(idPart in participans){
                        if(participans[idPart].userId != userId){
                            participantId = participans[idPart].userId
                        }
                    }

                    var typeOfChat = 'private';
                    if(onlineChatDialogs[id].oc_chat_type == 'group-chat'){
                        typeOfChat = 'group-chat';
                    }

                    var lastMessegeTime = '';

                    if(onlineChatDialogs[id].lastMessegeTime != 'none'){
                        lastMessegeTime = processDate(onlineChatDialogs[id].lastMessegeTime, 'time');
                    }
                    //обработка временных блоков
                    var chatAvatar = ''
                    if(onlineChatDialogs[id].oc_chat_image != null){
                        chatAvatar = 'background-image: url('+onlineChatDialogs[id].oc_chat_image+')';
                    }

                    var messegePreview = '';
                    if(onlineChatDialogs[id].lastMessegeText.indexOf('konv-chat-image')>-1){
                        var messegePreview = 'Изображение';
                    }else{

                        var messegePreview = onlineChatDialogs[id].lastMessegeText.replace(/<\/?[^>]+(>|$)/g, "").substring(0,170);
                    }

                    var swipeoutActions =   '<div class="swipeout-actions-right">' +
                        '    <a class="remove-chat sa-b swipeout-close no-click"><i class="fad fa-trash-alt"></i></a>' +
                        '    <a class="mute-chat sa-b swipeout-close swipeout-overswipe no-click"><i class="fad fa-bell-slash"></i></a>' +
                        '  </div>';

                    if(isMobile == null){
                        swipeoutActions = '';
                    }
                    chatsHtml +=
                        '<li class="ac konv-ac-chat konv-activate-chat konv-flex-row konv-mobile-full-width  konv-text swipeout" data-chattype="'+typeOfChat+'" data-userconversationid="'+onlineChatDialogs[id].oc_id+'" data-participants="'+participantId+'">' +
                        messegesCounter +
                        '<div class="swipeout-content konv-w-100 konv-flex-row konv-marg-r-20">' +
                        '<div class="konv-user-icon-m chat-card-avatar" style="'+chatAvatar+'"></div>' +
                        '<div class="konv-flex-row-col konv-mobile-only konv-w-100 konv-marg-l-10">' +
                        '<div class="konv-chat-conversation-title konv-mobile-only konv-flex-row-start  konv-text">'+onlineChatDialogs[id].oc_name+'</div>' +

                        '<div class="konv-flex-row konv-mobile-only">' +
                        '<div class="konv-chat-conversation-title konv-mobile-only konv-chat-messege-preview  konv-text">'+messegePreview+'</div>' +
                        '<div class="konv-chat-conversation-title konv-mobile-only  konv-text">'+lastMessegeTime+'</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'+
                        swipeoutActions +
                        '</li>'
                }
                $('.konv-chat-user-selection-wrap').append(chatsHtml)

                //меняем title страницы если есть новые сообщения
                if(window.location.href.indexOf('britetodo')> -1) {
                    if ( unreaded_mes > 0 && isMobile == null ) {
                        document.title = "Brite - сообщения - " + unreaded_mes;
                    }
                    else {
                        document.title = "Brite";
                    }
                }
            }
        });
        setInterval(function(){

            if(navigator.onLine != false){
                jQuery.ajax({
                    type: "POST",
                    url: konvController,
                    data: {
                        'action': 'check-for-conversations-messenger',
                        'oc_participants': userId
                    },
                    success: function ( onlineChatDialogsRaw ) {
                        var onlineChatDialogs = JSON.parse( onlineChatDialogsRaw );

                        (localStorage.getItem('chat-debug') == 'true') ? console.log(onlineChatDialogs) : '';

                        if ( isMobile == null ) {
                            var unreaded_mes = 0;
                            for ( id in onlineChatDialogs ) {

                                if ( $('.konv-chat-widget').hasClass('konv-chat-visible') && localStorage.getItem('konvActChat-britetodo.com') == onlineChatDialogs[id].oc_id ) {

                                }
                                else {
                                    //если есть уведомление и есть непрочитанные
                                    if ( $('[data-userconversationid="' + onlineChatDialogs[id].oc_id + '"] .konv-tiny-notification').length != 0 && onlineChatDialogs[id].messengesAmount != 0 ) {

                                        $('[data-userconversationid="' + onlineChatDialogs[id].oc_id + '"] .konv-tiny-notification').text(onlineChatDialogs[id].messengesAmount);
                                        unreaded_mes++
                                    } //если нет уведомления но есть непрочитанные
                                    if ( $('[data-userconversationid="' + onlineChatDialogs[id].oc_id + '"] .konv-tiny-notification').length == 0 && onlineChatDialogs[id].messengesAmount != 0 ) {

                                        $('[data-userconversationid="' + onlineChatDialogs[id].oc_id + '"]').prepend('<div class="konv-tiny-notification">' + onlineChatDialogs[id].messengesAmount + '</div>');
                                        unreaded_mes++
                                    }
                                }
                            }
                            //меняем title страницы если есть новые сообщения
                            if(window.location.href.indexOf('britetodo')> -1) {
                                if ( unreaded_mes > 0 && isMobile == null ) {
                                    document.title = "Brite - сообщения - " + unreaded_mes;
                                }
                                else {
                                    document.title = "Brite";
                                }
                            }
                        }//if mobile
                        else{
                            var messages_count = 0;
                            //собираем все сообщения
                            for ( id in onlineChatDialogs ) {
                                messages_count += onlineChatDialogs[id].messengesAmount;
                            }

                            if(messages_count > 0){
                                if($('[data-whatto="chat"] .konv-tiny-notification').length == 0){
                                    $('[data-whatto="chat"]').append('<div class="konv-tiny-notification">'+messages_count+'</div>');
                                }//если поле есть
                                else{
                                    $('[data-whatto="chat"] .konv-tiny-notification').text(messages_count);
                                }

                                for(id in onlineChatDialogs){
                                    //меняем текст превью
                                    $('[data-userconversationid="'+onlineChatDialogs[id].oc_id+'"] .konv-chat-messege-preview').text(onlineChatDialogs[id].lastMessegeText);
                                    //добавляем иконку с непрочитанными
                                    if(onlineChatDialogs[id].messengesAmount>0){

                                        if($('[data-userconversationid="'+onlineChatDialogs[id].oc_id+'"] .konv-tiny-notification').length == 0){
                                            $('[data-userconversationid="'+onlineChatDialogs[id].oc_id+'"] .konv-user-icon-m').after('<div class="konv-tiny-notification">'+onlineChatDialogs[id].messengesAmount+'</div>');
                                        }else{
                                            $('[data-userconversationid="'+onlineChatDialogs[id].oc_id+'"] .konv-tiny-notification').text(onlineChatDialogs[id].messengesAmount);
                                        }

                                    }
                                }

                                $('.quickinfopanel').on('click', '[data-whatto="chat"]', function(){
                                    $('[data-whatto="chat"] .konv-tiny-notification').remove();
                                });
                            }
                        }
                    }
                })
            }
        }, 3000);
    },

    editMessege(mesId,actionId){
        var messegeText = $('[data-mesesgeid="'+mesId+'"] .konv-messege-body').text();
        $('.onchat-main-body-footer').prepend('' +
            '<div class="konv-chat-messege-edit konv-w-100" style="display: none">' +
            '   <div class="konv-flex-row">' +
            '       <div class="konv-text">Редактировать</div>' +
            '       <div class="canseledit konv-text">Отмена</div>' +
            '   </div>' +
            '</div>')

        $('.konv-chat-messege-edit').slideDown();

        $('.operator-input-field').text(messegeText);

        var inputHeight = $( '.operator-input-field' ).height();
        if ( inputHeight > 50 ) {
            $( '.onchat-main-body-chat' ).attr( 'style', 'height: calc(80% - ' + inputHeight + 'px) !important' );
        }
        else {
            $( '.onchat-main-body-chat' ).attr( 'style', '' );
        }
        konvFramework.elements.chat.chatEdit = mesId;

    },

    deleteMessege(mesId,actionId){
        jQuery.ajax({
            type: "POST",
            url: konvController,
            data: {
                'action': 'delete-chat-messege',
                'oc_id': actionId,
            },
            success: function (onlineChatDialogsRaw) {

                $('[data-mesesgeid="'+actionId+'"]').slideUp(300, function(){

                    $(this).remove();
                });
            }
        });
    },

    quoteMessege(mesId,actionId){
        if($('.operator-input-field .chat_quote').length > 0){
            return;
        }

//получаем текст или картинку
        var messegeText;
        if($('[data-mesesgeid="' + mesId + '"] .konv-messege-body div').is('.konv-chat-image')){

            messegeText = $('[data-mesesgeid="' + mesId + '"] .konv-messege-body').html();
        }
        else{
            messegeText = $('[data-mesesgeid="' + mesId + '"] .konv-messege-body').text().substring(0, 100) + '...';
        }

        if ( $( '[data-mesesgeid="' + mesId + '"] .konv-messege-body .chat_quote' ).length > 0 ) {
            messegeText = $( '[data-mesesgeid="' + mesId + '"] .konv-messege-body .chat_quote' ).next().text().substring(0, 100) + '...';
        }
        $( '.operator-input-field' ).prepend( '<div class="chat_quote" data-mesId = "'+mesId+'">' + messegeText + '<div class="close_quote"><i class="fas fa-times"></i></div></div>' );
        $( '.operator-input-field' ).append( '<div contenteditable="true"> </div>' );

        var inputHeight = $( '.operator-input-field' ).height();

        if ( inputHeight > 50 ) {
            $( '.onchat-main-body-chat' ).attr( 'style', 'height: calc(80% - ' + inputHeight + 'px) !important' );
        }
        else {
            $( '.onchat-main-body-chat' ).attr( 'style', '' );
        }
        $('.operator-input-field div[contenteditable="true"]').focus();
    },

    removeChat(chatId){

        jQuery.ajax({
            type: "POST",
            url: konvController,
            data: {
                'action': 'get_chat_info',
                'oc_conversationid': chatId,

            },
            success: function (chatData) {

                var partisipants = JSON.parse(JSON.parse(chatData)[0].oc_participants);

                console.log(partisipants, 'partisipants partisipants partisipants')

                for(id in partisipants){
                    if(partisipants[id].userId == sdfIEokD13lsri$2ss()){
                        partisipants.splice(id, 1);
                    }
                }
                console.log(partisipants, 'partisipantsNew partisipants New')

                jQuery.ajax({
                    type: "POST",
                    url: konvController,
                    data: {
                        'action': 'user-leave-chat',
                        'oc_id': chatId,
                        'new_part_array' : JSON.stringify(partisipants),
                        'userid' : sdfIEokD13lsri$2ss()
                    },
                    success: function (messegeEditRaw) {

                    }
                })
            }
        })
    },

    buildChat(mode = 'widget', placement, workmode = 'messenger', baseplacement = 'body'){

        console.log('ACTIVATATE CHAT')
        var closeKonvChat = '';
        if(mode == 'widget'){

            closeKonvChat = '<div class="konv-chat-close konv-circle-xs">' +
                '<i class="fas fa-times konv-text"></i>'+
                '</div>'

            if($('.konv-chat-widget').length == 0){
                $(baseplacement).append('<div class="konv-chat-widget" ></div>' +
                    '')
            }

            placement = '.konv-chat-widget';
        }

        var rightSideElements = '';
        var searchChat = '<div class="konv-start-search konv-circle-xs konv-d-n">' +
            '<i class="fas fa-search konv-text"></i>' +
            '</div>';

        if(workmode == 'online-chat'){
            searchChat = '';
            rightSideElements = '   <div class="onchat-close-conversation">Завершить</div>' +
                '   <div class="spam-conversation" data-toolpipkonver="Пометить как СПАМ и удалить"><i class="fas fa-ban" aria-hidden="true"></i></div>';
        }

        var renderCompanionAvatar='';
        if(isMobile != null){
            renderCompanionAvatar = '<div id="chat-header-avatar" class="messege-avatar chat_avatar konv-user-icon-m"></div>';
        }
        $(placement).html('<div class="online-chat-mainwrapper" id="konv-chat-mainwrap">' +
            '<div class="onchat-main-body-header">' +
            '<div class="konv-close-onchat-mobile konv-text">' +
            '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="17" height="17" viewBox="0 0 284.935 284.936" style="enable-background:new 0 0 284.935 284.936;"xml:space="preserve"> <g> <path d="M110.488,142.468L222.694,30.264c1.902-1.903,2.854-4.093,2.854-6.567c0-2.474-0.951-4.664-2.854-6.563L208.417,2.857 C206.513,0.955,204.324,0,201.856,0c-2.475,0-4.664,0.955-6.567,2.857L62.24,135.9c-1.903,1.903-2.852,4.093-2.852,6.567 c0,2.475,0.949,4.664,2.852,6.567l133.042,133.043c1.906,1.906,4.097,2.857,6.571,2.857c2.471,0,4.66-0.951,6.563-2.857 l14.277-14.267c1.902-1.903,2.851-4.094,2.851-6.57c0-2.472-0.948-4.661-2.851-6.564L110.488,142.468z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>' +
            '</div>' +
            '   <div class="onchat-leftside-header">' +
            '       <div class="onchat-client-name-header konv-text"></div>' +
            '   </div>' +
            '<div class="onchat-rightside-header">' +
            searchChat +
            renderCompanionAvatar+
            rightSideElements +
            closeKonvChat +
            '</div></div>' +
            '<div class="konv-chat-drop"></div>' +
            '<div class="onchat-main-body-chat" id="onchat-main-body-chat"></div>' +
            '' +
            '<div class="onchat-main-body-footer">' +
            '<div class="operator-form-konver">' +
            '<div class="konv-chat-additioanl-options konv-chat-footer-elem">' +
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 448 448" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>' +
            '</div>' +
            '   <div type="text" class="operator-input-field konv-text needsclick" autocomplete="off" contenteditable="true" placeholder="Введите ваше сообщение"></div>' +
            '   <label for="chatFile" class="konv-chat-file-upload-wrap konv-chat-footer-elem needsclick"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M324.267,119.467c-9.426,0-17.067-7.641-17.067-17.067V0H102.4C74.123,0,51.2,22.923,51.2,51.2v375.467    c0,28.277,22.923,51.2,51.2,51.2h273.067c28.277,0,51.2-22.923,51.2-51.2v-307.2H324.267z" fill="#ffffff" data-original="#000000" style="" class=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> <g> <polygon points="341.333,10.001 341.333,85.333 416.666,85.333   " fill="#ffffff" data-original="#000000" style="" class=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg></label>' +
            '<input type="file" id="chatFile" class="konv-chat-file-upload konv-d-n">' +
            '   <div type="submit" class="operator-send-messege-button konv-chat-footer-elem">' +
            '<?xml version="1.0"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <g xmlns="http://www.w3.org/2000/svg"> <g> <path d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808    L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193    c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409    C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z" fill="#ffffff" data-original="#000000" style=""/> </g> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg></div>' +
            '</div></div>' +
            '</div>');

        $('#konv-chat-mainwrap').on('click', '.scrollDown', function(){
            var n = $(".onchat-main-body-chat").prop("scrollHeight") - 100;

            $('.onchat-main-body-chat').animate({ scrollTop: n }, 500);
            $(this).removeClass('konv-scale-in-fade-in');
            $(this).addClass('konv-fade-out');
            setTimeout(function () {
                $('.scrollDown').remove();
            },500)
        })



        $('#konv-chat-mainwrap').on('click', '.open-more-actions', function(){
            var dataId = $(this).closest('.swipeout').find('.konv-messege-wrapper').data('mesesgeid');


        })

        $('#konv-chat-mainwrap').on('drop', '.konv-chat-drop', function (e) {
            e.stopPropagation();
            e.preventDefault();

            dropevent = e.originalEvent

            if ($(dragged).is('.task-timo')){

                $(dragged).attr('style', '');
                $('.task-timo').attr('style', 'transition: 0.4s ease-in-out')
                konvChatSendMessege($(dragged).prop('outerHTML'));

            }else{

                var dt = e.originalEvent.dataTransfer;
                var filedrop = e.originalEvent.dataTransfer.files;
                var fd = new FormData();


                document.querySelector('.konv-chat-file-upload').files = filedrop;

            }
            $('.konv-drop-zone').removeClass('konv-drag-here');
            $('.konv-chat-drop').removeClass('konv-chat-drop-vidible')

        });


        $('#konv-chat-mainwrap').on('taphold', '.onchatmessege-konver', function(){

            $(this).addClass('konv-mes-scale');

            var messegeContextId = $(this).closest('[data-mesesgeid]').attr('data-mesesgeid');
            var parent = $(this).closest('.konv-messege-wrapper');

            if($(parent).is('.onchat-operator-messege-konver')){


                if($('.sheet-modal.chat-context').length > 0){
                    closemodal('.chat-context');
                }
                // actions-menu

                konvapp.misc.contextMenuOpen($(this), [
                    {'title' : '<i class="fas fa-edit"></i> '+getLocale('Изменить'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="edit"'},
                    {'title' : '<i class="fas fa-quote-right"></i> '+getLocale('Цитировать'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="quote"'},
                    {'title' : '<i class="fas fa-trash-alt"></i> '+getLocale('Удалить'),           'class' : 'konv-chat-context-action', data : 'data-actionchat="delete"'},
                ], undefined, undefined, 'chatcontextmenu ', function(){


                    $('.chatcontextmenu').on('click', '.konv-chat-context-action', function(){

                        var actionId = konvFramework.elements.chat.context;
                        var actionType = $(this).attr('data-actionchat');
                        var mesId = messegeContextId;
                        if(mesId == undefined){
                            mesId = actionId;
                        }
                        if(actionType == 'edit'){


                            konvapp.elements.chat.editMessege(mesId, actionId)

                        }else if(actionType == 'delete'){


                            konvapp.elements.chat.deleteMessege(mesId, actionId)

                        }else if( actionType == 'quote' ){

                            konvapp.elements.chat.quoteMessege(mesId, actionId)
                        }
                    })
                });

            }else{

                if($('.sheet-modal.chat-context').length > 0){
                    closemodal('.chat-context');
                }


                var actionsChat = [{'title' : '<i class="fas fa-quote-right"></i> '+getLocale('Цитировать сообщение'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="quote"'}]

                if(visibilityvisibility == true){
                    actionsChat = [{'title' : '<i class="fas fa-edit"></i> '+getLocale('Изменить'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="edit"'},
                        {'title' : '<i class="fas fa-quote-right"></i> '+getLocale('Цитировать'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="quote"'},
                        {'title' : '<i class="fas fa-trash-alt"></i> '+getLocale('Удалить'),           'class' : 'konv-chat-context-action' + visibilityHidden, data : 'data-actionchat="delete"'},]
                }

                konvapp.misc.contextMenuOpen($(this), actionsChat, undefined, undefined, 'chatcontextmenu', function(){

                    $('.chatcontextmenu').on('click', '.konv-chat-context-action', function(){

                        var actionId = konvFramework.elements.chat.context;
                        var actionType = $(this).attr('data-actionchat');
                        var mesId = messegeContextId;
                        if(mesId == undefined){
                            mesId = actionId;
                        }
                        if(actionType == 'edit'){


                            konvapp.elements.chat.editMessege(mesId, actionId)

                        }else if(actionType == 'delete'){


                            konvapp.elements.chat.deleteMessege(mesId, actionId)

                        }else if( actionType == 'quote' ){

                            konvapp.elements.chat.quoteMessege(mesId, actionId)
                        }
                    })
                });
            }
        })

        $('#konv-chat-mainwrap .operator-form-konver').submit(function(){

            event.preventDefault()

            var inputFiled = $(this).find('.operator-input-field');
            $(inputFiled).focus();

            if(konvFramework.elements.chat.chatEdit != 0){
                jQuery.ajax({
                    type: "POST",
                    url: konvController,
                    data: {
                        'action': 'update-status-edit-messege',
                        'oc_id': konvFramework.elements.chat.chatEdit,
                        'oc_body' : $(inputFiled).html()

                    },
                    success: function (messegeEditRaw) {

                        console.log(messegeEditRaw);


                        $('.konv-chat-messege-edit').slideUp(300, function(){
                            $(this).remove()
                        })

                        $('[data-mesesgeid="'+konvFramework.elements.chat.chatEdit+'"]').find('.konv-messege-body').text($('.operator-input-field').html())
                        $('.operator-input-field').html('');

                    }
                })
            }else{
                konvChatSendMessege($(inputFiled).html(), $(inputFiled).text())
            }
        })

        $('#konv-chat-mainwrap .konv-start-search').click(function(){

            konvFramework.elements.chat.buildChatSearcher($(this));
        })

        $('#konv-chat-mainwrap .open-sticker-panel').click(function(){
            jQuery.ajax({
                type: "POST",
                url: 'https://konveier.com/temp_controller.php',
                data: {
                    'action': 'get_stickers'
                },
                success: function (stickersraw) {

                    var stickers = JSON.parse(stickersraw);

                    console.log(stickers);

                    $('.konv-chat-drop').after(''+
                        '<div class="stickers-container" id="sticker-conatiner" style="display: none">'+
                        '<div class="stickers-container_header">' +
                        '<div class="stickers-container_title konv-text">Выберите Стикер</div>'+
                        '<div class="close-sticker-panel"><i class="fas fa-times"></i></div>'+
                        '</div>'+
                        '<div class="stickers-container_body"></div>'+
                        '</div>')

                    for (id in stickers){
                        var img_url = 'https://konveier.com/britemedia/stickers/'+stickers[id];
                        $('.stickers-container .stickers-container_body').append('<div class="sticker_single" data-img_url = "'+img_url+'" style="background-image: url('+img_url+')">');
                    }
                    //закрываем панель
                    $('.online-chat-mainwrapper .konv-chat-context-panel').addClass('konv-scale-out');

                    setTimeout(function () {
                        $( '.online-chat-mainwrapper .konv-chat-context-panel' ).remove();
                    },500)

                    $('#konv-chat-mainwrap .konv-chat-additioanl-options').removeClass('svg-rotate');

                    $('.stickers-container').slideDown();

                    $('#sticker-conatiner .close-sticker-panel').click(function (){

                        $('.stickers-container').slideUp(300,function(){
                            $(this).remove();
                        })
                    })
                    $('#sticker-conatiner .sticker_single').click(function (){
                        var img_url = $(this).data('img_url');
                        var img_mes = '<div class="ac openimage konv-chat-image sticker" data-imgurlattach="' + img_url + '" style="background-image: url(' + img_url + ')"></div>';

                        konvChatSendMessege(img_mes, 'image', '', 'image', '');

                        $('.stickers-container').slideUp(300,function(){
                            $(this).remove();
                        })
                    })
                }
            })
        });

        $('#konv-chat-mainwrap').on('change', '.konv-chat-file-upload', function(){
            var maxSize = 10485760;
            if(!$(this)[0].files[0].type.indexOf('image')>-1){
                maxSize = 209715200;
            }

            if ($(this)[0].files[0].size < maxSize) {
                console.log('file',$(this)[0].files[0]);

                files = this.files;

                //отправка прелоадера
                if ( files[0].type.indexOf('image') > -1 ) {
                    konvChatSendMessege('<div class="ac konv-chat-image chat-preloader-image"><i class="far fa-image konv-text"></i></div>', 'image', '', 'image', '');
                    setTimeout(function () {
                        $('.chat-preloader-image').prepend('<div class="konv_chat_preloader"><hr/><hr/><hr/><hr/></div>');
                    }, 200);
                }
                else if( files[0].type.indexOf('video') > -1 ){
                    konvChatSendMessege('<div class="konv-video-upload-chat chat-preloader-image"><i class="fas fa-video konv-text"></i></div>', 'video', '', 'video', '');
                    setTimeout(function () {
                        $('.chat-preloader-image').prepend('<div class="konv_chat_preloader"><hr/><hr/><hr/><hr/></div>');
                    }, 200);
                }

                konvUpload($(this), function () {
                    var fileName='';
                    var filteType = 'image';
                    if(fileTypeKonver.indexOf('application') >-1 || fileTypeKonver.indexOf('text') >-1  ){
                        filteType = 'document';
                        fileName = konvImagelink.replace('https://britetodo.com/media/','');
                    }else if(fileTypeKonver.indexOf('video') >-1) {
                        filteType = 'video';
                        fileName = konvImagelink.replace('https://britetodo.com/media/', '');
                    }
                    var mes_id = $('.swipeout:last-child .konv-messege-wrapper').data('mesesgeid');
                    if ( filteType == 'image' ) {


                        var img_mes = '<div class="ac openimage konv-chat-image" data-imgurlattach="' + konvImagelink + '" style="background-image: url(' + konvImagelink + ')"></div>';
                        upload_data_after_preload(img_mes,mes_id);
                    }
                    else if ( filteType == 'document' ) {


                        konvChatSendMessege('<div class="konv-chat-file" data-fileurlattach="' + konvImagelink + '" ><a download href="' + konvImagelink + '">' + fileName + '</a></div>', konvImagelink, konvImagelink, filteType, konvImagelink)

                    }
                    else if ( filteType == 'video' ) {
                        var autoplay_param = (isMobile != null) ? '' : 'autoplay';
                        var video_mes = '<div class="ac openimage konv-video-upload-chat chat-video" data-imgurlattach="' + konvImagelink + '"><video style="width:100%; height: 190px" src = "' + konvImagelink + '" '+autoplay_param+' loop muted></video><div class="konv-play-video-button" style="background: url(https://konveier.com/uploads/play-button.svg)"></div></div>';
                        //
                        upload_data_after_preload(video_mes,mes_id, '.onchatmessege-konver');
                    }
                    else {
                        alert('mistake')
                    }
                });

            } else {

                alert('Слишком большой файл')
            }
        })

        $('#konv-chat-mainwrap .chat_quote').click(function(){
            if($(this).attr('data-mesid') != undefined && !$(this).is('.close_quote')){
                var target_message = $(this).attr('data-mesid');
                function scroll_to_mes(target_message){
                    if($('.onchat-main-body-chat [data-mes_id="'+target_message+'"]').length != 0){
                        var el_srcoll = ($('.onchat-main-body-chat').height() + $('.onchat-main-body-chat').find('[data-mes_id="'+target_message+'"]').offset().top) * -1 + 1500;
                        // console.log($('.onchat-main-body-chat').find('[data-mes_id="'+target_message+'"]').offset().top, $('.onchat-main-body-chat').height())

                        (localStorage.getItem('chat-debug') == 'true') ? console.log(el_srcoll) : '';

                        $(".onchat-main-body-chat").animate({ scrollTop: $(".onchat-main-body-chat").prop("scrollHeight")-el_srcoll}, 300);
                    }
                    else{

                    }

                }
                scroll_to_mes(target_message);
            }
        })
        $('#konv-chat-mainwrap .close_quote').click(function(target){

            $(this).parent().slideUp(300, function(){
                $( '.onchat-main-body-chat' ).attr( 'style', '' );
                $(this).remove();

            })

        })

        $('#konv-chat-mainwrap .konv-chat-start-search').click(function(){

            konvFramework.elements.chat.c($(this))
        })


        $('#konv-chat-mainwrap .konv-chat-close').click(function(){

            $('.konv-chat-widget').removeClass('konv-chat-visible');


            localStorage.removeItem(activeConversation);
            if(typeof(cordova) == "object"){
                Keyboard.hide();
            }

        })

        $('#konv-chat-mainwrap .operator-send-messege-button').click(function(){

            $('.operator-form-konver').submit()
        })

        $('#konv-chat-mainwrap').on('paste', '[contenteditable]', function(e){
            e.preventDefault();
            const text = (e.originalEvent || e).clipboardData.getData('text/plain');
            window.document.execCommand('insertText', false, text);
        })


        chatOptionsContext.push({
                'lable': getLocale('Стикеры'),
                'class' : 'open-sticker-panel',
                'icon' : '<i class="far fa-sticky-note"></i>'
            }
        );
        $('#konv-chat-mainwrap .konv-chat-additioanl-options').click(function(event){

            if($('.online-chat-mainwrapper .konv-chat-context-panel').length == 0) {
                $('.online-chat-mainwrapper').append('' +
                    '<div class="konv-chat-context-panel konv-flex-row" style="">' +
                    '</div>');

                $(this).addClass('svg-rotate');

                for (id in chatOptionsContext) {
                    $('.konv-chat-context-panel').append( '' +
                        '<div class="' + chatOptionsContext[id].class + ' konv-chat-context-element konv-flex-col">' +
                        chatOptionsContext[id].icon + '<span class="konv-text">' + chatOptionsContext[id].lable + '</span>' +
                        '</div>' );
                }

                $('.online-chat-mainwrapper .konv-chat-context-panel').addClass('konv-scale-in-fade-in');
            }//если панель уже открыта
            else{
                // $('.online-chat-mainwrapper .konv-chat-context-panel').removeClass('konv-scale-in-fade-in');
                $('.online-chat-mainwrapper .konv-chat-context-panel').addClass('konv-scale-out');

                setTimeout(function () {
                    $( '.online-chat-mainwrapper .konv-chat-context-panel' ).remove();
                },500)

                $(this).removeClass('svg-rotate');
            }
        })

        $('#konv-chat-mainwrap').on('click', '.onchat-main-body-chat', function(event){
            var target = event.target;
            if(!$(target).is('.konv-chat-context-panel')){
                $('.online-chat-mainwrapper .konv-chat-context-panel').addClass('konv-scale-out');

                $('#konv-chat-mainwrap .konv-chat-additioanl-options').removeClass('svg-rotate');
            }
        })

        $('#konv-chat-mainwrap .konv-chat-close').click(function(){
            $('.konv-chat-widget').removeClass('konv-chat-visible');
            localStorage.removeItem(activeConversation)
            if(typeof(cordova) == "object"){
                Keyboard.hide();
            }
        })

        setTimeout(function(){
            $('#konv-chat-mainwrap .operator-input-field').keydown(function(e){

                var inputHeight = $('.operator-input-field').height();

                if(inputHeight > 50){
                    $('.onchat-main-body-chat').attr('style', 'height: calc(80% - '+inputHeight+'px) !important')
                }else{
                    $('.onchat-main-body-chat').attr('style', '')
                }


                if(e.ctrlKey &&  e.keyCode == 13) {


                }else if (e.keyCode == 13){
                    e.preventDefault()
                    $('.operator-form-konver').submit()
                }
            });

            $('#konv-chat-mainwrap').on('click', '.canseledit', function(){
                konvFramework.elements.chat.chatEdit = 0;
                $('.operator-input-field').text('');
                $('.konv-chat-messege-edit').slideUp();

            })
        }, 300)

        $('#konv-chat-mainwrap').on('click', '#konv-chat-load-more-messeges', function(){

            $('.onchat-main-body-chat').prepend('<div class="konv-load-buffer"></div>');

            KonvloadMesseges(localStorage.getItem(activeConversation), chatOffset, 'loadOld')
            $(this).remove();

        })

        $('#konv-chat-mainwrap .konv-close-onchat-mobile').click( function (){
            if($(this).attr('data-userconversationid') == 'false' || $(this).attr('data-userconversationid') == 'none' || $('.konv-close-onchat-mobile').attr('data-userconversationid') == undefined){
                $('.konv-chat-widget').removeClass('konv-chat-visible');
                $('html').removeClass('konv-chat-is-active')
                localStorage.removeItem(activeConversation)
                if(typeof(cordova) == "object"){
                    Keyboard.hide();
                }
                return;
            }

            if($(this).attr('data-userconversationid') != 'none'){

                activatechat($(this).attr('data-userconversationid'))
            }else{

                $('.konv-chat-widget').removeClass('konv-chat-visible');
                localStorage.removeItem(activeConversation)
                if(typeof(cordova) == "object"){
                    Keyboard.hide();
                }
            }
        })

        if ( isMobile == null ) {
            $('#konv-chat-mainwrap').on('click', '.konv-chat-call-context', function() {
                konvFramework.elements.chat.context = $(this).closest('[data-mesesgeid]').attr('data-mesesgeid');

                $(this).addClass('konv-mes-scale');

                var messegeContextId = $(this).closest('[data-mesesgeid]').attr('data-mesesgeid');
                var parent = $(this).closest('.konv-messege-wrapper');

                if($(parent).is('.onchat-operator-messege-konver')){


                    if($('.sheet-modal.chat-context').length > 0){
                        closemodal('.chat-context');
                    }

                    konvapp.misc.contextMenuOpen($(this), [
                        {'title' : '<i class="fas fa-edit"></i> '+getLocale('Изменить'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="edit"'},
                        {'title' : '<i class="fas fa-quote-right"></i> '+getLocale('Цитировать'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="quote"'},
                        {'title' : '<i class="fas fa-trash-alt"></i> '+getLocale('Удалить'),           'class' : 'konv-chat-context-action', data : 'data-actionchat="delete"'},
                    ], undefined, undefined, 'chatcontextmenu', function(){


                        $('.chatcontextmenu').on('click', '.konv-chat-context-action', function(){

                            var actionId = konvFramework.elements.chat.context;
                            var actionType = $(this).attr('data-actionchat');
                            var mesId = messegeContextId;
                            if(mesId == undefined){
                                mesId = actionId;
                            }
                            if(actionType == 'edit'){


                                konvapp.elements.chat.editMessege(mesId, actionId)

                            }else if(actionType == 'delete'){


                                konvapp.elements.chat.deleteMessege(mesId, actionId)

                            }else if( actionType == 'quote' ){

                                konvapp.elements.chat.quoteMessege(mesId, actionId)
                            }

                        })
                    });
                }else{

                    if($('.sheet-modal.chat-context').length > 0){
                        closemodal('.chat-context');
                    }



                    konvapp.misc.contextMenuOpen($(this), [
                        {'title' : '<i class="fas fa-edit"></i> '+getLocale('Изменить'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="edit"'},
                        {'title' : '<i class="fas fa-quote-right"></i> '+getLocale('Цитировать'), 'class' : 'konv-chat-context-action', data : 'data-actionchat="quote"'},
                        {'title' : '<i class="fas fa-trash-alt"></i> '+getLocale('Удалить'),           'class' : 'konv-chat-context-action' + visibilityHidden, data : 'data-actionchat="delete"'},
                    ], undefined, undefined, 'chatcontextmenu actions-menu', function(){


                        $('.chatcontextmenu').on('click', '.konv-chat-context-action', function(){



                            var actionId = konvFramework.elements.chat.context;
                            var actionType = $(this).attr('data-actionchat');
                            var mesId = messegeContextId;
                            if(mesId == undefined){
                                mesId = actionId;
                            }
                            if(actionType == 'edit'){


                                konvapp.elements.chat.editMessege(mesId, actionId)

                            }else if(actionType == 'delete'){


                                konvapp.elements.chat.deleteMessege(mesId, actionId)

                            }else if( actionType == 'quote' ){

                                konvapp.elements.chat.quoteMessege(mesId, actionId)
                            }


                        })
                    });
                }

            })
        }else{
            $('#konv-chat-mainwrap').on('taphold', '.onchatmessege-konver', function(event){
                if($(event.target).is('.konv-chat-image')){
                    return;
                }

                konvFramework.elements.chat.context = $(this).closest('[data-mesesgeid]').attr('data-mesesgeid');
            })
        }

        $('#konv-chat-mainwrap').on('click', '.konv-video-upload-chat, .konv-play-video-button', function(){
            var videoSrc = $(this).parent().find('.konv-video-upload-chat').attr('src');
        })

//обработчик контекста
        $('#konv-chat-mainwrap').on('click', '.konv-chat-context-action', function(){

            var actionId = konvFramework.elements.chat.context;
            var actionType = $(this).attr('data-actionchat');
            var mesId = $(this).data('mes_id');
            if(mesId == undefined){
                mesId = actionId;
            }
            if(actionType == 'edit'){

                konvFramework.elements.chat.editMessege(mesId, actionId)

            }else if(actionType == 'delete'){


                konvFramework.elements.chat.deleteMessege(mesId, actionId)

            }else if( actionType == 'quote' ){

                konvFramework.elements.chat.quoteMessege(mesId, actionId)
            }

            closemodal('.chat-context');
        })
    }
}

setTimeout(function(){
    if(localStorage.getItem(activeConversation) != undefined && showChatAuto == true){

        if($('.online-chat-mainwrapper').length == 0){
            konvFramework.elements.chat.buildChat('widget', '', 'messenger', '#app')
        }

        $('.konv-chat-widget').addClass('konv-chat-visible');

        activatechat(localStorage.getItem(activeConversation));

        setTimeout(function(){
            konverEnvoqer('chat');
        }, 1000)

    }
}, 2000)

/**
 *
 * @param data_mes - media message
 * @param mes_id - message id
 */
function upload_data_after_preload(data_mes, mes_id, target='.konv-messege-body'){
    jQuery.ajax({
        type: "POST",
        url: konvController,
        data: {
            'action': 'update-status-edit-messege',
            'oc_id': mes_id,
            'oc_body' : data_mes

        },
        success: function (messegeEditRaw) {


            console.log($('[data-mesesgeid="'+mes_id+'"]').find(target), 1111111111111);
            $('[data-mesesgeid="'+mes_id+'"]').find(target).html(data_mes);
            $('.konv_chat_preloader').fadeOut(300, function(){
                $(this).remove();
            });
        }
    })
}




/**
 *
 * @param url = ccылка отправленная в сообщении
 * @param id = message id for udating
 * its add url data to message buble and upload this data on server
 */
function add_url_data (url, id) {
    var urldata = {};
    //preload
    $('[data-mesesgeid="'+id+'"]').after(''+
        '<div class="konv_chat_preloader"><hr/><hr/><hr/><hr/></div>');

    jQuery.ajax({
        type: "POST",
        url: 'https://sophie-market.uxp.ru/controller.php',
        data: {
            'action': 'find-url-data',
            'url': url,
        },
        success: function ( urldataraw ) {

            console.log(urldataraw);
            if(urldataraw.indexOf('<') > -1){
                urldata.title = 'Link';
                urldata.img = 'https://konveier.com/uploads/imageNotFound.svg';
                urldata.desc = '';
            }
            else {
                urldata = JSON.parse(urldataraw);

                if (urldata.title == 'none') {

                    urldata.title = 'Link';

                }
                if (urldata.img == 'none') {

                    urldata.img = 'https://konveier.com/uploads/imageNotFound.svg'

                }
            }
            urldata.desc =  urldata.desc.substring(0,50) + '...';
            var urlData = '' +
                '<a class="url-data-link link external" href = "'+url+'" target="_blank">'+
                '<div class="url-data-container">' +
                '<div class="url-data-image" style="background-image: url(' + urldata.img + ')"></div>' +
                '<div class="url-data-text">' +
                '<div class="url-data-title">' + urldata.title + '</div>' +
                '<div class="url-data-desc">' + urldata.desc + '</div>' +
                '</div>' +
                '</div>'+
                '</a>';

            $('[data-mesesgeid="'+id+'"] .timestemponchat').after(urlData);

            jQuery.ajax({
                type: "POST",
                url: konvController,
                data: {
                    'action': 'update-status-edit-messege',
                    'oc_id': id,
                    'oc_body' : $('[data-mesesgeid="'+id+'"] .onchatmessege-konver').html()

                },
                success: function (messegeEditRaw) {
                }
            })

            $('.konv_chat_preloader').fadeOut(300, function(){
                $(this).remove();
            })
        }
    })

}
/**
 * @param messege - сообщение которое нужно отправить
 * @param pushText - текст, который будет отправлен в пуше
 *
 * */
function konvChatSendMessege(messege, pushText, img = '', type = 'text', attachment = 'null', konversation = 'none'){
    if(messege ==''){
        return false;
    }

    var operarotdate = new Date();

    operarotdate = operarotdate.toISOString();
    console.log(operarotdate)

    var chatId = parseInt(localStorage.getItem(activeConversation))

    if(konversation != 'none'){
        chatId = konversation;
    }


    messege = messege.replace('contenteditable="true"', '');
    messege = messege.replace(/'/g, '"');
    console.log(messege);
    jQuery.ajax({
        type: "POST",
        url: konvController,
        data: {
            'action': 'send_operators_message',
            'oc_conversationid': chatId,
            'oc_sender' : localStorage.getItem('konvUserMain'),
            'oc_body' : messege,
            'oc_messege_type' : type,
            'oc_date' : operarotdate,
            'oc_attachments' : attachment
        },
        success: function (operatorMessegeRaw) {

            console.log(operatorMessegeRaw, 'Отправленое сообщение');


            $('.operator-input-field').html('');
            $('.onchat-main-body-chat').attr('style', '')

            var operatorMessege = JSON.parse( operatorMessegeRaw )[0];

            renderOCoperatormessege( operatorMessege );

            scrollChat();

            var srchurl = '';
            if(messege.indexOf( 'http' ) != -1 && type != 'video' && type != 'image' && type != 'document' && messege.indexOf('konv-chat-image') == -1){
                var inputText = messege.split(' ');

                var reg = /(?:https?|file|http|ftp):\/\/([^\/\s]+)[^\s]*/ig;

                for ( id in inputText ) {

                    if ( inputText[id].match(reg) && !inputText[id].includes('1500') && !inputText[id].includes('xmlns')) {

                        srchurl = inputText[id].replace('&nbsp;', '');

                    }

                }

                if( srchurl != '' ) {
                    add_url_data( srchurl, operatorMessege.oc_id );
                }
            }



            setTimeout(function(){

                jQuery.ajax({
                    type: "POST",
                    url: konvController,
                    data: {
                        'action': 'check-single-messege',
                        'oc_id': operatorMessege.oc_id
                    },
                    success: function (singleMessegeRaw) {

                        (localStorage.getItem('chat-debug') == 'true') ? console.log(singleMessegeRaw, 'Данные об этом сообщении') : '';


                        var singleMessege = JSON.parse(singleMessegeRaw)[0];

                        if(singleMessege.oc_status != 'viewed_message'){

                            jQuery.ajax({
                                type: "POST",
                                url: konvController,
                                data: {
                                    'action': 'get-chat-participants',
                                    'oc_id' : localStorage.getItem(activeConversation)
                                },
                                success: function (participantsRaw) {

                                    (localStorage.getItem('chat-debug') == 'true') ? console.log(participantsRaw, 'Участники переписки') : '';


                                    var participants = JSON.parse(participantsRaw)[0];
                                    (localStorage.getItem('chat-debug') == 'true') ? console.log(participants, 'Участники переписки') : '';

                                    if(isJsonTimo(participants.oc_participants)){
                                        participants = JSON.parse(participants.oc_participants);



                                        for(id in participants){
                                            if(participants[id].userId != localStorage.getItem('konvUserMain')){


                                                if(localStorage.getItem('konvActChat-britetodo.com') != 77) {
                                                    sendPUSHCHAT(participants[id].userId, pushText, img, chatId)
                                                }
                                            }
                                        }
                                    }

                                }
                            });
                        }
                    }
                })
            }, 2000)
        }
    });
}

function sendPUSHCHAT(userId, pushText, img, chatId){


    jQuery.ajax({
        type: "POST",
        url: konvController,
        data: {
            'action': 'get-chat-participant',
            'data' : localStorage.getItem('konvUserMain')
        },
        success: function (participantDataRaw) {

            console.log(participantDataRaw, 'Данные о пользователе нотификация')

            var participantDataRaw = JSON.parse(participantDataRaw)[0];
            console.log(participantDataRaw)
            // sendPushNotification(parseInt(userId), 'Новое сообщение от ' + participantDataRaw.lt_name, pushText, img, 'setTimeout(function(){ konvFramework.elements.chat.widgetChatActivate('+parseInt(localStorage.getItem(activeConversation))+');}, 5000)')
            sendPushNotification(parseInt(userId), 'Новое сообщение от ' + participantDataRaw.lt_name, pushText, img, 'widgetChatActivate('+chatId+')')

        }
    })
}

function scrollChat(speed = 1000){
    if(speed == 0){

        $(".onchat-main-body-chat").scrollTop($(".onchat-main-body-chat").prop("scrollHeight"));


    }else{
        $(".onchat-main-body-chat").animate({ scrollTop: $(".onchat-main-body-chat").prop("scrollHeight") - 100}, 300);
    }
}

function widgetChatActivate(targetUserId, parent = false){

    if($('.online-chat-mainwrapper').length == 0){

        konvFramework.elements.chat.buildChat('widget', '', 'messenger', '#app')
        if (typeof callNotificationRequest === 'function' && typeof(cordova) == "object") {

            callNotificationRequest()
        }
    }

    setTimeout(function(){
        $('html').addClass('konv-chat-is-active')
    }, 220)
    setTimeout(function(){
        activatechat(targetUserId, parent);

    }, 50)


    $('#konv-chat-mainwrap').on('click', '#chat-header-avatar', function(){

        jQuery.ajax({
            type: "POST",
            url: konvController,
            data: {
                'action': 'get_chat_info',
                'oc_conversationid': targetUserId,
                'userid' : sdfIEokD13lsri$2ss()
            },
            success: function(infochat) {

                var chatInfo = JSON.parse(infochat)[0];
                var projectPart = JSON.parse(chatInfo.oc_participants)
                console.log(projectPart, 'chatInfo chatInfo chatInfo chatInfo')

                modalopen('Участники', '' +
                    '<div class="project-participants-wrapper sheet-modal-brite konv-w-100 konv-h-100">' +
                    '<div class="chat-partisipants-list konv-w-100 konv-h-100 konv-flex-col"></div>' +
                    '</div>'
                )
                for(id in projectPart){
                    konvapp.elements.USERS.buildUserCard(projectPart[id].userId, '.project-partisipants-list', 'user-details');

                }
            }
        });

    })

    setTimeout(function(){


        $('.konv-chat-widget').addClass('konv-chat-visible');

        $('[data-userconversationid="'+targetUserId+'"]').find('.konv-tiny-notification').fadeOut(300, function(){
            $(this).remove();
        })

        if(isMobile != null){

            var timeoutId;
            var currentPos;
            var windowWidth = window.innerWidth / 4;
            $('.konv-chat-widget').on('pointerdown', function(e) {

                setTimeout(function(){
                    $('#onchat-main-body-chat').attr('style', '')
                }, 3000)
                console.log(e.originalEvent.clientX, 'MOuSEDOWNPOSITION')
                if(e.originalEvent.clientX < 50){

                    $('#onchat-main-body-chat').attr('style', 'overflow: hidden !important')

                    $('#app').on('touchmove', function(touchmove){

                        currentPos = touchmove.originalEvent.layerX;
                        console.log(touchmove, 'touchmovetouchmoveMOuSEDOWNPOSITION')

                        var position = touchmove.originalEvent.layerX - 30;
                        $('.konv-chat-widget').attr('style', 'transform: translate('+position+'px) !important; transition: 0s !important; z-index: 99999999999 !important')

                    })

                    $('#app').on('touchend', function() {
                        $('#onchat-main-body-chat').attr('style', '')

                        if(windowWidth > currentPos || currentPos == undefined){
                            $('.konv-chat-widget').attr('style', '')
                        }else{
                            $('.konv-chat-widget').attr('style', '')
                            $('html').removeClass('konv-chat-is-active')
                            $('.konv-chat-widget').removeClass('konv-chat-visible');
                            if(typeof(cordova) == "object"){
                                Keyboard.hide();
                            }
                        }
                        $('#app').off('touchmove')
                        $('#app').off('touchend')
                    });
                }
            })
        }

        if(isMobile == null){
            $('.operator-input-field').focus()
        }

    }, 150)
}
var chatOffset = 0;
var moreLoaded = false;

function activatechat(chatid, parent){


    if(parent == undefined){
        $('.konv-close-onchat-mobile').removeAttr('data-userconversationid');
    }else{
        $('.konv-close-onchat-mobile').attr('data-userconversationid', parent);
    }


    if(localStorage.getItem(activeConversation) == undefined){
        localStorage.setItem(activeConversation, chatid);
    }

    console.log(localStorage.getItem(activeConversation) +'!='+ chatid)

    if(localStorage.getItem(activeConversation) != chatid){
        localStorage.setItem(activeConversation, chatid);
        chatOffset = 0
    }
    chatOffset = 0


    $('.onchat-main-body-chat').find('li').fadeOut(100, function(){
        $(this).remove();
    });

    jQuery.ajax({
        type: "POST",
        url: konvController,
        data: {
            'action': 'get_chat_info',
            'oc_conversationid': chatid
        },
        success: function(infochat) {

            console.log(infochat)
            var chatinfo = JSON.parse(infochat)[0];
//            $('.onchat-client-name-header').text(chatinfo[0].oc_title);

            console.log(chatinfo.oc_chat_type, 'chatinfo.oc_chat_type')


            if(chatinfo.oc_chat_type == 'group-chat'){

                $('#konv-chat-mainwrap').attr('chat-type', 'group-chat')
                $('#konv-chat-mainwrap .onchat-client-name-header').text(chatinfo.oc_title)


            }else{
                $('#konv-chat-mainwrap').attr('chat-type', 'private')
            }

            $('.chat_avatar').attr('style', localStorage.getItem('chat_avatar'));
            if(chatinfo.oc_chat_image != null){

                $('#chat-header-avatar').attr('style', 'background-image: url('+chatinfo.oc_chat_image+')');
            }
        }
    })


    setTimeout(function(){
        KonvloadMesseges(chatid, chatOffset);
    },100)


    $('.onchat-main-body-chat').scroll(function(e){

        var offsetChat = $('.onchat-main-body-chat').scrollTop();

        if(offsetChat < 200 && moreLoaded == false){
            //KonvloadMesseges(chatid, chatOffset, 'loadOld')

            if($('.konv-chat-load-more-messeges').length == 0 && $('.konv-messege-wrapper').length >= 30) {
                $('.onchat-main-body-chat').prepend('<div class="konv-chat-load-more-messeges konv-button-out" id="konv-chat-load-more-messeges">Загрузить еще</div>')
            }
        }

        if(offsetChat < 1800 && $('.onchat-main-body-chat .scrollDown').length == 0){

            $('.onchat-main-body-chat').append('<div class="scrollDown konv-scale-in-fade-in"><i class="fal fa-angle-down konv-text"></i></div>');

        }else if(offsetChat >= $(".onchat-main-body-chat").prop("scrollHeight") - 1000 && !$('.onchat-main-body-chat .scrollDown').length == 0){

            var scrollDown = $('.scrollDown');
            $(scrollDown).removeClass('konv-scale-in-fade-in');
            $(scrollDown).addClass('konv-fade-out');
            setTimeout(function () {
                $(scrollDown).remove();
            },500)
        }
    })
}

function KonvloadMesseges(chatid, offset, way = 'append'){
    $('.onchat-main-body-chat .chat-date-block').remove();
    jQuery.ajax({
        type: "POST",
        url: konvController,
        data: {
            'action': 'get_online_chat_single_conversation_dialog',
            'offset' : offset,
            'oc_conversationid': chatid
        },
        success: function (onlineChatMassagesRaw) {

            var onlineChatMassages = JSON.parse(onlineChatMassagesRaw);
            console.log(onlineChatMassages)
            onlineChatMassages = onlineChatMassages.reverse()

            if(onlineChatMassages.length == 0 &&  $('.onchat-main-body-chat div').length == 0){
                $('.onchat-main-body-chat').prepend('<div class="emptydialog" style="text-align:center;">Диалог еще пуст</div>')
            }

            var i = 0;

            for(id in onlineChatMassages){

                if(onlineChatMassages[i + 1]) {
                    var dateBlock = onlineChatMassages[i+1].oc_date.split('T')[0];
                    var dateObjectPre = Date.parse(onlineChatMassages[i].oc_date.split('T')[0]);
                    var dateObject = new Date(dateObjectPre);
                    var messageDay = dateObject.getDate();


                    var dateObjectNextPre = Date.parse(onlineChatMassages[i+1].oc_date.split('T')[0]);
                    var dateObjectNext = new Date(dateObjectNextPre);
                    var messageNextDay = dateObjectNext.getDate()


                    var pushContainer = '.onchat-main-body-chat';
                    if(way == 'loadOld'){
                        pushContainer = '.konv-load-buffer';
                    }
                    if (messageDay < messageNextDay) {
                        console.log('newday')
                        console.log(messageDay, messageNextDay)
                        $(''+pushContainer+' .swipeout:last-child').before('<div class="chat-date-block"><div class="konv-text">' + processDate(dateBlock, 'datefull') + '</div></div>')
                    }

                }
                i++;

                if(localStorage.getItem('onchatMode') == 'messenger'){
                    if(onlineChatMassages[id].oc_sender != localStorage.getItem('konvUserMain')){
                        renderOCusermessage(onlineChatMassages[id], way);
                    }else{
                        renderOCoperatormessege(onlineChatMassages[id], way);
                    }

                }else{
                    if(onlineChatMassages[id].oc_type == "usermessage" ){

                        renderOCusermessage(onlineChatMassages[id], way);
                    }else{
                        renderOCoperatormessege(onlineChatMassages[id], way);
                    }

                }
                chatOffset++;

            }

            if(way == 'loadOld'){

            }else{
                scrollChat(0)
            }

            beginsearchForMassages('messenger')
        }
    });
}

function getUserAvatar(userId){

    jQuery.ajax({
        type: "POST",
        url: konvController,
        data: {
            'action': 'get-user-avatar',
            'oc_id': userId
        },
        success: function (onlineChatMassagesRaw) {

        }
    })
}

$('.kb-mainbody').on('click', '.open-online-chat-conversation', function(){
    activatechat($(this).closest('[data-conversationid]').attr('data-conversationid'))
});

function buildMessage(messege, way = 'default'){
    if($('.onchat-main-body-chat .emptydialog').length != 0){
        $('.emptydialog').remove();
    }
    var swipe_action = '';
    if(isMobile != null){
        swipe_action = '  <div class="swipeout-actions-right">\n' +
            '            <a href="#" class="quote konv-chat-context-action konv-text swipeout-overswipe" data-mes_id = "'+messege.oc_id+'" data-actionchat="quote"><i class="fas fa-reply"></i></a>\n' +
            '            </div>';
    }
    var contextMenuMessege = '<div class="konv-chat-call-context sender-message-context "><i class="fal fa-angle-down konv-text"></i></div>';
    var template = '<li class="swipeout">' +
        '<div class="item-content swipeout-content">' +
        '<div class="item-inner">'+
        '<div  class="konv-messege-wrapper konv-fade-in" data-konvSenderId="' + messege.oc_sender + '" data-mes_id = "'+messege.oc_id+'" data-mesesgeid="' + messege.oc_id + '">' +
        '<div class="onchatmessege-konver needsclick onchat-user-messege-konver" >' +
        contextMenuMessege +
        '<div class="konv-messege-body">' + messege.oc_body + '</div><div class="timestemponchat">' + processDate(messege.oc_date, 'time') + '</div></div></div></div>' +
        '</div>'+
        '</div>'+
        swipe_action+
        '</li>';

    if(messege.oc_messege_type == 'document'){
        var fileName = messege.oc_attachments.replace('https://britetodo.com/media/', '');
        template = '<div  class="konv-messege-wrapper konv-fade-in" data-konvSenderId="'+messege.oc_sender+'" data-mesesgeid="'+messege.oc_id+'">' +
            '<div class="onchatmessege-konver needsclick onchat-user-messege-konver">' +
            contextMenuMessege +
            '' +
            '<a class="konv-download-file-chat konv-selectable link external konv-t-xxxl" download="'+messege.oc_attachments+'"  href="'+messege.oc_attachments+'">' +
            '<svg class="konv-marg-r-15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="50" height="50" x="0" y="0" viewBox="0 0 957.599 957.6" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <g xmlns="http://www.w3.org/2000/svg"> <path d="M817.9,108.4h-28v687.901c0,45.699-37.2,82.898-82.899,82.898H423.3H197.7v25.5c0,29.201,23.7,52.9,52.9,52.9h283.6H817.8   c29.2,0,52.899-23.699,52.899-52.9V161.3C870.7,132.1,847.1,108.4,817.9,108.4z" fill="#ffffff" data-original="#000000" style=""/> <path d="M423.3,849.199h283.6c29.2,0,52.9-23.699,52.9-52.898V108.4V52.9c0-29.2-23.7-52.9-52.9-52.9H423.3H329v17.5   c0.199,1.8,0.3,3.7,0.3,5.6v115.3V168c0,41.1-33.4,74.5-74.5,74.5h-29.6H109.9c-1.5,0-3.1-0.1-4.6-0.2H86.9v554.001   c0,29.199,23.7,52.898,52.9,52.898h58H423.3L423.3,849.199z M434,669.4H249.1c-13.8,0-25-11.201-25-25c0-13.801,11.2-25,25-25h185   c13.8,0,25,11.199,25,25C459.1,658.199,447.8,669.4,434,669.4z M619,541.801H249.1c-13.8,0-25-11.201-25-25c0-13.801,11.2-25,25-25   H619c13.8,0,25,11.199,25,25C644,530.6,632.8,541.801,619,541.801z M249.1,356.3H619c13.8,0,25,11.2,25,25c0,13.8-11.2,25-25,25   H249.1c-13.8,0-25-11.2-25-25C224.1,367.5,235.3,356.3,249.1,356.3z" fill="#ffffff" data-original="#000000" style=""/> <path d="M109.9,212.5h144.9c0.1,0,0.3,0,0.4,0c24.2-0.2,43.8-19.8,44-44c0-0.1,0-0.3,0-0.4v-145c0-13.4-11-22.3-22.399-22.3   c-5.5,0-11,2-15.6,6.6L94.1,174.5C80.1,188.5,90,212.5,109.9,212.5z" fill="#ffffff" data-original="#000000" style=""/> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>' +
            '<span class="konv-chat-file-name konv-marg-r-1 konv-text">'+fileName+'</span></a>' +
            '<div class="timestemponchat">'+processDate(messege.oc_date, 'time')+'</div>' +
            '</div>' +
            '</div>' +
            '</div>';

    }else if(messege.oc_messege_type == 'video'){
        var fileName = messege.oc_attachments.replace('https://britetodo.com/media/', '');
        template = '<div  class="konv-messege-wrapper konv-fade-in" data-konvSenderId="'+messege.oc_sender+'" data-mesesgeid="'+messege.oc_id+'">' +
            '<div class="onchatmessege-konver needsclick" >' +
            contextMenuMessege +
            messege.oc_body+
            '<div class="timestemponchat">'+processDate(messege.oc_date, 'time')+'</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        if(isMobile != null){
            var re = /autoplay/g;
            template = template.replace(re, '');
        }
    }

    konvMessegeRender(messege.oc_id, messege.oc_sender, 'replyer')

    return template;
};


function renderOCusermessage(messege, way = 'default'){
    if($('.onchat-main-body-chat .emptydialog').length != 0){
        $('.emptydialog').remove();
    }
    var swipe_action = '';
    if(isMobile != null){
        swipe_action = '  <div class="swipeout-actions-right">\n' +
            '            <a href="#" class="quote konv-chat-context-action konv-text swipeout-overswipe" data-mes_id = "'+messege.oc_id+'" data-actionchat="quote"><i class="fas fa-reply"></i></a>\n' +
            '            </div>';
    }
    var contextMenuMessege = '<div class="konv-chat-call-context sender-message-context "><i class="fal fa-angle-down konv-text"></i></div>';
    var template = '<li class="swipeout">' +
        '<div class="item-content swipeout-content">' +
        '<div class="item-inner">'+
        '<div  class="konv-messege-wrapper konv-fade-in" data-konvSenderId="' + messege.oc_sender + '" data-mes_id = "'+messege.oc_id+'" data-mesesgeid="' + messege.oc_id + '">' +
        '<div class="onchatmessege-konver needsclick onchat-user-messege-konver" >' +
        contextMenuMessege +
        '<div class="konv-messege-body">' + messege.oc_body + '</div><div class="timestemponchat">' + processDate(messege.oc_date, 'time') + '</div></div></div></div>' +
        '</div>'+
        '</div>'+
        swipe_action+
        '</li>';

    if(messege.oc_messege_type == 'document'){
        var fileName = messege.oc_attachments.replace('https://britetodo.com/media/', '');
        template = '<div  class="konv-messege-wrapper konv-fade-in" data-konvSenderId="'+messege.oc_sender+'" data-mesesgeid="'+messege.oc_id+'">' +
            '<div class="onchatmessege-konver needsclick onchat-user-messege-konver">' +
            contextMenuMessege +
            '' +
            '<a class="konv-download-file-chat konv-selectable link external konv-t-xxxl" download="'+messege.oc_attachments+'"  href="'+messege.oc_attachments+'">' +
            '<svg class="konv-marg-r-15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="50" height="50" x="0" y="0" viewBox="0 0 957.599 957.6" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <g xmlns="http://www.w3.org/2000/svg"> <path d="M817.9,108.4h-28v687.901c0,45.699-37.2,82.898-82.899,82.898H423.3H197.7v25.5c0,29.201,23.7,52.9,52.9,52.9h283.6H817.8   c29.2,0,52.899-23.699,52.899-52.9V161.3C870.7,132.1,847.1,108.4,817.9,108.4z" fill="#ffffff" data-original="#000000" style=""/> <path d="M423.3,849.199h283.6c29.2,0,52.9-23.699,52.9-52.898V108.4V52.9c0-29.2-23.7-52.9-52.9-52.9H423.3H329v17.5   c0.199,1.8,0.3,3.7,0.3,5.6v115.3V168c0,41.1-33.4,74.5-74.5,74.5h-29.6H109.9c-1.5,0-3.1-0.1-4.6-0.2H86.9v554.001   c0,29.199,23.7,52.898,52.9,52.898h58H423.3L423.3,849.199z M434,669.4H249.1c-13.8,0-25-11.201-25-25c0-13.801,11.2-25,25-25h185   c13.8,0,25,11.199,25,25C459.1,658.199,447.8,669.4,434,669.4z M619,541.801H249.1c-13.8,0-25-11.201-25-25c0-13.801,11.2-25,25-25   H619c13.8,0,25,11.199,25,25C644,530.6,632.8,541.801,619,541.801z M249.1,356.3H619c13.8,0,25,11.2,25,25c0,13.8-11.2,25-25,25   H249.1c-13.8,0-25-11.2-25-25C224.1,367.5,235.3,356.3,249.1,356.3z" fill="#ffffff" data-original="#000000" style=""/> <path d="M109.9,212.5h144.9c0.1,0,0.3,0,0.4,0c24.2-0.2,43.8-19.8,44-44c0-0.1,0-0.3,0-0.4v-145c0-13.4-11-22.3-22.399-22.3   c-5.5,0-11,2-15.6,6.6L94.1,174.5C80.1,188.5,90,212.5,109.9,212.5z" fill="#ffffff" data-original="#000000" style=""/> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>' +
            '<span class="konv-chat-file-name konv-marg-r-1 konv-text">'+fileName+'</span></a>' +
            '<div class="timestemponchat">'+processDate(messege.oc_date, 'time')+'</div>' +
            '</div>' +
            '</div>' +
            '</div>';

    }else if(messege.oc_messege_type == 'video'){
        var fileName = messege.oc_attachments.replace('https://britetodo.com/media/', '');
        template = '<div  class="konv-messege-wrapper konv-fade-in" data-konvSenderId="'+messege.oc_sender+'" data-mesesgeid="'+messege.oc_id+'">' +
            '<div class="onchatmessege-konver needsclick" >' +
            contextMenuMessege +
            messege.oc_body+
            '<div class="timestemponchat">'+processDate(messege.oc_date, 'time')+'</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        if(isMobile != null){
            var re = /autoplay/g;
            template = template.replace(re, '');
        }
    }
    if(way == 'loadOld'){
        if($('.onchat-main-body-chat [data-mesesgeid="'+messege.oc_id+'"]').length == 0){
            $('.konv-load-buffer').first().append(template);
        }

    }else{
        if($('.onchat-main-body-chat [data-mesesgeid="'+messege.oc_id+'"]').length == 0){
            $('.onchat-main-body-chat').append(template);
        }
    }
    konvMessegeRender(messege.oc_id, messege.oc_sender, 'replyer')
};


function renderOCoperatormessege(messege, way = 'default'){

    if($('.onchat-main-body-chat .emptydialog').length != 0)
    {
        $('.emptydialog').remove();
    }
    var viewedcheck = '';
    if(messege.oc_status == 'viewed_message')
    {
        viewedcheck = '<div class="viewedmessage"><i class="fas fa-check-double"></i></div>';
    }


    var contextMenuMessege = '<div class="konv-chat-call-context user-message-context"><i class="fas fa-angle-down"></i></div>';
    var swipe_actions = '';

    if(isMobile != null){
        swipe_actions =  '  <div class="swipeout-actions-right">\n' +
            '            <a href="#" class="quote konv-chat-context-action konv-text " data-mes_id = "'+messege.oc_id+'" data-actionchat="edit"><i class="fas fa-edit"></i></a>\n' +
            '            <a href="#" class="quote konv-chat-context-action konv-text swipeout-overswipe" data-mes_id = "'+messege.oc_id+'" data-actionchat="quote"><i class="fas fa-reply"></i></a>\n' +
            '            </div>';
    }

    var template = '<li class="swipeout">' +
        '<div class="item-content swipeout-content">' +
        '<div class="item-inner">'+
        '<div  class="konv-messege-wrapper sender-messege konv-fade-in onchat-operator-messege-konver" data-konvSenderId="' + messege.oc_sender + '" data-mes_id = "'+messege.oc_id+'" data-mesesgeid="' + messege.oc_id + '">' +
        '<div class="onchatmessege-konver needsclick" >' +
        contextMenuMessege +
        viewedcheck +
        '<div class="konv-messege-body">' + messege.oc_body + '</div><div class="timestemponchat">' + processDate(messege.oc_date, 'time') + '</div></div></div></div>' +
        '</div>'+
        '</div>'+
        swipe_actions+
        '</li>';
    if ( messege.oc_messege_type == 'document' ) {
        var fileName = messege.oc_attachments.replace('https://britetodo.com/media/', '');
        template = '<li class="swipeout">' +
            '<div class="item-content swipeout-content">' +
            '<div class="item-inner">'+
            '<div  class="konv-messege-wrapper sender-messege konv-fade-in onchat-operator-messege-konver" data-konvSenderId="' + messege.oc_sender + '" data-mesesgeid="' + messege.oc_id + '">' +
            '<div class="onchatmessege-konver needsclick" >' +
            contextMenuMessege +
            '' +
            '<a class="konv-download-file-chat konv-selectable link external konv-t-xxxl" download="' + messege.oc_attachments + '"  href="' + messege.oc_attachments + '">' +
            '<svg class="konv-marg-r-15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="50" height="50" x="0" y="0" viewBox="0 0 957.599 957.6" style="enable-background:new 0 0 512 512" xml:space="preserve"><g> <g xmlns="http://www.w3.org/2000/svg"> <path d="M817.9,108.4h-28v687.901c0,45.699-37.2,82.898-82.899,82.898H423.3H197.7v25.5c0,29.201,23.7,52.9,52.9,52.9h283.6H817.8   c29.2,0,52.899-23.699,52.899-52.9V161.3C870.7,132.1,847.1,108.4,817.9,108.4z" fill="#ffffff" data-original="#000000" style=""/> <path d="M423.3,849.199h283.6c29.2,0,52.9-23.699,52.9-52.898V108.4V52.9c0-29.2-23.7-52.9-52.9-52.9H423.3H329v17.5   c0.199,1.8,0.3,3.7,0.3,5.6v115.3V168c0,41.1-33.4,74.5-74.5,74.5h-29.6H109.9c-1.5,0-3.1-0.1-4.6-0.2H86.9v554.001   c0,29.199,23.7,52.898,52.9,52.898h58H423.3L423.3,849.199z M434,669.4H249.1c-13.8,0-25-11.201-25-25c0-13.801,11.2-25,25-25h185   c13.8,0,25,11.199,25,25C459.1,658.199,447.8,669.4,434,669.4z M619,541.801H249.1c-13.8,0-25-11.201-25-25c0-13.801,11.2-25,25-25   H619c13.8,0,25,11.199,25,25C644,530.6,632.8,541.801,619,541.801z M249.1,356.3H619c13.8,0,25,11.2,25,25c0,13.8-11.2,25-25,25   H249.1c-13.8,0-25-11.2-25-25C224.1,367.5,235.3,356.3,249.1,356.3z" fill="#ffffff" data-original="#000000" style=""/> <path d="M109.9,212.5h144.9c0.1,0,0.3,0,0.4,0c24.2-0.2,43.8-19.8,44-44c0-0.1,0-0.3,0-0.4v-145c0-13.4-11-22.3-22.399-22.3   c-5.5,0-11,2-15.6,6.6L94.1,174.5C80.1,188.5,90,212.5,109.9,212.5z" fill="#ffffff" data-original="#000000" style=""/> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> <g xmlns="http://www.w3.org/2000/svg"> </g> </g></svg>' +
            '<span class="konv-chat-file-name konv-marg-r-10 konv-text">' + fileName + '</span></a>' +
            '<div class="timestemponchat">' + processDate(messege.oc_date, 'time') + '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'+
            '</div>'+
            swipe_actions+
            '</li>';

    }
    else if ( messege.oc_messege_type == 'video' ) {
        var fileName = messege.oc_attachments.replace('https://britetodo.com/media/', '');

        template = '<li class="swipeout">' +
            '<div class="item-content swipeout-content">' +
            '<div class="item-inner">'+
            '<div  class="konv-messege-wrapper sender-messege konv-fade-in onchat-operator-messege-konver" data-konvSenderId="' + messege.oc_sender + '" data-mesesgeid="' + messege.oc_id + '">' +
            '<div class="onchatmessege-konver needsclick" >' +
            contextMenuMessege +
            messege.oc_body +
            '<div class="timestemponchat">' + processDate(messege.oc_date, 'time') + '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'+
            '</div>'+
            swipe_actions+
            '</li>';

        if(isMobile != null){
            var re = /autoplay/gi;
            template = template.replace(re, '');
        }
    }
    if(way == 'loadOld'){
        $('.konv-load-buffer').first().append(template);
    }else{
        $('.onchat-main-body-chat').append(template);
    }
    konvMessegeRender(messege.oc_id, messege.oc_sender)

};

function beginsearchForMassages(type){

    setInterval(function(){

        jQuery.ajax({
            type: "POST",
            url: konvController,
            data: {
                'action': 'search_for_user_massages_onchat',
                'type' : type,
                'oc_sender' : localStorage.getItem('konvUserMain'),
                'oc_conversationid':  localStorage.getItem(activeConversation)
            },
            success: function (onlineChatMassagesRaw) {


                var onlineChatMassages = JSON.parse(onlineChatMassagesRaw);


                (localStorage.getItem('chat-debug') == 'true') ? console.log(onlineChatMassages, 'Новые сообщения') : '';


                for(id in onlineChatMassages){

                    if(onlineChatMassages[id].oc_status = 'new_message'){

                        playsoundnotif()

                        //если чат открыт
                        if(localStorage.getItem('konvActChat-britetodo.com') == onlineChatMassages[id].oc_conversationid){

                        }//если чат закрыт
                        else{

                            showBrouserNotification( 'Новое сообщение', {
                                body : onlineChatMassages[id].oc_body.replace(/<[^>]+>/g, ''),
                                icon : 'https://britetodo.com/img/devmedia/timo-logo.svg',
                                dir  : 'auto'
                            });

                        }
                        renderOCusermessage(onlineChatMassages[id]);
                    }
                }

                if(onlineChatMassages.length != 0){
                    setTimeout(function () {
                        scrollChat(500)
                    }, 100)
                }

            }
        });

    }, 3000)
}

function searchAudioMessege(){

    setInterval(function(){

        jQuery.ajax({
            type: "POST",
            url: konvController,
            data: {
                'action': 'search-audio-messege',
                'oc_sender' : parseInt(localStorage.getItem('konvUserMain')),
            },
            success: function (onlineChatMassagesRaw) {

                console.log(onlineChatMassagesRaw, 'Новые сообщения')
                var onlineChatMassages = JSON.parse(onlineChatMassagesRaw);

                for(id in onlineChatMassages){
                    var  audioMessege = new Audio(onlineChatMassages[id].oc_attachments);
                    audioMessege.play();
                }
            }
        });
    }, 3000)
}

// -----------------------------------------------------------------
// --------end--end--end--end--   CHAT    --end--end--end--end---------
// -----------------------------------------------------------------

var activeModules = [];

function konverEnvoqer(envoqElement, avoken) {
    var targetEnvoq = Object.keys(konvapp.elements);
    //console.log(targetEnvoq)

    var targetActions = konvapp.elements;
    // console.log(targetActions)
    for (id in targetEnvoq) {
        var envoqAction = Object.keys(konvapp.elements[targetEnvoq[id]]);

        // console.log(envoqAction)
        if(envoqElement != undefined){
            // console.log(targetEnvoq[id] +'--' + envoqElement)
            activeModules.push(envoqElement);
            if(targetEnvoq[id] == envoqElement){
                for (idchld in envoqAction) {


                    if (envoqAction[idchld] == 'envoq') {


                        var envoqFunctions = Object.keys(konvapp.elements[targetEnvoq[id]].envoq);

                        //konvapp.elements.expenses.envoq.loadExpenses()

                        for (envoqKeys in envoqFunctions) {
                            konvapp.elements[targetEnvoq[id]].envoq[envoqFunctions[envoqKeys]]()
                        }


                    }
                }


            }
        }else{
            for (idchld in envoqAction) {

                if (envoqAction[idchld] == 'envoq') {


                    var envoqFunctions = Object.keys(konvapp.elements[targetEnvoq[id]].envoq);

                    //konvapp.elements.expenses.envoq.loadExpenses()

                    for (envoqKeys in envoqFunctions) {
                        konvapp.elements[targetEnvoq[id]].envoq[envoqFunctions[envoqKeys]]()
                    }

                }
            }
        }
    }
}

//konverEnvoqer()

var fileTypeKonver = '';
var konvImagelink = '';


function konvUpload(target, callback) {

    event.stopPropagation(); // Остановка происходящего
    event.preventDefault();  // Полная остановка происходящего

    // Создадим данные формы и добавим в них данные файлов из files

    var data = new FormData();

    // console.log(files)

    $.each(files, function (key, value) {
        data.append(key, value);
    });

    // Отправляем запрос
    $.ajax({
        url: 'https://britetodo.com/timefileupload.php?uploadfiles',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, // Не обрабатываем файлы (Don't process the files)
        contentType: false, // Так jQuery скажет серверу что это строковой запрос
        success: function (respond, textStatus, jqXHR) {

            // Если все ОК
            console.log(respond, 'Ответ сервера')

            if (typeof respond.error === 'undefined') {

                var files_path = respond.files;

                console.log(files_path)

                var datafileimg = '';

                for(id in files_path){
                    datafileimg = files_path[id].filename;
                    fileTypeKonver = files_path[id].fileType;

                }

                konvImagelink = datafileimg.replace('/var/www/www-root/data/www/', 'https://');
                console.log(konvImagelink, 'Ссылка на картинку')

                callback();
            } else {
                // console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error );
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // console.log('ОШИБКИ AJAX запроса: ' + textStatus );
        }
    });
}

// ------------------------       TECHNICAL         -------------------------



// Конвертировать время в 1ч, 30 мин



function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "ч, " + rminutes + "м";
}

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function convertDateBlock(mounth){
    var mounths = ["Январь", "Февраль", "Март","Апрель", "Май", "Июнь", "Илюль","Август", "Сентябрь", "Октябрь","Ноябрь","Декабрь"];
    return mounths[mounth];
}


function processDate(dateraw, mode){

    var convertdate = dateraw;


    var dateObjectPre = Date.parse(convertdate);

    var dateObject = new Date(dateObjectPre);


    var year = dateObject.getFullYear(),
        mounth = '',
        day = '',
        hour = '',
        minute = '';



    if(dateObject.getMonth() < 10){
        mounth = '0' + (parseInt(dateObject.getMonth()) + 1);
    }else{
        mounth = parseInt(dateObject.getMonth())+ 1;
    }

    if(dateObject.getDate() < 10){
        day = '0' + parseInt(dateObject.getDate());
    }else{
        day = dateObject.getDate();
    }


    if(dateObject.getHours() < 10){
        hour = '0' + (parseInt(dateObject.getHours()));

    }else{
        hour = parseInt(dateObject.getHours());
    }

    if(dateObject.getMinutes() < 10){
        minute = '0' + (parseInt(dateObject.getMinutes()));

    }else{
        minute = parseInt(dateObject.getMinutes());
    }



    if(UGET('tm_preferences', 'timeformat') == 'AMPM'){


        if(mode == 'time'){
            return  tConvert(hour + ':' + minute);
        }else if (mode == 'shortdate'){
            return  mounth +'.' + day + '   ' + tConvert(hour + ':' + minute);
        }else if(mode == 'datefull'){
            return  year + '.' + mounth +'.' + day;
        }
        return dateObject.getFullYear()+ '.' + mounth +'.' + day + '   ' + tConvert(hour + ':' + minute);

    }else{

        if(mode == 'time'){
            return  hour + ':' + minute;
        }else if (mode == 'shortdate'){
            return  mounth +'.' + day + '   ' + hour + ':' + minute;
        }else if(mode == 'datefull'){
            return  year + '.' + mounth +'.' + day;
        }

        return dateObject.getFullYear()+ '.' + mounth +'.' + day + '   ' + hour + ':' + minute;
    }


}