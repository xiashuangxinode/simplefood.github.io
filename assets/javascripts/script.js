!(function(window) {


	/*var getImageForFaviconUrl = function(url, callback){
		var img = new Image, data, ret = { data: null, pending: true};
		img.setAttribute('crossOrigin', 'anonymous');

		img.onerror = function(){
			throw new Error("Cannot load image:“"+url+"”");
		}

		 img.onload = function(){
		
			var canvas = document.createElement("canvas");
			document.body.appendChild(canvas);
			canvas.height = img.height;
			canvas.width = img.width;

			canvas.height = 300;
			canvas.width =300;

			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);
			data = canvas.toDataURL("image/jpeg").slice("data:image/jpeg;base64,".length);
			data = atob(data)
			document.body.removeChild(canvas);

			console.log( img.src)

			ret["data"] = data;
			ret["pending"] = false;
			if (typeof callback === 'function') {
				callback(data);
			}
			var canvas = document.createElement('canvas');
			document.body.appendChild(canvas);
			canvas.width = 300;
			canvas.height = 300;

			var ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0);
			// Grab the image as a jpeg encoded in base64, but only the data
			data = canvas.toDataURL('image/jpeg').slice('data:image/jpeg;base64,'.length);
			// Convert the data to binary form
			data = atob(data)
			// document.body.removeChild(canvas);

			ret['data'] = data;
			ret['pending'] = false;
			if (typeof callback === 'function') {
				callback(data);
			}
		}
		img.src = url;
		return ret;

	}*/

	window.toggleNavBar = function(target){
		console.log($(target).css("display"))

		var display = $(target).css("display");
		if(display == "none"){
			$(target).css("display","block");
		}else{
			$(target).removeAttr("style");
		}
	}

	window.printCookbookToPdf = function(cookbook){
		/*console.log("d")
		getImageForFaviconUrl('/assets/favicon/favicon-black.jpg', function(imgData){

			var doc = new jsPDF();

			doc.addImage(d,"JPEG",10,10,50,50);
			doc.addImage(d,"JPEG",70,10,100,120);

			doc.output("datauri");
			var doc = new jsPDF();

	doc.addImage(imgData, 'JPEG', 10, 10, 50, 50);
	doc.addImage(imgData, 'JPEG', 70, 10, 100, 120);

	// Output as Data URI
	doc.output('datauri');
		});*/


		// axios.get('/data/favicon.json').then(function(response){
		// 	var d= response.data.base64.slice('data:image/png;base64,'.length);



		// 	var doc = new jsPDF();

		// 	doc.addFont('msyh-normal', 'msyh', 'normal');     //添加字体
  //                   //pdf标题设置
  //                   doc.setFont('msyh');                         //设置字体*/
			
		// 	doc.line(10, 10, 200, 10);

		// 	doc.addImage(d,"PGN",10,31,80,10);

		// 	doc.setFontSize(8);
		// 	doc.text(120, 40, '3 flak积分卡大家发到付革叵f');
		// 	doc.text(150, 40, '120 MINUTES');
		// 	doc.text(180, 40, '170  CALS');

		// 	doc.setFontSize(22);
		// 	doc.text(10,70,"You’ll be Cozy in No Time with ")

		// 	doc.setFontSize(14);
		// 	doc.text(10,85,"McDull")

		// 	doc.setFontSize(16);
		// 	doc.text(10,100,"Ingredients")

		// 	doc.setFontSize(12);
		// 	doc.text(20,115,"- UUIDJ")
		// 	doc.text(20,125,"- UUIDJ")
		// 	doc.text(20,135,"- UUIDJ")
		// 	doc.text(20,145,"- UUIDJ")
		// 	doc.text(20,155,"- UUIDJ")


		// 	doc.setProperties({
		// 		title: 'Title',
		// 		subject: 'This is the subject',		
		// 		author: 'James Hall',
		// 		keywords: 'generated, javascript, web 2.0, ajax',
		// 		creator: 'MEEE'
		// 	});

		// 	var string = doc.output("datauri");
			
		// 	var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
		// 	var x = window.open();
		// 	x.document.open();
		// 	x.document.write(iframe);
		// 	x.document.close();
		// })


		var stage = new Kinetic.Stage({
			container: "print-container",
			width: 900,
			height: 508,
		});

		var layer = new Kinetic.Layer();

		var rect = new Kinetic.Rect({
			x: 200, //矩形左上角x坐标
			y: 150, //矩形左上角y坐标
			width: 200, //矩形的宽度
			height: 100, //矩形的高度
			fill: "red", //矩形的填充色
			stroke: "black", //矩形边缘线的颜色
			strokeWidth: 4 //矩形边缘线的宽度
		});//向用户层中添加上面的矩形
		layer.add(rect);

		//将上面的用户层添加到舞台上
		stage.add(layer);
		


		/*stage.toDataURL({ 
        callback: function(dataUrl) {
            console.log(dataUrl)

            var doc = new jsPDF();
            doc.addImage(dataUrl.slice('data:image/png;base64,'.length),"PGN",10,31,900,508);
            var string = doc.output("datauri");
			
			var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
			var x = window.open();
			x.document.write(iframe);
			x.document.close();
        }*/
    // });


//     	var canvas = document.createElement('canvas');
//     	/* A4:794×1123*/
//     	canvas.width= 794;
//     	canvas.height = 1123;
// 		document.body.appendChild(canvas);
// 		var ctx = canvas.getContext('2d');

// 		ctx.fillStyle = "#fff";
// 		ctx.fillRect(0,0,794,1123);

// 		/*线*/
// 		ctx.moveTo(30,30);
// 		ctx.lineTo(750,30);
// 		ctx.stroke();

// 		/*图片*/
// 		/*ctx.drawImage("/assets/favicon/favicon.png", 80, 10);*/
// 		ctx.fillStyle = "#000";
// 		ctx.font="28px Arial";
// 		ctx.fillText("SIMPLE FOOD",30,100);
// 		ctx.moveTo(30,110);
// 		ctx.lineTo(230,110);
// 		ctx.stroke();

// 		ctx.font="12px Arial";
// 		ctx.fillText("3 人份",450,110);
// 		ctx.fillText("120 分钟",550,110);
// 		ctx.fillText("1700 卡路里",650,110);


// 		ctx.font="24px Arial";
// 		ctx.fillText("蛋饺",30,180);

// 		var data = canvas.toDataURL('image/jpeg');

// 		console.log(data)

// 		// var doc = new jsPDF('p', 'mm', 'a4');
// 		var doc = new jsPDF();
// 		doc.setFont('courier')
// doc.setFontType('normal')
// doc.text(20, 30, 'This is courier nor夏mal.')
//         // doc.addImage(data,0,0,794,1123);
//         var string = doc.output("datauri");
		
// 		var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
// 		var x = window.open();
// 		x.document.write(iframe);
// 		x.document.close();



          /*  var dd = {
                content: [
                    '中英文测试',
                    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
                ],
                defaultStyle: {
                    font: 'Roboto'
                }
            };
            pdfMake.fonts = {
                Roboto: {
                    normal: 'simfang-normal.ttf'
                },
            };
            pdfMake.createPdf(dd).open();*/

}

})(window);