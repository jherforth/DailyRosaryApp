// CATHORIST PEBBLE APP BY JASON HERFORTH
// 2016
// V1.0

//LET'S GET THIS PARTY STARTED
var UI = require('ui');
var Vector2 = require('vector2');

var rosaryIMG = 'images/rosary.png';
var confessionIMG = 'images/confession.png';
var prayersIMG = 'images/prayers.png';

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
 color: 'white'
});

var splashScreenTitle2 = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Wrist Worn Catholic Spiritual Guide.",
 textAlign: 'center',
 color: 'white'
});

var splashScreenTitle3 = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-14',
 text: "Candidly.Us/Cathorist SELECT to Continue",
 textAlign: 'center',
 color: 'white'
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

//  ++ ROSARY ++ 
//  ++ SCREEN ++
//  ++ START  ++
//ROSARY COMPONENT BLANK VARIABLES
var day1 ="";
var day2 ="";
var day3 ="";
var day4 ="";
var day5 ="";
var mystery ="";
var bgcolor = '';
var txtcolor = '';
var imgColor = '';

var rosary = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: bgcolor, 
  scrollable: true 
});

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
        txtcolor = '#FFFFFF';
        mystery = "GLORIOUS";
        imgColor = '#FFFFFF';
        break;
    case 1:
        day1 = joyful1;
        day2 = joyful2;
        day3 = joyful3;
        day4 = joyful4;
        day5 = joyful5;
        bgcolor = '#005500';
        txtcolor = '#FFFFFF';
        mystery = "JOYFUL";
        imgColor = '#FFFFFF';
        break;
    case 2:
        day1 = sorrowful1;
        day2 = sorrowful2;
        day3 = sorrowful3;
        day4 = sorrowful4;
        day5 = sorrowful5;
        bgcolor = '#AA0000';
        txtcolor = '#FFFFFF';
        mystery = "SORROWFUL";
        imgColor = '#FFFFFF';
        break;
    case 3:
        day1 = glorious1;
        day2 = glorious2;
        day3 = glorious3;
        day4 = glorious4;
        day5 = glorious5;
        bgcolor = '#AA55AA';
        txtcolor = '#FFFFFF';
        mystery = "GLORIOUS";
        imgColor = '#FFFFFF';
        break;
    case 4:
        day1 = luminous1;
        day2 = luminous2;
        day3 = luminous3;
        day4 = luminous4;
        day5 = luminous5;
        bgcolor = '#FFFFFF';
        txtcolor = '#000000';
        mystery = "LUMINOUS";
        imgColor = '#000000';
        break;
    case 5:
        day1 = sorrowful1;
        day2 = sorrowful2;
        day3 = sorrowful3;
        day4 = sorrowful4;
        day5 = sorrowful5;
        bgcolor = '#AA0000';
        txtcolor = '#FFFFFF';
        mystery = "SORROWFUL";
        imgColor = '#FFFFFF';
        break;
    case 6:
        day1 = joyful1;
        day2 = joyful2;
        day3 = joyful3;
        day4 = joyful4;
        day5 = joyful5;
        bgcolor = '#005500';
        txtcolor = '#FFFFFF';
        mystery = "JOYFUL";
        imgColor = '#FFFFFF';
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
  pos1.y += 60;
  meditation1.position(pos1);

var pos2 = meditation2.position();
  pos2.y += 100;
  meditation2.position(pos2);

var pos3 = meditation3.position();
  pos3.y += 140;
  meditation3.position(pos3);

var pos4 = meditation4.position();
  pos4.y += 180;
  meditation4.position(pos4);

var pos5 = meditation5.position();
  pos5.y += 220;
  meditation5.position(pos5);

//BEADS IMAGE COMPONENTS
//MYSTERY BEADS
var tlbead = new UI.Circle({
  position: new Vector2(57,30),
  radius: 3,
  backgroundColor: imgColor
});
var trbead = new UI.Circle({
  position: new Vector2(85,30),
  radius: 3,
  backgroundColor: imgColor
});
var brbead = new UI.Circle({
  position: new Vector2(85,58),
  radius: 3,
  backgroundColor: imgColor
});
var blbead = new UI.Circle({
  position: new Vector2(57,58),
  radius: 3,
  backgroundColor: imgColor
});
var cbead = new UI.Circle({
  position: new Vector2(71,36),
  radius: 3,
  backgroundColor: imgColor
});

//TOP ROW
var tbead1 = new UI.Circle({
  position: new Vector2(66,30),
  radius: 2,
  backgroundColor: imgColor
});
var tbead2 = new UI.Circle({
  position: new Vector2(76,30),
  radius: 2,
  backgroundColor: imgColor
});

//RIGHT ROW
var rbead1 = new UI.Circle({
  position: new Vector2(85,39),
  radius: 2,
  backgroundColor: imgColor
});
var rbead2 = new UI.Circle({
  position: new Vector2(85,48),
  radius: 2,
  backgroundColor: imgColor
});

//LEFT ROW
var lbead1 = new UI.Circle({
  position: new Vector2(57,39),
  radius: 2,
  backgroundColor: imgColor
});
var lbead2 = new UI.Circle({
  position: new Vector2(57,48),
  radius: 2,
  backgroundColor: imgColor
});

//BOTTOM ROW
var bbead1 = new UI.Circle({
  position: new Vector2(66,58),
  radius: 2,
  backgroundColor: imgColor
});
var bbead2 = new UI.Circle({
  position: new Vector2(76,58),
  radius: 2,
  backgroundColor: imgColor
});

//CROSS IMAGE COMPONENTS
var hcross = new UI.Rect({
  position: new Vector2(65,46),
  size: new Vector2(12,4),
  backgroundColor: imgColor
});
var vcross = new UI.Rect({
  position: new Vector2(69,42),
  size: new Vector2(4,14),
  backgroundColor: imgColor
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
//  ++ ROSARY  ++
//  ++ SCREEN  ++
//  ++  END    ++

//  ++ PRAYERS ++
//  ++ SCREEN  ++
//  ++  START  ++
var prayers = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: 'black', 
  scrollable: true
});

// PRAYERS TITLE
var prayersTitle = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: "Common Prayers",
 textAlign: 'center',
 color: 'white'
});

//OUR FATHER
var ourFatherTitle = new UI.Text({
 position: new Vector2(0, 35),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Our Father",
 textAlign: 'center',
 color: 'white'
});

var ourFather1 = new UI.Text({
 position: new Vector2(0, 60),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses, as we forgive those who",
 textAlign: 'center',
 color: 'white'
});

var ourFather2 = new UI.Text({
 position: new Vector2(0, 240),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "trespass against us and lead us not into temptation, but deliver us from evil. Amen.",
 textAlign: 'center',
 color: 'white'
});

//HAIL MARY
var hailMaryTitle = new UI.Text({
 position: new Vector2(0, 320),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Hail Mary",
 textAlign: 'center',
 color: 'white'
});

var hailMary = new UI.Text({
 position: new Vector2(0, 345),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. Holy Mary, mother of God, pray for us sinners now and at the hour of our death. Amen.",
 textAlign: 'center',
 color: 'white'
});

//GLORY BE
var gloryBeTitle = new UI.Text({
 position: new Vector2(0, 515),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Glory Be",
 textAlign: 'center',
 color: 'white'
});

var gloryBe = new UI.Text({
 position: new Vector2(0, 540),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
 textAlign: 'center',
 color: 'white'
});

//APOSTLES CREED
var apostlesCreedTitle = new UI.Text({
 position: new Vector2(0, 660),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Apostles' Creed",
 textAlign: 'center',
 color: 'white'
});

var apostlesCreed1 = new UI.Text({
 position: new Vector2(0, 685),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "I believe in God, the Father almighty, creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was",
 textAlign: 'center',
 color: 'white'
});

var apostlesCreed2 = new UI.Text({
 position: new Vector2(0, 845),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "crucified, died, and was buried. He descended into hell; the third day he rose again from the dead; he ascended into heaven and is seated at the right hand of the Father; from thence he shall come to judge the",
 textAlign: 'center',
 color: 'white'
});

var apostlesCreed3 = new UI.Text({
 position: new Vector2(0, 1005),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
 textAlign: 'center',
 color: 'white'
});

prayers.add(prayersTitle);
prayers.add(ourFatherTitle);
prayers.add(ourFather1);
prayers.add(ourFather2);
prayers.add(hailMaryTitle);
prayers.add(hailMary);
prayers.add(gloryBeTitle);
prayers.add(gloryBe);
prayers.add(apostlesCreedTitle);
prayers.add(apostlesCreed1);
prayers.add(apostlesCreed2);
prayers.add(apostlesCreed3);
//  ++ PRAYERS ++
//  ++ SCREEN  ++
//  ++  END    ++

//  ++ CONFESSION ++
//  ++   SCREEN   ++
//  ++   START    ++
var confession = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: "black", 
  scrollable: true 
});

//CONFESSION HOW TO
var confessionTitle = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: "Confession Guide",
 textAlign: 'center',
 color: 'white'
});

//CONFESSION STEPS
var confession1 = new UI.Text({
 position: new Vector2(0, 30),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Steps When Going to Confession",
 textAlign: 'center',
 color: 'white'
});

var confession2 = new UI.Text({
 position: new Vector2(0, 70),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "1) Sign of the Cross - (Optional Scripture Reading)",
 textAlign: 'center',
 color: 'white'
});

var confession3 = new UI.Text({
 position: new Vector2(0, 130),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "2) \"Bless me Father for I have sinned. My last confession was [X] days ago and I want to tell God that I am sorry for the things that I have done and ask God to forgive me. My sins are:\"",
 textAlign: 'center',
 color: 'white'
});

var confession4 = new UI.Text({
 position: new Vector2(0, 240),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "3) List your sins since your last confession.",
 textAlign: 'center',
 color: 'white'
});

var confession4 = new UI.Text({
 position: new Vector2(0, 280),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "4) Listen carefully for your penance from the priest.",
 textAlign: 'center',
 color: 'white'
});

var confession5 = new UI.Text({
 position: new Vector2(0, 340),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "5) Recite the Act of Contrition.",
 textAlign: 'center',
 color: 'white'
});

var confession6 = new UI.Text({
 position: new Vector2(0, 385),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Act of Contrition.",
 textAlign: 'center',
 color: 'white'
});

var confession7 = new UI.Text({
 position: new Vector2(0, 410),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "O MY GOD,  I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of Heaven and the pains of Hell; but most of all because they offend Thee, my God, Who art all",
 textAlign: 'center',
 color: 'white'
});

var confession8 = new UI.Text({
  position: new Vector2(0, 555),
  size: new Vector2(144, 168),
  font: 'gothic-18',
  text: "good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.",
  textAlign: 'center',
  color: 'white'
});

var confession9 = new UI.Text({
 position: new Vector2(0, 675),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "6) Return to the pew and thank God for His boundless mercy. Start your penance.",
 textAlign: 'center',
 color: 'white'
});

confession.add(confessionTitle);
confession.add(confession1);
confession.add(confession2);
confession.add(confession3);
confession.add(confession4);
confession.add(confession5);
confession.add(confession6);
confession.add(confession7);
confession.add(confession8);
confession.add(confession9);
//  ++ CONFESSION ++
//  ++   SCREEN   ++
//  ++    END     ++

//MAIN MENU SCREEN
splashScreen.on('click', 'select', function(e) {

var mainMenu = new UI.Menu({
  backgroundColor: '#0055AA',
  textColor: 'black',
  highlightBackgroundColor: 'FFAA00',
  highlightTextColor: 'white',
    sections: [{
      items: [
        { title: 'The Rosary', subtitle: 'Today\'s Mysteries', icon: rosaryIMG }, 
        { title: 'Prayers', subtitle: 'The Essentials', icon: prayersIMG },
        { title: 'Confession', subtitle: 'How To Guide', icon: confessionIMG }]
    }]
  });

  mainMenu.show();
  splashScreen.hide();
  
  mainMenu.on('select', function(e) {
   switch(e.itemIndex) {
      case 0: rosary.show(); mainMenu.hide(); break;
      case 1: prayers.show(); mainMenu.hide(); break;
      case 2: confession.show(); mainMenu.hide(); break;
      default: 
        console.log('e.itemIndex is out of bounds: ' + e.itemIndex);
    } 
 });
});