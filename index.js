const express = require('express');
const telegramBot = require('node-telegram-bot-api');

const token = '1809673831:AAExD-4THeVPNzIY4zlHqhuJv4_55rWMH10';

const opt = {polling:true};
const bot =  new telegramBot(token, opt);

let app = express();

app.listen(3000, function(){
	console.log('Sevidor levantado con exito');

	bot.on ('message', function(msg){

		let id = msg.chat.id;
		let inicio2 = msg.text;
		let inicio = msg.text;
		let pregunta = msg.text;
		let telefono  = msg.text;
		let direccion = msg.text;

		// if (message == 'Cual es tu nombre'){
		// 	nombre = echo;
		// 	message =  nombre;
		// }


		message = 'Bienvenido a telefonica, favor escriba su nombre telefono y dirección. Ejemplo: Luis 7777777 Col. Escalon';
		bot.sendMessage(id, message);


		while (pregunta != null) {
			
		   let nombre = pregunta.split(' ');
		   let telefono = pregunta.split(' ');
		   let direccion = pregunta.split(' ');
	   		
	   		bot.sendMessage(id, '___|    SUS DATOS SON    |_____');
			bot.sendMessage(id, 'Su Nombre es: '+nombre[0]);
			bot.sendMessage(id, 'Su Telefono es: '+telefono[1]);
			bot.sendMessage(id, 'Su Direccion es: Col. '+direccion[3]);
	   		bot.sendMessage(id, ' **Nota, si sus datos no son los correctos, favor intentarlo de nuevo ');
			break;
		}

		// while (isNaN(telefono)) {
		// 	let elTelefono = "Su telefono es:  "+telefono;
		// 	bot.sendMessage(id, elTelefono);
		// 	bot.sendMessage(id, "Favor escriba su direccion");
		// 	break;
		// } while (direccion != null) {
		// 	let laDireccion = "Su dirrecion:  "+direccion;
		// 	bot.sendMessage(id, laDireccion);
		// 	bot.sendMessage(id, "Gracias por su tiempo, feliz dia");
		// 	break;
		// }

		// } else if (message === 'Bienvenido a telefonica, cual es tu nombre, direccion y telefono' ) {
		// 	let message1 =  "Tus datos son:"+echo;
		// 	bot.sendMessage(id, message1)
		// } else if (messa === 'Bienvenido a telefonica, cual es tu nombre, direccion y telefono' ) {
		// 	let message2 =  "Tus datos:"+echo;
		// 	bot.sendMessage(id, message2)
		// }

		
	});

});