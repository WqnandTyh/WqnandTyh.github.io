var posts=["2022/10/21/备忘录/","2022/10/21/宝贝的生日/","2022/10/27/姐姐和我过的第一个生日/","2022/11/22/每日任务/","2022/11/18/依赖Python构建的淘宝秒拍程序/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};