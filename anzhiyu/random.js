var posts=["2022/11/23/《少有人走的路》读后感/","2022/11/23/《我想吃掉你的胰脏》观后感/","2022/11/23/不能承受的生命之轻/","2022/11/18/依赖Python构建的淘宝秒拍程序/","2022/11/23/为什么西西弗斯没有拒绝滚石上山？/","2022/11/23/哲学/","2022/11/23/成为死后的幸存者——读《小岛书店》/","2022/11/23/爱是桥梁/","2022/10/21/备忘录/","2022/11/23/更新日志/","2022/11/22/每日任务/","2022/11/23/美国黑人的认同感/","2022/11/23/由香港问题想到的教育缺失问题/","2022/11/23/辩论/","2022/11/23/认同是需要思考的/","2022/11/23/花/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};