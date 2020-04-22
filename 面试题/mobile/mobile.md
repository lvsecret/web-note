# 移动端

#### 1.如何在640px的移动端设备下1rem=16px

##### rem en px区别 

px:相对长度单位,相对于显示器屏幕分辨率而言的.

em:相对长度单位,相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸.依赖父元素计算

rem:相对长度单位,相对于根元素的字体大小的单位.依赖根元素(先给予html元素一个font-size，然后我们所有的rem就根据这个font-size来计算)根据根元素大小来计算1rem到底等于多少px，如果根元素为16px，那么1rem=16px.

##### 计算根元素的font-size

模拟场景：设计师的设计稿假设为640px；
假设我们现在有两个设备，一个设备的宽度就是640px，并且我给这个宽度为640px设备的根元素设置为16px,这样1rem就等于16px了，很好计算；
另一个设备的宽度为变量dWidth；要想与设计稿的效果一样，就要进行等比例缩放，此时我们需要求出另一个设备的根元素font-size值（X）为多少；
根据这些信息我们可以推导出以下这个公式：
dWidth/X=designwidth（640）/16
得出X得值：
X=dWidth*16/desingWidth;

##### 设置viewport配合进行缩放(保证页面缩放没有问题)

http://www.cnblogs.com/azhai-biubiubiu/p/5305022.html 标签的参数

```javascript
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
```

#### 2.移动屏幕适配方案**

https://www.cnblogs.com/worldly1013/p/6052987.html

1.rem  + px转rem插件(vscode的cssrem,[postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)),或者使用插件amfe-flexible(lib-flexible)

2.rem+媒体查询

3.rem+vw

#### **3.移动端1px边框问题的解决方案**

https://www.jianshu.com/p/fa670b737a29

1. 使用小数写px值 通过媒体查询判断设备的像素比 DRP 根据不同像素比写不同的边框大小

   ```css
   .border { border: 1px solid #ccc }
   @media screen and (-webkit-min-device-pixel-ratio: 2) {
       .border { border: 0.5px solid #ccc }
   }
   @media screen and (-webkit-min-device-pixel-ratio: 3) {
       .border { border: 0.333333px solid #ccc }
   }
   ```

2. 使用边框图片

   这样的1张6X6的图片, 9宫格等分填充border-image, 这样元素的4个边框宽度都只有1px

   ```css
   @media screen and (-webkit-min-device-pixel-ratio: 2){ 
       .border{ 
           border: 1px solid transparent;
           border-image: url(border.gif) 2 repeat;
       }
   }
   ```

3. 使用CSS3 box-shadow

   ```css
   .shadow {
       -webkit-box-shadow:0 1px 1px -1px rgba(255, 0, 0, 0.5);
       box-shadow:0 1px 1px -1px rgba(255, 0, 0, 0.5);
   }
   ```

4. viewport结合rem (推荐使用)

   ```html
   //devicePixelRatio=2设置meta
   <meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
   
   //devicePixelRatio=3设置meta
   <meta name="viewport" content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">
   ```

5. 使用 :before     ,   :after 与  transform（推荐使用）

   ```css
   //第一种方法
   //构建1个伪元素, 将它的长宽放大到2倍, 边框宽度设置为1px, 再以transform缩放到50%
   .radius-border{
       position: relative;
   }
   @media screen and (-webkit-min-device-pixel-ratio: 2){
       .radius-border:before{
           content: "";
           pointer-events: none; /* 防止点击触发 */
           box-sizing: border-box;
           position: absolute;
           width: 200%;
           height: 200%;
           left: 0;
           top: 0;
           border-radius: 8px;
           border:1px solid #999;
           -webkit-transform(scale(0.5));
           -webkit-transform-origin: 0 0;
           transform(scale(0.5));
           transform-origin: 0 0;
       }
   }
   
   @media screen and (-webkit-min-device-pixel-ratio: 3) {
       .radius-border:before{
           content: "";
           pointer-events: none; /* 防止点击触发 */
           box-sizing: border-box;
           position: absolute;
           width: 200%;
           height: 200%;
           left: 0;
           top: 0;
           border-radius: 8px;
           border:1px solid #999;
           -webkit-transform(scale(0.3333));
           -webkit-transform-origin: 0 0;
           transform(scale(0.3333));
           transform-origin: 0 0;
       }
   }
   ```

   