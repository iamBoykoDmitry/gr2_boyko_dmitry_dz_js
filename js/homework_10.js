$(document).ready(function() {

   async function get_response () {
      let data = await fetch('https://jsonplaceholder.typicode.com/posts');
      let content = await data.json();
        let key;
        content = content.splice(0, 10);
        for(key in content) {
           document.body.insertAdjacentHTML('beforeEnd',
              `<div class='block'>
                   <div class='text'><span>Название поста: </span>${content[key].title}</div>
                 <div><img src='https://smehden.club/wp-content/uploads/2019/10/kartinka_net_foto_7_17144230.png'></div>
                 <div class='text'><span>Id: </span>${content[key].id}</div>
                 <div class='text'><span>userId: </span>${content[key].userId}</div>
                 <div class='button1' id='${content[key].body}'><span>Показать текст поста</span></div>
                 <div class='button2'><span>Закрыть<span></div>
              </div>`
           );
                $('.block').css({
                margin: '20px',
                border: '1px solid gray',
                background: 'lightgreen',
                });
                $('.text').css({
                   fontFamily: 'Algerian',
                   fontSize: '28px',
                   textAlign: 'center',
                });
                $('img').css({
                   width: '350px',
                   paddingLeft: '520px',
                });
                $('.button1').css({
                   backgroundColor: 'lightgray',
                width: '150px',
                height: '50px',
                textAlign: 'center',
                margin: '15px',
                marginLeft: '45%',
                borderRadius: '15px solid gray',
                });
                $('.button2').css({
                   backgroundColor: 'red',
                width: '150px',
                height: '50px',
                textAlign: 'center',
                margin: '15px',
                marginLeft: '45%',
                borderRadius: '15px',
                });
                $('.button1:hover').css({
                backgroundColor: 'grey',
                cursor: 'pointer',
                });
        }
   
   };
   
   
     function show_post(posts) {
        for(let i = 0; i < posts.length; i++) {
           posts[i].onclick = function (event) {
              alert(`текст поста: ${posts[i].id}`);
           }
        }
     }
   
     function close_post(posts) {
        for(let i = 0; i < posts.length; i++) {
           posts[i].onclick = function (event) {
              this.parentNode.remove();
        }
     }
    }
   
     function activate_buttons() {
        let show_the_post = document.getElementsByClassName('button1');
        let close = document.getElementsByClassName('button2');
        show_post(show_the_post);
        close_post(close);
     }
   
   get_response().then(activate_buttons);
   });


