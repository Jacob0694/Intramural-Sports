Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Intramural Sports',
    backgroundColor:'#d2b45b'
});
var scheduleWindow = Ti.UI.createWindow({
	text:'Schedule',
	backgroundColor:'#fff'
});
var scoresWindow = Ti.UI.createWindow({
	text:'Scores',
	backgroundColor:'#fff'
});
var summerintWindow = Ti.UI.createWindow({
	text:'Summer Intramurals',
	backgroundColor:'#fff'
});
var weekendWindow = Ti.UI.createWindow({
	text:'Weekend Intramurals',
	backgroundColor:'#fff'
});
var titleView = Ti.UI.createView({		//Titles
	height: '20%',
	width: '100%',
	top:'0%',
	backgroundImage: 'Summer-Sand-Volleyball.jpg'
});
var titleLabel = Ti.UI.createLabel({
	text:'Intramural Sports',
	left: '45%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'75sp',
			fontWeight:'bold',
			fontColor:'#FF0000'
	}									
});
var scheduleTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'Schedule',
	textAlign: 'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var scoresTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scoresTitleLabel = Ti.UI.createLabel({
	text:'Scores',
	color: '#d2b45b',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var summerintTitleView = Ti.UI.createView({
	top: 0,
	height:'20%',
	width: '100%',
});
var summerintTitleLabel = Ti.UI.createLabel({
	text:'Summer Intramurals',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var weekendTitleView = Ti.UI.createView({
	top: 0,
	height:'20%',
	width: '100%',
});
var weekendTitleLabel = Ti.UI.createLabel({
	text:'Weekend',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});
var ContactList = Ti.UI.createView({				//HOME SCREEN
	height:'13%',
	width:'45%',
	left:'35%',
	top: '40%',				
});
var contactInfo = Ti.UI.createLabel({
	text: 'Butch Fealy \nDirector of Intramural Sports \nPhone: (208) 885-8979 \nEmail:bfealy@uidaho.edu',
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'25sp'
	}
});
var soccerpic = Ti.UI.createImageView({
	top: 0,
	left: 0,
	height:'17%',
	width:'10%',
	image: '/Images/soccerball.png'
});
var basketballpic = Ti.UI.createImageView({
	top: 0,
	right: 0,
	height:'17%',
	width:'10%',
	image: '/Images/basketball.jpg'
});
var baseballpic = Ti.UI.createImageView({
	bottom: 0,
	left: 0,
	height:'17%',
	width:'10%',
	image: '/Images/baseball.png'
});
var tennispic = Ti.UI.createImageView({
	bottom: 0,
	right: 0,
	height:'17%',
	width:'10%',
	image: '/Images/tennisball.png'
});
var HomeScrnPic = Ti.UI.createView({
	height:'35%',
	width:'80%',
	left:'20%',
	bottom: 0,
	borderRadius: 20,
	backgroundImage:'/Images/IntramuralsSports.jpg'
});
var returnView = Ti.UI.createView({		//ButtonViews
	bottom: '0',
	left: 0,
	height:'10%',
	width:'100%',
	backgroundColor:'black'
});
var scheduleView = Ti.UI.createView({		
	height: '20%',
	width: '20%',
	left: 0,
	top: '20%'
});
var scoresView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '40%'
});
var summerintView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '60%'
});
var weekendView = Ti.UI.createView({
	height: '20%',
	width: '20%',
	left: 0,
	top: '80%'
});
var blurbView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});	
var scoresWindView = Ti.UI.createView({
	height: '70%',
	width: '100%',
	top: '20%',
	bottom: '5%',
	backgroundImage: '/Images/Bus 353- Scores.JPG',
});	
var scheduleWindView = Ti.UI.createView({
	height: '70%',
	width: '100%',
	top: '20%',
	bottom: '5%',
	backgroundImage: '/Images/Bus 353-Schedule.JPG',
});		

var blurbLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	text: 'Intramural Sports are available for the University of Idaho campus community to participate in structured activities at a competitive or recreational level. No matter what your skill level you will have a good time.',
	font:{
		fontSize:'25sp',
		fontWeight:'bold',
	}	
});

var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Schedule',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var scoresButton = Ti.UI.createButton({
	title:'Scores',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var summerintButton = Ti.UI.createButton({
	title:'Summer',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var weekendButton = Ti.UI.createButton({
	title:'Weekend',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});
var returnButton = Ti.UI.createButton({
	title:'Return',
	color:'black',
	borderRadius: 10,
	height:Ti.UI.FILL,
	width:'15%',
	height:'100%',
	left: 0,
	bordercolor:'black',
	backgroundColor: '#d2b45b',
	textAlign:'center',
	font:{
		fontSize:'35sp',
		fontWeight:'bold',
	},
	backgroundcolor:'#333333'
});


scoresButton.addEventListener('click', function(e){			//Event Listeners
	win1.close();
	scoresWindow.close();
	scheduleWindow.close();
	summerintWindow.close();
	weekendWindow.close();
	scoresWindow.open();
	
});
scheduleButton.addEventListener('click', function(e){
	win1.close();
	scoresWindow.close();
	scheduleWindow.close();
	summerintWindow.close();
	weekendWindow.close();
	scheduleWindow.open();
});
summerintButton.addEventListener('click', function(e){
	win1.close();
	scoresWindow.close();
	scheduleWindow.close();
	summerintWindow.close();
	weekendWindow.close();
	summerintWindow.open();
});
weekendButton.addEventListener('click', function(e){
	win1.close();
	scoresWindow.close();
	scheduleWindow.close();
	summerintWindow.close();
	weekendWindow.close();
	weekendWindow.open();
});
returnButton.addEventListener('click', function(e){
	win1.open();
});

win1.open();
win1.add(titleView);
titleView.add(titleLabel);
win1.add(scoresView);
win1.add(scheduleView);
win1.add(summerintView);
win1.add(weekendView);
win1.add(blurbView);
win1.add(HomeScrnPic);
win1.add(ContactList);
scoresWindow.add(returnView);
scheduleWindow.add(returnView);
summerintWindow.add(returnView);
weekendWindow.add(returnView);
scoresWindow.add(scoresTitleView);
scheduleWindow.add(scheduleTitleView);
summerintWindow.add(summerintTitleView);
weekendWindow.add(weekendTitleView);
scoresWindow.add(scoresWindView);
scheduleWindow.add(scheduleWindView);


blurbView.add(blurbLabel);
scoresView.add(scoresButton);
scheduleView.add(scheduleButton);
summerintView.add(summerintButton);
weekendView.add(weekendButton);
returnView.add(returnButton);
scoresTitleView.add(scoresTitleLabel);
scheduleTitleView.add(scheduleTitleLabel);
summerintTitleView.add(summerintTitleLabel);
weekendTitleView.add(weekendTitleLabel);
ContactList.add(contactInfo);
ContactList.add(soccerpic);
ContactList.add(basketballpic);
ContactList.add(baseballpic);
ContactList.add(tennispic);

