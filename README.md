# ChannelPointFarmTwitch

Esse repositorio vai ser utilizado por quem tem preguiça de ficar clicando no bau de pontos da twitch
```
setInterval(function(){

  buttonchest = document.getElementsByClassName("tw-button tw-button--success")[0];

    if(buttonchest === undefined){
      console.log("Verificação Realizada");
    }
    else{
      document.getElementsByClassName("tw-button tw-button--success")[0].click();
      console.log("Bau coletado");
    }

},15000);

```
