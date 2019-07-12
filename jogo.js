/*
	Codigo by : Tiago Ribeiro santos

	Jogo da Velha

	Develop in : 09/07/2019

	email : tiago.programador@hotmail.com

	gitHub: www.github.com/tiglinux
*/



var rodada = 1;
var matriz_jogo= Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

//Quando documento estiver carregado iniciar;
$(document).ready(function(){
	$('#palco_jogo').click(function(){ 
		if(($('.apelido1').val() == '') && ($('.apelido2').val() == '')){
			alert('Você não pode JOGAR sem Digitar os NOMES primeiro!');

		}
	});

		$('.btn_iniciar').click(function(){
			var nick1 = $('.apelido1').val();
			var nick2 = $('.apelido2').val();
			var qtd_nick_caract1 = nick1.length;
			var qtd_nick_caract2 = nick2.length;

		

			if(qtd_nick_caract1 == 0 && qtd_nick_caract2 == 0 ){
				alert("JOGADOR 1 e JOGADOR2--> Vocês não digitaram nenhum caracter!"+"\n"+" Digitem novamente!");
				$('.apelido1').val("");
				$('.apelido2').val("");
			}
			else{
				if(qtd_nick_caract1 == 0 && qtd_nick_caract2 > 0 ){
					alert("JOGADOR 1 você não digitou nenhum caracter!"+"\n"+"Digite novamente!");
					$('.apelido1').val("");
					$('.apelido2').val("");
				}
				if(qtd_nick_caract1 > 0 && qtd_nick_caract2 == 0){
					alert("JOGADOR 2 você não digitou nenhum caracter!"+"\n"+"Digite novamente!");
					$('.apelido1').val("");
					$('.apelido2').val("");
				}
				if(qtd_nick_caract1 > 0 && qtd_nick_caract2 > 0){
					$('#jogador1').html($('.apelido1').val());
					$('#jogador2').html($('.apelido2').val());
					$('.jogada').click(function(){

							var id_clicado = this.id;
							$('#'+id_clicado).off();
							jogada(id_clicado);

					});

				}
					

					function jogada(id){
						var icone = '';
						var ponto = 0;

						//Jogada jogador1
						if((rodada % 2) == 1){
							icone = 'url("imagens/marcacao_1.png")';
							ponto = -1;
						} else {
						//Jogada jogador2
							if(((rodada % 2) == 0) || ((rodada % 2) != 1)){
								icone = 'url("imagens/marcacao_2.png")';
								ponto = 1;
							}
						}
						
						rodada++;

						$('#'+id).css('background-image', icone);

						var linha_coluna = id.split('-');

						matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

						verificaCombinacao();


					}
					function verificaCombinacao(){
						
						//verifica horizontal
						//verifica na horizontal
						var pontos = 0;
						for(var i = 1; i <= 3; i++){
							pontos = pontos + matriz_jogo['a'][i];
						}
						ganhador(pontos);

						pontos = 0;
						for(var i = 1; i <= 3; i++){
							pontos = pontos + matriz_jogo['b'][i];
						}
						ganhador(pontos);

						pontos = 0;
						for(var i = 1; i <= 3; i++){
							pontos = pontos + matriz_jogo['c'][i];
						}
						ganhador(pontos);

						//verifica na vertical
						for(var l = 1; l <= 3; l++){
							pontos = 0;
							pontos += matriz_jogo['a'][l];
							pontos += matriz_jogo['b'][l];
							pontos += matriz_jogo['c'][l];

							ganhador(pontos);
						}
						//verifica diagonal
						//Caso umas das diagonais seja marcadas ocorre vitória para o JOGADOR.

						pontos = 0;
						pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
						ganhador(pontos);

						pontos = 0;
						pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
						ganhador(pontos);

						 

					}
					
					function ganhador(pontos){

						if(pontos == -3){
							alert(`${nick1} é o VENCEDOR! :):):):):)`);
							$('.jogada').off();
						}
						if(pontos == 3){
							alert(`${nick2} é o VENCEDOR! :):):):):)`); 
							$('.jogada').off();
						}
					}
					

				}
			
		});
});