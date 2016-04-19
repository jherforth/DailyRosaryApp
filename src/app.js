// CATHORIST PEBBLE APP BY JASON HERFORTH
// 2016
// V1.3

//LET'S GET THIS PARTY STARTED
var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var rosaryIMG = 'images/rosary.png';
var confessionIMG = 'images/confession.png';
var prayersIMG = 'images/prayers.png';
var stationsIMG = 'images/stations.png';
var heartIMG = 'images/heart.png';
var popeIMG = 'images/pope.png';
var infoIMG = 'images/info.png';

// ++ START INTENTIONS SCREEN ++
var intentScreen = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: 'white', 
  scrollable: true
  });

var intentHeaderBG = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 60),
  backgroundColor: '#AAAA55'
});

var intentTitle = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: "Fetching Intentions",
 textAlign: 'center',
 color: 'black'
});

var intentText = new UI.Text({
 position: new Vector2(0, 65),
 size: new Vector2(144, 550),
 font: 'gothic-18',
 text: "Loading Text",
 textAlign: 'center',
 color: 'black'
});

// SET THE DATE
var todaysDate = new Date();
var month = todaysDate.getMonth();
var day = todaysDate.getDate();
var year = todaysDate.getFullYear();

// JSON URL
var URL = 'http://oremus.candidly.us/JSON/'+ year +'/intentions.js';

// PHONE HOME
ajax(
  { 
    url: URL,
    type: 'json'
  },
  function(data) {
    console.log('Success');
    
    var universal = data.intention1;
    var evangelization = data.intention2;
    var text1 = data.text1[month];
    var text2 = data.text2[month];
    var theTitle = "Pope's Montly Intentions";
    
    // WAH LAH!
    intentTitle.text(theTitle);
    intentText.text(universal + ": " + text1 + "\n\n" + evangelization + ": " + text2);  
  },
  
  // DUN BROKE IT
  function(error) {
    console.log('Error' + error);
   
    intentTitle.text('Failed.');
    intentText.text(error);
  }
);

// DISPLAY CARD
intentScreen.add(intentHeaderBG);
intentScreen.add(intentTitle);
intentScreen.add(intentText);

//  ++ SPLASH SCREEN START ++ 
var splashScreen = new UI.Window({ 
  fulscreen: true,
  backgroundColor: '#00AAFF'
  });

//SPLASH SCREEN FORMATED TEXT
var splashScreenTitle1 = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'roboto-condensed-21',
 text: "Orémus",
 textAlign: 'center',
 color: 'white'
});

var splashScreenTitle1a = new UI.Text({
 position: new Vector2(1, 1),
 size: new Vector2(144, 168),
 font: 'roboto-condensed-21',
 text: "Orémus",
 textAlign: 'center',
 color: 'black'
});

var splashScreenTitle2 = new UI.Text({
 position: new Vector2(0, 90),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Let Us Pray",
 textAlign: 'center',
 color: 'white'
});

var splashScreenTitle2a = new UI.Text({
 position: new Vector2(1, 91),
 size: new Vector2(144, 168),
 font: 'gothic-18-bold',
 text: "Let Us Pray",
 textAlign: 'center',
 color: 'black'
});

var splashScreenTitle3 = new UI.Text({
 position: new Vector2(0, 112),
 size: new Vector2(144, 168),
 font: 'gothic-14-bold',
 text: "Oremus.Candidly.Us SELECT to Continue",
 textAlign: 'center',
 color: 'white'
});

var splashScreenTitle3a = new UI.Text({
 position: new Vector2(1, 113),
 size: new Vector2(144, 168),
 font: 'gothic-14-bold',
 text: "Oremus.Candidly.Us SELECT to Continue",
 textAlign: 'center',
 color: 'black'
});

//EUCHARIST IMAGE COMPONENTS
var titleCrossH = new UI.Rect({
  position: new Vector2(68,44),
  size: new Vector2(8,2),
  backgroundColor: '#AAAA55'
});
var titleCrossV = new UI.Rect({
  position: new Vector2(71,41),
  size: new Vector2(2,8),
  backgroundColor: '#AAAA55'
});
var eucharist = new UI.Circle({
  position: new Vector2(71,45),
  radius: 8,
  backgroundColor: '#FFFFFF'
});

//CHALICE IMAGE COMPONENTS
var screen1 = new UI.Rect({
  position: new Vector2(57,37),
  size: new Vector2(30,15),
  backgroundColor: '#0055AA'
});
var chalice1 = new UI.Circle({
  position: new Vector2(71,49),
  radius: 10,
  backgroundColor: '#FFFF00'
});
var chalice2 = new UI.Circle({
  position: new Vector2(71,60),
  radius: 2,
  backgroundColor: '#FFFF00'
});
var chalice3 = new UI.Circle({
  position: new Vector2(71,65),
  radius: 2,
  backgroundColor: '#FFFF00'
});
var chalice4 = new UI.Circle({
  position: new Vector2(71,73),
  radius: 6,
  backgroundColor: '#FFFF00'
});
var screen2 = new UI.Rect({
  position: new Vector2(57,73),
  size: new Vector2(30,7),
  backgroundColor: '#0055AA'
});

//WATCH IMAGE COMPONENTS
var watch1 = new UI.Rect({
  position: new Vector2(45,28),
  size: new Vector2(53,55),
  backgroundColor: '#000000'
});
var screen3 = new UI.Rect({
  position: new Vector2(51,35),
  size: new Vector2(41,41),
  backgroundColor: '#0055AA'
});
var background3 = new UI.Rect({
  position: new Vector2(57,76),
  size: new Vector2(30,4),
  backgroundColor: '#000000'
});
var button1 = new UI.Rect({
  position: new Vector2(42,33),
  size: new Vector2(4,14),
  backgroundColor: '#000000'
});
var button2 = new UI.Rect({
  position: new Vector2(97,33),
  size: new Vector2(4,14),
  backgroundColor: '#000000'
});
var button3 = new UI.Rect({
  position: new Vector2(97,49),
  size: new Vector2(4,14),
  backgroundColor: '#000000'
});
var button4 = new UI.Rect({
  position: new Vector2(97,65),
  size: new Vector2(4,14),
  backgroundColor: '#000000'
});
var band = new UI.Rect({
  position: new Vector2(51,0),
  size: new Vector2(41,168),
  backgroundColor: '#555555'
});
var band1 = new UI.Rect({
  position: new Vector2(50,0),
  size: new Vector2(43,168),
  backgroundColor: '#000000'
});
var watch3 = new UI.Rect({
  position: new Vector2(50,25),
  size: new Vector2(8,61),
  backgroundColor: '#000000'
});
var watch4 = new UI.Rect({
  position: new Vector2(85,25),
  size: new Vector2(8,61),
  backgroundColor: '#000000'
});

splashScreen.add(band1);
splashScreen.add(band);
splashScreen.add(watch3);
splashScreen.add(watch4);
splashScreen.add(watch1);
splashScreen.add(screen3);
splashScreen.add(chalice1);
splashScreen.add(chalice3);
splashScreen.add(chalice4);
splashScreen.add(screen1);
splashScreen.add(eucharist);
splashScreen.add(titleCrossH);
splashScreen.add(titleCrossV);
splashScreen.add(chalice2);
splashScreen.add(screen2);
splashScreen.add(background3);
splashScreen.add(button1);
splashScreen.add(button2);
splashScreen.add(button3);
splashScreen.add(button4);
splashScreen.add(splashScreenTitle1a);
splashScreen.add(splashScreenTitle1);
splashScreen.add(splashScreenTitle2a);
splashScreen.add(splashScreenTitle2);
splashScreen.add(splashScreenTitle3a);
splashScreen.add(splashScreenTitle3);
splashScreen.show();

//  ++ ROSARY SCREEN START ++ 
//ROSARY COMPONENT BLANK VARIABLES
var mysteryDay ="";
var mystery ="";
var txtcolor = '';
var titleBG = '';

//MYSTERIES TEXT
var glorious = ["I. Resurrection of Jesus Christ \n",
                 "II. The Ascension of Jesus to Heaven \n",
                 "III. The Descent of the Holy Ghost \n",
                 "IV. The Assumption of Mary into Heaven \n",
                 "V. The Coronation of Mary"];

var luminous = ["I. The Lord's Baptism in the Jordan \n",
                "II. The Wedding Feast at Cana \n",
                "III. The Proclamation of the Kingdom \n",
                "IV. The Transfiguration on the mountain \n",
                "V. The Institution of the Eucharist"];

var sorrowful = ["I. Agony of Jesus in the Garden\n",
                 "II. The Scourging at the Pillar\n",
                 "III. Jesus is Crowned with Thorns\n",
                 "IV. Jesus Carries the Cross\n",
                 "V. The Crucifixion of our Lord"];

var joyful = ["I. Annunciation of the Lord to Mary \n",
              "II. Visitation of Mary to Elizabeth \n",
              "III. Nativity of our Lord Jesus Christ \n",
              "IV. Presentation of our Lord \n",
              "V. Finding Jesus in the Temple"];

//SETS TEXT FOR THE DAY
switch (new Date().getDay()) {
    case 0:
        mysteryDay = glorious;
        txtcolor = '#FFFFFF';
        mystery = "GLORIOUS";
        titleBG = '#AA55AA';
        break;
    case 1:
        mysteryDay = joyful;
        txtcolor = '#FFFFFF';
        mystery = "JOYFUL";
        titleBG = '#005500';
        break;
    case 2:
        mysteryDay = sorrowful;
        txtcolor = '#FFFFFF';
        mystery = "SORROWFUL";
        titleBG = '#AA0000';
        break;
    case 3:
        mysteryDay = glorious;
        txtcolor = '#FFFFFF';
        mystery = "GLORIOUS";
        titleBG = '#AA55AA';
        break;
    case 4:
        mysteryDay = luminous;
        txtcolor = '#000000';
        mystery = "LUMINOUS";
        titleBG = '#55AAAA';
        break;
    case 5:
        mysteryDay = sorrowful;
        txtcolor = '#FFFFFF';
        mystery = "SORROWFUL";
        titleBG = '#AA0000';
        break;
    case 6:
        mysteryDay = joyful;
        txtcolor = '#FFFFFF';
        mystery = "JOYFUL";
        titleBG = '#005500';
        break;
}

var rosary = new UI.Window({ 
  fullscreen: true,
  backgroundColor: 'white',
  scrollable: true 
});

//DAILY ROSARY TITLE
var dailyRosary = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-14-bold',
 text: mystery,
 textAlign: 'center',
 color: txtcolor
});

var titeBackgound = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 20),
  backgroundColor: titleBG
});

//SETS STYLE FOR EACH MYSTERY TEXT
var meditations = new UI.Text({
position: new Vector2(0, 22),
 size: new Vector2(144, 250),
 font: 'gothic-18',
 text: mysteryDay.join(""),
 textAlign: 'center',
 color: 'black'
});

rosary.add(titeBackgound);
rosary.add(dailyRosary);
rosary.add(meditations);

//  ++ PRAYERS SCREEN START ++
var allPrayers = {
  "prayer": [
    {
     "title": "Our Father",
     "prayer": ["Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses, as we forgive those who ",
                "trespass against us and lead us not into temptation, but deliver us from evil. Amen."
               ]
    },
    {  
     "title": "Hail Mary",
     "prayer": "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. Holy Mary, mother of God, pray for us sinners now and at the hour of our death. Amen."
    },
    {
     "title": "Glory Be",
     "prayer": "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."
    },
    {
     "title": "Apostles' Creed",
     "prayer": ["I believe in God, the Father almighty, creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was ",
                "crucified, died, and was buried. He descended into hell; the third day he rose again from the dead; he ascended into heaven and is seated at the right hand of the Father; from thence he shall come to judge the",
                "living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen."]
    }
  ]
};

var prayer0 = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: '#FFFFFF', 
  scrollable: true
  });

// PRAYERS TITLE
var prayersTitle0 = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  font: 'gothic-24-bold',
  text: allPrayers.prayer[0].title,
  textAlign: 'center',
  color: '#FFFFFF'
});

var titeHeaderBG0 = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 35),
  backgroundColor: '#0000AA'
});

var printPrayers0 = new UI.Text({
 position: new Vector2(0, 40),
 size: new Vector2(144, 1200),
 font: 'gothic-18',
 text: allPrayers.prayer[0].prayer.join(""),
 textAlign: 'center',
 color: '#000000'
});

prayer0.add(titeHeaderBG0);
prayer0.add(prayersTitle0);
prayer0.add(printPrayers0);

var prayer1 = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: '#FFFFFF', 
  scrollable: true
  });

// PRAYERS TITLE
var prayersTitle1 = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  font: 'gothic-24-bold',
  text: allPrayers.prayer[1].title,
  textAlign: 'center',
  color: '#FFFFFF'
});

var titeHeaderBG1 = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 35),
  backgroundColor: '#0000AA'
});

var printPrayers1 = new UI.Text({
 position: new Vector2(0, 40),
 size: new Vector2(144, 1200),
 font: 'gothic-18',
 text: allPrayers.prayer[1].prayer,
 textAlign: 'center',
 color: '#000000'
});

prayer1.add(titeHeaderBG1);
prayer1.add(prayersTitle1);
prayer1.add(printPrayers1);

var prayer2 = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: '#FFFFFF', 
  scrollable: true
  });

// PRAYERS TITLE
var prayersTitle2 = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  font: 'gothic-24-bold',
  text: allPrayers.prayer[2].title,
  textAlign: 'center',
  color: '#FFFFFF'
});

var titeHeaderBG2 = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 35),
  backgroundColor: '#0000AA'
});

var printPrayers2 = new UI.Text({
 position: new Vector2(0, 40),
 size: new Vector2(144, 1200),
 font: 'gothic-18',
 text: allPrayers.prayer[2].prayer,
 textAlign: 'center',
 color: '#000000'
});

prayer2.add(titeHeaderBG2);
prayer2.add(prayersTitle2);
prayer2.add(printPrayers2);

var prayer3 = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: '#FFFFFF', 
  scrollable: true
  });

// PRAYERS TITLE
var prayersTitle3 = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  font: 'gothic-24-bold',
  text: allPrayers.prayer[3].title,
  textAlign: 'center',
  color: '#FFFFFF'
});

var titeHeaderBG3 = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 35),
  backgroundColor: '#0000AA'
});

var printPrayers3 = new UI.Text({
 position: new Vector2(0, 40),
 size: new Vector2(144, 1200),
 font: 'gothic-18',
 text: allPrayers.prayer[3].prayer.join(""),
 textAlign: 'center',
 color: '#000000'
});

prayer3.add(titeHeaderBG3);
prayer3.add(prayersTitle3);
prayer3.add(printPrayers3);

var prayerMenu = new UI.Menu({
  backgroundColor: '#0055AA',
  textColor: 'white',
  highlightBackgroundColor: '#000000',
  highlightTextColor: 'white',
  sections: [{
    items: [
      { title: 'Our Father' }, 
      { title: 'Hail Mary' },
      { title: 'Glory Be' },
      { title: 'Apostle\'s Creed' }]
    }]
  });

  prayerMenu.on('select', function(e){
    switch(e.itemIndex) {
      case 0: prayer0.show(); break;
      case 1: prayer1.show(); break;
      case 2: prayer2.show(); break;
      case 3: prayer3.show(); break;
      default: 
        console.log('e.itemIndex is out of bounds: ' + e.itemIndex);
    } 
  });

//  ++ CONFESSION SCREEN START ++

//CONFESSION STEPS
var confessionSteps = ["Steps When Going to Confession\n\n",
                  "1) Sign of the Cross - (Optional Scripture Reading)\n",
                  "2) \"Bless me Father for I have sinned. My last confession was [X] days ago and I want to tell God that I am sorry for the things that I have done and ask God to forgive me. My sins are:\"\n",
                  "3) List your sins since your last confession.\n",
                  "4) Listen carefully for your penance from the priest.\n",
                  "5) Recite the Act of Contrition:\n\n",
                  "O MY GOD,  I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of Heaven and the pains of Hell; but most of all because they offend Thee, my God, Who art all ",
                  "good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.",
                  ];

var confession = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: "black", 
  scrollable: true 
});

var confessionTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  font: 'gothic-24-bold',
  text: "Confession Guide",
  textAlign: 'center',
  color: 'white'
});

var printConfession = new UI.Text({
  position: new Vector2(0, 30),
  size: new Vector2(144, 1200),
  font: 'gothic-18',
  text: confessionSteps.join(""),
  textAlign: 'center',
  color: 'white'
});

confession.add(confessionTitle);
confession.add(printConfession);

//  ++ STATIONS SCREEN START++
var stations = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: 'white', 
  scrollable: true
  });

// PRAYERS TITLE
var stationsTitle = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: "Stations of the Cross",
 textAlign: 'center',
 color: 'white'
});

var stationsHeaderBG = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 58),
  backgroundColor: '#AA0000'
});

//OUR FATHER
var stationsOpening = new UI.Text({
 position: new Vector2(0, 65),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Begin with the Sign of the Cross and by reciting the Act of Contrition",
 textAlign: 'center',
 color: 'black'
});

var station1 = new UI.Text({
 position: new Vector2(0, 130),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The First Station - Jesus is condemned to death. (Mark 15:1-15) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station2 = new UI.Text({
 position: new Vector2(0, 240),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Second Station - Jesus carries His cross. (John 19:13-17) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station3 = new UI.Text({
 position: new Vector2(0, 350),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Third Station - Jesus falls for the first time. (Isaiah 53:4-7) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station4 = new UI.Text({
 position: new Vector2(0, 460),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Fourth Station - Jesus meets his Mother. (Luke 2:25-40) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station5 = new UI.Text({
 position: new Vector2(0, 565),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Fifth Station - Simon of Cyrene helps Jesus. (Mark 15:21) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station6 = new UI.Text({
 position: new Vector2(0, 670),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Sixth Station - Veronica wipes the face of Jesus. (Matthew 25:40) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station7 = new UI.Text({
 position: new Vector2(0, 793),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Seventh Station - Jesus falls the second time. (Psalm 38:6-22) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station8 = new UI.Text({
 position: new Vector2(0, 903),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Eighth Station - Jesus consoles the women of Jerusalem. (Luke 23:27-31) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station9 = new UI.Text({
 position: new Vector2(0, 1025),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Ninth Station - Jesus falls the third time. (Psalm 37:23-24) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station10 = new UI.Text({
 position: new Vector2(0, 1130),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Tenth Station - Jesus is stripped of his garments. (John 19:23-24) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station11 = new UI.Text({
 position: new Vector2(0, 1252),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Eleventh Station - Jesus is nailed to the Cross. (Luke 23:33-43) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station12 = new UI.Text({
 position: new Vector2(0, 1350),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Twelfth Station - Jesus dies on the Cross. (John 19:28-37) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station13 = new UI.Text({
 position: new Vector2(0, 1458),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Thirteenth Station - Jesus is taken down from the Cross. (John 19:38-40) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var station14 = new UI.Text({
 position: new Vector2(0, 1575),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The Fourteenth Station - Jesus is laid in the Tomb. (Matthew 27:57-61) + Our Father + Hail Mary + Glory Be to the Father +",
 textAlign: 'center',
 color: 'black'
});

var stationEnd = new UI.Text({
 position: new Vector2(0, 1695),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "This was the traditional Stations of the Cross, there is an alternative offered by Saint Pope John Paul II.",
 textAlign: 'center',
 color: 'black'
});

stations.add(stationsHeaderBG);
stations.add(stationsTitle);
stations.add(stationsOpening);
stations.add(station1);
stations.add(station2);
stations.add(station3);
stations.add(station4);
stations.add(station5);
stations.add(station6);
stations.add(station7);
stations.add(station8);
stations.add(station9);
stations.add(station10);
stations.add(station11);
stations.add(station12);
stations.add(station13);
stations.add(station14);
stations.add(stationEnd);

//  ++ CHAPLET SCREEN START++
var chapletPrayers = ["Using a Rosary starting with the Crucifix: Make the sign of the cross.\n\n",
                      "First Large Bead:\n",
                      "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. \n\n",
                      "Next Three Small Beads: + Our Father + Hail Mary + Apostles' Creed + \n\n",
                      "The second large bead and all after, pray The Eternal Father prayer:\n",
                      "Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.\n\n",
                      "On the 10 small decade beads pray: For the sake of His sorrowful Passion, have mercy on us and on the whole world.\n\n",
                      "Conclude at the medalion by praying: (x3) Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.\n\n",
                      "Concluding Prayer (optional):\n",
                      "Eternal God, in whom mercy is endless and the treasury of compassion, inexhaustible, look kindly upon us and increase Your mercy in us,",
                      "that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself."
                     ];

//  ++ CHAPLET SCREEN START++
var chaplet = new UI.Window({ 
  fullscreen: true, 
  backgroundColor: 'white', 
  scrollable: true
  });

// PRAYERS TITLE
var chapletTitle = new UI.Text({
 position: new Vector2(0, 0),
 size: new Vector2(144, 168),
 font: 'gothic-24-bold',
 text: "Chaplet of Divine Mercy",
 textAlign: 'center',
 color: 'white'
});

var chapletHeaderBG = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 58),
  backgroundColor: '#550055'
});

//OUR FATHER
var chapletOpening = new UI.Text({
 position: new Vector2(0, 65),
 size: new Vector2(144, 168),
 font: 'gothic-18',
  text: "Using a Rosary starting with the Crucifix: Make the sign of the cross.",
 textAlign: 'center',
 color: 'black'
});

var chaplet1 = new UI.Text({
 position: new Vector2(0, 130),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "First Large Bead:",
 textAlign: 'center',
 color: 'black'
});

var chaplet2 = new UI.Text({
 position: new Vector2(0, 150),
 size: new Vector2(144, 168),
 font: 'gothic-18',
  text: "You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. ",
 textAlign: 'center',
 color: 'black'
});

var chaplet3 = new UI.Text({
 position: new Vector2(0, 341),
 size: new Vector2(144, 168),
 font: 'gothic-18',
  text: "Next Three Small Beads: + Our Father + Hail Mary + Apostles' Creed +",
 textAlign: 'center',
 color: 'black'
});

var chaplet4 = new UI.Text({
 position: new Vector2(0, 410),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "The second large bead and all after, pray The Eternal Father prayer:",
 textAlign: 'center',
 color: 'black'
});

var chaplet5 = new UI.Text({
 position: new Vector2(0, 465),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.",
 textAlign: 'center',
 color: 'black'
});

var chaplet6 = new UI.Text({
 position: new Vector2(0, 618),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "On the 10 small decade beads pray: For the sake of His sorrowful Passion, have mercy on us and on the whole world.",
 textAlign: 'center',
 color: 'black'
});

var chaplet7 = new UI.Text({
 position: new Vector2(0, 723),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Conclude at the medalion by praying: (x3) Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.",
 textAlign: 'center',
 color: 'black'
});

var chaplet8 = new UI.Text({
 position: new Vector2(0, 860),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Concluding Prayer (optional):",
 textAlign: 'center',
 color: 'black'
});

var chaplet9 = new UI.Text({
 position: new Vector2(0, 912),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "Eternal God, in whom mercy is endless and the treasury of compassion, inexhaustible, look kindly upon us and increase Your mercy in us,",
 textAlign: 'center',
 color: 'black'
});

var chapletEnd = new UI.Text({
 position: new Vector2(0, 1022),
 size: new Vector2(144, 168),
 font: 'gothic-18',
 text: "that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.",
 textAlign: 'center',
 color: 'black'
});

chaplet.add(chapletHeaderBG);
chaplet.add(chapletTitle);
chaplet.add(chapletOpening);
chaplet.add(chaplet1);
chaplet.add(chaplet2);
chaplet.add(chaplet3);
chaplet.add(chaplet4);
chaplet.add(chaplet5);
chaplet.add(chaplet6);
chaplet.add(chaplet7);
chaplet.add(chaplet8);
chaplet.add(chaplet9);
chaplet.add(chapletEnd);

//  ++  ABOUT SCREEN START ++
var about = new UI.Card({
  title: 'About Orémus',
  body: 'This app was an experiment with plans to grow. This is a purely JavaScript App. This is my first endeavor in programming. I hope to provide more functionality. To contribute checkout my website at oremus.candidly.us',
  scrollable: true
});

about.on('click','back',function(){
      about.hide();
      splashScreen.show();
    });

//  ++  MAIN MENU SCREEN START ++
splashScreen.on('click', 'select', function(e) {

var mainMenu = new UI.Menu({
  backgroundColor: '#0055AA',
  textColor: 'white',
  highlightBackgroundColor: '#000000',
  highlightTextColor: 'white',
    sections: [{
      items: [
        { title: 'The Rosary', subtitle: 'Today\'s Mysteries', icon: rosaryIMG }, 
        { title: 'Prayers', subtitle: 'The Essentials', icon: prayersIMG },
        { title: 'Confession', subtitle: 'Quick Guide', icon: confessionIMG },
        { title: 'Stations of', subtitle: 'the Cross', icon: stationsIMG },
        { title: 'Divine Mercy', subtitle: 'Chaplet', icon: heartIMG },
        { title: 'The Pope\'s', subtitle: 'Monthly Intentions', icon: popeIMG },
        { title: 'About Orémus', subtitle: 'Pebble App', icon: infoIMG }]
    }]
  });

  mainMenu.show();
  splashScreen.hide();
  
  mainMenu.on('select', function(e) {
   switch(e.itemIndex) {
      case 0: rosary.show(); break;
      case 1: prayerMenu.show(); break;
      case 2: confession.show(); break;
      case 3: stations.show(); break;
      case 4: chaplet.show(); break;
      case 5: intentScreen.show(); break;
      case 6: about.show(); mainMenu.hide(); break;
      default: 
        console.log('e.itemIndex is out of bounds: ' + e.itemIndex);
    } 
 });
});