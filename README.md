# ChannelPointFarmTwitch

Esse repositorio vai ser utilizado por quem tem preguiça de ficar clicando no bau de pontos da twitch
```
var chestcount = 0;
var chestundefinedcount = 0;

setInterval(function(){

  buttonchest = document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0];

    if(buttonchest === undefined){
      chestundefinedcount++;
    }
    else{
      document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
      chestcount++;
      console.log("Quantidade de Baus coletados:" + chestcount);
      console.log("Verificações Realizadas" + chestundefinedcount);
    }

},50000);

```
