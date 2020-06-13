$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = `<div class="Chat_main__message-list__member">
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
                  </div>`
      return html;
    }
    else {
      let html =`<div class="Chat_main__message-list__member">
                  <div class="Chat_main__message-list__member__name">
                    ${message.user_name}
                  </div>
                  <div class="Chat_main__message-list__member__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="Chat_main__message-list__message">
                  ${message.content}
                </div>`
      return html;
    };
  }

  $(".Chat_main__message-form__input-contents").on("submit",function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat_main__message-list').append(html);
      $('.Chat_main__message-list').animate({scrollTop: $('.Chat_main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.Chat_main__message-form__input-contents__submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});