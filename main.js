let lm=4
async function getPostData() {
    const url = 'data.json';
    const response = await fetch(url);
    return await response.json();
  }
  
  function renderPosts(app, posts) {
    const postNodes = posts.map((post) => {
    
      const postCard = document.createElement('article');
      const postHeader = document.createElement('div');
      const postDitels = document.createElement('div'),
      likesInfo = document.createElement('div');
           
      
      const profileImage = document.createElement('img'),
      name = document.createElement ('h5'),
      date = document.createElement('p'),
      img = document.createElement('img'),
      caption = document.createElement('p'),
      likes = document.createElement('spam'),
      heart = document.createElement('img'),
      socialMedia= document.createElement('img');


      profileImage.src = post.profile_image
      name.innerHTML = post.name
      date.innerHTML =  post.date 
      img.src =  post.image
      caption.innerHTML = post.caption
      likes.innerHTML = post.likes
      heart.src='icons/heart.svg'

      if (post.source_type == "facebook"){
        socialMedia.src ="icons/facebook.svg"
    }
    else {
        socialMedia.src="icons/instagram-logo.svg"
    }
     

      postCard.classList.add('post');
      postHeader.classList.add('post-header')
      postDitels.classList.add('post-ditels')
      profileImage.classList.add('profile_image')
      name.classList.add('name')
      date.classList.add('data')
      socialMedia.classList.add('socialMedia')
      img.classList.add('image')
      caption.classList.add('caption')
      likesInfo.classList.add("likes")

    
      postHeader.appendChild(profileImage)
      postHeader.appendChild(name)
      postHeader.appendChild(date)
      postHeader.appendChild(socialMedia)

      likesInfo.appendChild(heart)
      likesInfo.appendChild(likes)
      postDitels.appendChild(img)
      postDitels.appendChild(caption)
      postDitels.appendChild(likesInfo)

  
      postCard.appendChild(postHeader);
      postCard.appendChild(postDitels);
         

                postCard.addEventListener('click', ()=>{
                    
                    const big_post = document.createElement("div"),
                          post_Info = document.createElement("div");
                    
                    const big_img = img.cloneNode(true),
                          header = postHeader.cloneNode(true),
                          postCaption = caption.cloneNode(true),
                          post_likes = likesInfo.cloneNode(true);
    
                    const show_bigPost = document.getElementById("bg_ps");
                    big_post.className = "big_post";
                    big_post.id ='big_post'
                    big_img.className = "big_img";
                    

                    big_post.appendChild(big_img);
                    big_post.appendChild(post_Info);
                    
                    post_Info.appendChild(header);
                    post_Info.appendChild(postCaption);
                    post_Info.appendChild(post_likes);
              
                    const remove = big_post;
              
                    remove.addEventListener("click", () => {
                      document.getElementById("big_post").remove();
                    });
                    show_bigPost.appendChild(big_post);
                  });

      app.appendChild(postCard);

      return postCard;
    });
    return postNodes;
  }
  
  async function mountPosts() {
    const app = document.querySelector('#posts');
    const posts = await getPostData();
    //console.log(renderPosts(app, posts))
    let  post=renderPosts(app, posts);
    let loadMore = document.getElementById('load-more');
        maxPosts = 4;
        loadePosts = 4;
        hiddenClass='hiddenStyle';

        post.forEach(function (post, index) {
        //console.log(post.innerText, index);
        if (index > maxPosts - 1) {
            post.classList.add(hiddenClass);
        }});
        loadMore.addEventListener("click", function () {
            [].forEach.call(document.querySelectorAll("." + hiddenClass), function ( post,index) {
                if (index < loadePosts) {
                    post.classList.remove(hiddenClass);
                }
                if (document.querySelectorAll("." + hiddenClass).length === 0) {
                    loadMore.style.display = "none";
                }
            });
        });
  }
  mountPosts()
  

