# ChannelPointFarmTwitch

Esse repositorio vai ser utilizado por quem tem preguiça de ficar clicando no bau de pontos da twitch
```
setInterval(function(){

  buttonchest = document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0];

    if(buttonchest === undefined){
      console.log("Bau não disponivel ainda");
    }
    else{
      document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
      console.log("Bau coletado")
    }

},15000);

```
