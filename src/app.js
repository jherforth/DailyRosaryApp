// CATHORIST PEBBLE APP BY JASON HERFORTH
// 2016-02-
// V1.0

//LET'S GET THIS PARTY STARTED
var UI = require('ui');
var Vector2 = require('vector2');

var bgcolor = '#AA0000';
var txtcolor = 'white';

//SPLASH SCREEN
var splashScreen = new UI.Window({ 
  fulscreen: true,
  backgroundColor: '#0055AA'
  });

//SPLASH SCREEN FORMATED TEXT
var splashScreenTitle1 = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: "CATHORIST",
 textAlign: 'center',
 color: txtcolor
});

var splashScreenTitle2 = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Wrist Worn Catholic Spiritual Guide.",
 textAlign: 'center',
 color: txtcolor
});

var splashScreenTitle3 = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-14',
 text: "2016 Candidly.Us/Cathorist",
 textAlign: 'center',
 color: txtcolor
});

//POSITION TEXT ON THE SPLASH SCREEN
var titlePos1 = splashScreenTitle1.position();
  titlePos1.y += 5;
  splashScreenTitle1.position(titlePos1);

var titlePos2 = splashScreenTitle2.position();
  titlePos2.y += 70;
  splashScreenTitle2.position(titlePos2);

var titlePos3 = splashScreenTitle3.position();
  titlePos3.y += 115;
  splashScreenTitle3.position(titlePos3);

//TITLE CROSS IMAGE COMPONENTS
var titleCrossH = new UI.Rect({
  position: new Vector2(62,43),
  size: new Vector2(22,8),
  backgroundColor: 'white'
});
var titleCrossV = new UI.Rect({
  position: new Vector2(69,36),
  size: new Vector2(8,30),
  backgroundColor: 'white'
});

splashScreen.add(titleCrossH);
splashScreen.add(titleCrossV);
splashScreen.add(splashScreenTitle1);
splashScreen.add(splashScreenTitle2);
splashScreen.add(splashScreenTitle3);
splashScreen.show();

//ROSARY SCREEN
var rosary = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: bgcolor, 
  scrollable: true 
});

splashScreen.on('click', 'select', function(e) {
//MAIN MENU
var mainMenu = new UI.Menu({
  backgroundColor: '#0055AA',
  textColor: 'black',
  highlightBackgroundColor: 'FFAA00',
  highlightTextColor: 'white',
    sections: [{
      items: [
        { title: 'The Rosary', subtitle: 'Today\'s Mysteries' }, 
        { title: '$RequesterAddress', subtitle: 'get the ip' }]
    }]
  });

  mainMenu.show();

  mainMenu.on('select', function(e) {
    switch(e.itemIndex) {
      case 0: rosary.on('click', 'select', function() {rosary.show(); }); break;
      case 1: displayResults( base + 'address', '$RequesterAddress' ); break;
      default: 
        console.log('e.itemIndex is out of bounds: ' + e.itemIndex);
    } 
 });
});

//BLANK CANVAS
var day1 ="";
var day2 ="";
var day3 ="";
var day4 ="";
var day5 ="";
var mystery ="";

//MYSTERIES TEXT
var glorious1 = "I. Resurrection of Jesus Christ";
var glorious2 = "II. The Ascension of Jesus to Heaven";
var glorious3 = "III. The Descent of the Holy Ghost";
var glorious4 = "IV. The Assumption of Mary into Heaven";
var glorious5 = "V. The Coronation of Mary";

var luminous1 = "I. The Baptism in the Jordan";
var luminous2 = "II. The Wedding Feast at Cana";
var luminous3 = "III. The Proclamation of the Kingdom";
var luminous4 = "IV. The Transfiguration on";
var luminous5 = "V. The Institution of the Eucharist";

var sorrowful1 = "I. Agony of Jesus in the Garden";
var sorrowful2 = "II. The Scourging at the Pillar";
var sorrowful3 = "III. Jesus is Crowned with Thorns";
var sorrowful4 = "IV. Jesus Carried the Cross";
var sorrowful5 = "V. The Crucifixion of our Lord";

var joyful1 = "I. Annunciation of the Lord to Mary";
var joyful2 = "II. Visitation of Mary to Elizabeth";
var joyful3 = "III. Nativity of our Lord Jesus Christ";
var joyful4 = "IV. Presentation of our Lord";
var joyful5 = "V. Finding Jesus in the Temple";

//SETS TEXT FOR THE DAY
switch (new Date().getDay()) {
    case 0:
        day1 = glorious1;
        day2 = glorious2;
        day3 = glorious3;
        day4 = glorious4;
        day5 = glorious5;
        bgcolor = '#AA55AA';
        mystery = "GLORIOUS";
        break;
    case 1:
        day1 = joyful1;
        day2 = joyful2;
        day3 = joyful3;
        day4 = joyful4;
        day5 = joyful5;
        bgcolor = '#005500';
        mystery = "JOYFUL";
        break;
    case 2:
        day1 = sorrowful1;
        day2 = sorrowful2;
        day3 = sorrowful3;
        day4 = sorrowful4;
        day5 = sorrowful5;
        bgcolor = '#AA0000';
        mystery = "SORROWFUL";
        break;
    case 3:
        day1 = glorious1;
        day2 = glorious2;
        day3 = glorious3;
        day4 = glorious4;
        day5 = glorious5;
        bgcolor = '#AA55AA';
        mystery = "GLORIOUS";
        break;
    case 4:
        day1 = luminous1;
        day2 = luminous2;
        day3 = luminous3;
        day4 = luminous4;
        day5 = luminous5;
        bgcolor = 'white';
        txtcolor = 'black';
        mystery = "LUMINOUS";
        break;
    case 5:
        day1 = sorrowful1;
        day2 = sorrowful2;
        day3 = sorrowful3;
        day4 = sorrowful4;
        day5 = sorrowful5;
        bgcolor = '#AA0000';
        mystery = "SORROWFUL";
        break;
    case 6:
        day1 = joyful1;
        day2 = joyful2;
        day3 = joyful3;
        day4 = joyful4;
        day5 = joyful5;
        bgcolor = '#005500';
        mystery = "JOYFUL";
        break;
}

//DAILY ROSARY TITLE
var dailyRosary = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: mystery,
 textAlign: 'center',
 color: txtcolor
});

//SETS STYLE FOR EACH MYSTERY TEXT
var meditation1 = new UI.Text({
position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: day1,
 textAlign: 'center',
 color: txtcolor
});

var meditation2 = new UI.Text({
position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: day2,
 textAlign: 'center',
 color: txtcolor
});

var meditation3 = new UI.Text({
position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: day3,
 textAlign: 'center',
 color: txtcolor
});

var meditation4 = new UI.Text({
position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: day4,
 textAlign: 'center',
 color: txtcolor
});

var meditation5 = new UI.Text({
position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: day5,
 textAlign: 'center',
 color: txtcolor
});

//POSITIONS EACH MYSTERY TEXT
var pos1 = meditation1.position();
  pos1.y += 55;
  meditation1.position(pos1);

var pos2 = meditation2.position();
  pos2.y += 95;
  meditation2.position(pos2);

var pos3 = meditation3.position();
  pos3.y += 135;
  meditation3.position(pos3);

var pos4 = meditation4.position();
  pos4.y += 175;
  meditation4.position(pos4);

var pos5 = meditation5.position();
  pos5.y += 215;
  meditation5.position(pos5);

//BEADS IMAGE COMPONENTS
//MYSTERY BEADS
var tlbead = new UI.Circle({
  position: new Vector2(57,25),
  radius: 3,
  backgroundColor: 'white'
});
var trbead = new UI.Circle({
  position: new Vector2(85,25),
  radius: 3,
  backgroundColor: 'white'
});
var brbead = new UI.Circle({
  position: new Vector2(85,53),
  radius: 3,
  backgroundColor: 'white'
});
var blbead = new UI.Circle({
  position: new Vector2(57,53),
  radius: 3,
  backgroundColor: 'white'
});
var cbead = new UI.Circle({
  position: new Vector2(71,31),
  radius: 3,
  backgroundColor: 'white'
});

//TOP ROW
var tbead1 = new UI.Circle({
  position: new Vector2(66,25),
  radius: 2,
  backgroundColor: 'white'
});
var tbead2 = new UI.Circle({
  position: new Vector2(76,25),
  radius: 2,
  backgroundColor: 'white'
});

//RIGHT ROW
var rbead1 = new UI.Circle({
  position: new Vector2(85,34),
  radius: 2,
  backgroundColor: 'white'
});
var rbead2 = new UI.Circle({
  position: new Vector2(85,43),
  radius: 2,
  backgroundColor: 'white'
});

//LEFT ROW
var lbead1 = new UI.Circle({
  position: new Vector2(57,34),
  radius: 2,
  backgroundColor: 'white'
});
var lbead2 = new UI.Circle({
  position: new Vector2(57,43),
  radius: 2,
  backgroundColor: 'white'
});

//BOTTOM ROW
var bbead1 = new UI.Circle({
  position: new Vector2(66,53),
  radius: 2,
  backgroundColor: 'white'
});
var bbead2 = new UI.Circle({
  position: new Vector2(76,53),
  radius: 2,
  backgroundColor: 'white'
});

//CROSS IMAGE COMPONENTS
var hcross = new UI.Rect({
  position: new Vector2(65,41),
  size: new Vector2(12,4),
  backgroundColor: 'white'
});
var vcross = new UI.Rect({
  position: new Vector2(69,37),
  size: new Vector2(4,14),
  backgroundColor: 'white'
});

rosary.add(dailyRosary);
rosary.add(tlbead);
rosary.add(trbead);
rosary.add(brbead);
rosary.add(blbead);
rosary.add(cbead);
rosary.add(tbead1);
rosary.add(tbead2);
rosary.add(rbead1);
rosary.add(rbead2);
rosary.add(lbead1);
rosary.add(lbead2);
rosary.add(bbead1);
rosary.add(bbead2);
rosary.add(hcross);
rosary.add(vcross);
rosary.add(meditation1);
rosary.add(meditation2);
rosary.add(meditation3);
rosary.add(meditation4);
rosary.add(meditation5);