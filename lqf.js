/**
 * 手机验证：mobileVerification()
 * 将2010-02-12 12:21:11 转换为时间戳兼容ie    toTimeStr()
 * 获取当前时间戳   getNowTime()
 * 只能输入字母和数字组合 letterNumbers()
 * 车牌号认证 carNo()
 * 保留一位小数 keepDecimal()
 * 只能是数字 isNum()
 * 验证车架号 getCheckCode()
 */


function mobileVerification(value) {
	 return !/^1[3-9]{1}[0-9]{9}$/.test(value);
}

function toTimeStr(value) {
	return new Date(Date.parse(value.replace(/-/g,"/"))).getTime();
}

function getNowTime(){
	return Math.round(new Date().getTime()/1000);
}

function letterNumbers(value){

	return !/^[0-9a-zA-Z]*$/g.test(value)
}

function carNo(value){
return !/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(value);
}

function keepDecimal(value){
return !/^[0-9]+([.][0-9]{1}){0,1}$/.test(value);
}

function isNum(value){
return isNaN(Number(value));
}
		// 正则验证：17，首位限制，后面字母限制
		function getCheckCode(sVIN) {
  //
		var Arr = new Array();
		var Brr = new Array();
		Arr['A'] = 1;
		Arr['B'] = 2;
		Arr['C'] = 3;
		Arr['D'] = 4;
		Arr['E'] = 5;
		Arr['F'] = 6;
		Arr['G'] = 7;
		Arr['H'] = 8;
		Arr['J'] = 1;
		Arr['K'] = 2;
		Arr['L'] = 3;
		Arr['M'] = 4;
		Arr['N'] = 5;
		Arr['P'] = 7;
		Arr['R'] = 9;
		Arr['S'] = 2;
		Arr['T'] = 3;
		Arr['U'] = 4;
		Arr['V'] = 5;
		Arr['W'] = 6;
		Arr['X'] = 7;
		Arr['Y'] = 8;
		Arr['Z'] = 9;
		Arr['1'] = 1;
		Arr['2'] = 2;
		Arr['3'] = 3;
		Arr['4'] = 4;
		Arr['5'] = 5;
		Arr['6'] = 6;
		Arr['7'] = 7;
		Arr['8'] = 8;
		Arr['9'] = 9;
		Arr['0'] = 0;
		Brr[1] = 8;
		Brr[2] = 7;
		Brr[3] = 6;
		Brr[4] = 5;
		Brr[5] = 4;
		Brr[6] = 3;
		Brr[7] = 2;
		Brr[8] = 10;
		Brr[9] = 0;
		Brr[10] = 9;
		Brr[11] = 8;
		Brr[12] = 7;
		Brr[13] = 6;
		Brr[14] = 5;
		Brr[15] = 4;
		Brr[16] = 3;
		Brr[17] = 2;
			var sKYZF = "ABCDEFGHJKLMNPRSTUVWXYZ1234567890";
			var sJYW = '';
			var bl = false;
			var blKYZF = false;
			if(sVIN.length == 17) {
				var iJQS = 0,
					intTemp = 0,
				  ht = Arr,
			  	htZM = Brr;
	
				// 转换成数字字符串
				// 按照权重计算总值
				// 判断（总值/11）的余数：如果是10，则第九位是X，否则和第九位相等
				try {
					//LSVAM4187C2184847
					for(var i = 0; i < sVIN.length; i++) {
						if(sKYZF.indexOf(sVIN.substr(i, 1)) != -1) {
							blKYZF = true;
							//计算权数X输入数字转换后的总和
							iJQS = iJQS + parseInt(ht[sVIN.substr(i, 1)]) * parseInt(htZM[(i + 1)]);
						} else {
							blKYZF = false;
							break;
						}
					}
					//如果输入有效字符
					if(blKYZF) {
						//总和余数除以11 ，余数和第九位值比较
						intTemp = iJQS % 11;
					
						if(intTemp == 10) {
							sJYW = "X";
						} else {
							sJYW = intTemp.toString();
						}
						if(sJYW == sVIN.substr(8, 1)) bl = true;
					} else {
						bl = false;
					}
				} catch(err) {
					bl = false;
				}
			}
	
			return bl;
		}