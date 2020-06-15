$(function(){

  function buildHTML(message){
    if (message.image) {
      let html = `<div class="MessageBox" data-message-id=${message.id}>
                    <div class="Chat_main__message-list__member">
                      <div class="Chat_main__message-list__member__name">
                        ${message.user_name}
                      </div>
                      <div class="Chat_main__message-list__member__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Chat_main__message-list__message">
                      ${message.content}
                      <img class="Chat_main__message-list__message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    }
    else {
      let html =`<div class="MessageBox" data-message-id=${message.id}>
                    <div class="Chat_main__message-list__member">
                      <div class="Chat_main__message-list__member__name">
                        ${message.user_name}
                      </div>
                      <div class="Chat_main__message-list__member__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Chat_main__message-list__message">
                      ${message.content}
                    </div>
                  </div>`
      return html;
    };
  }

  let reloadMessages = function(){
    let last_message_id = $('.MessageBox:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages){
      if (messages.length !== 0){
        let insertHTML = '';
        $.each(messages, function(i, message){
          insertHTML += buildHTML(message)
        });
        $('.Chat_main__message-list').append(insertHTML);
        $('.Chat_main__message-list').animate({ scrollTop: $('.Chat_main__message-list')[0].scrollHeight});
      }
    })
    .fail(function(){
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});