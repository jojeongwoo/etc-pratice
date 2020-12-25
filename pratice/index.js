const Body = {
  SetColor: function(color){
    // var list = document.querySelectorAll('a');
    // var i = 0;
    //   while(i < list.length){
    //     list[i].style.color = color;
    //     i+=1;
    //   }

    $('a').css('color', color);
  },
  SetBackGroundColor: function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

const List = {
  SetColor: function(color){
    // const num = document.querySelectorAll('li');
    // let i = 0;
    // while(i < num.length){
    //   num[i].style.color = color;
    //   i+=1;
    // }
    $('li').css('color', color);
  }
}

function eventHandler(text){

  if(text.value === 'white'){
    text.value = 'black';
    Body.SetColor('powderblue');
    Body.SetBackGroundColor('black');
    List.SetColor('white');

  }else{
    text.value = 'white';
    Body.SetColor('blue');
    Body.SetBackGroundColor('white');
    List.SetColor('black');
  
  }
}