/*
The MIT License (MIT)

Copyright (c) 2013-2014 Zimny Lech

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies off
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// DESCRIPTION:			CyTube Plus - JavaScript and CSS library for CyTube channels enhancements
// CURRENT VERSION:		4.5
// DATE OF MODIFICATION:	2014-08-29
// PROJECT URL:			https://github.com/zimny-lech/CyTube-Plus

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INSTALLATION NOTES:

// 0. Choose simple or custom installation (simple one has ready-to-use library with limited functionality).
// SIMPLE INSTALLATION: use 'https://dl.dropboxusercontent.com/s/2uks4pif8mx2qab/main-ready.js' as default URL
//   go to -> 3.
// CUSTOM INSTALLATION: go to -> 1.

// 1. Configure this library according to your wishes (see configuration sections below).
// 2. Save customized library to your file hosting (e.g. Dropbox) or to your own server.
// WARNING! You must be able to access .js file directly (browser's URL must contain .js extension, not .php etc.).
// WARNING FOR DROPBOX USERS! Always use 'dl.dropboxusercontent.com' URL instead of 'www.dropbox.com' URL.

// 3. Enter your JS file location into 'External Javascript' field in 'Channel Settings' modal window.
// 4. Enter library CSS file location into 'External CSS' field in 'Channel Settings' modal window.
// NOTE: use default 'https://dl.dropboxusercontent.com/s/180y5d6mvlu8kd8/main.css' URL,
//   or copy it to your own location.
// 5. Congratulations,  your have just installed CyTube Plus!

// Need detailed options explanations? Go to https://github.com/zimny-lech/CyTube-Plus/wiki/FAQ
// Problems? Something doesn't work? Go to https://github.com/zimny-lech/CyTube-Plus/wiki/Troubleshooting

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONFIGURE BELOW BEFORE INSTALLING IF YOU WANT TO CUSTOMIZE THIS LIBRARY

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

// CONFIGURATION NOTES:

// In this section you can immediately enable and disable each option (set '1' to enable, '0' to disable)
// Every option marked as [&] requires additional configuration (see other sections below)
// WARNING! apostrophe sign (') in all text/html values must be prepend with "\" sign (e.g. "don\'t")

// FILTERS INSTALLATION: open 'Channel Settings' modal window, go to 'Edit' -> 'Chat Filters',
//   click 'Prepare fonts filters' button, and import

// If you need more explanations, go to https://github.com/zimny-lech/CyTube-Plus/wiki/FAQ

UI_DefaultSynchtube = 0;	// default old Synchtube layout (player and playlist on the left)
UI_Favicon = 0;			// [&] channel favicon
UI_MiniLogo = 0;		// [&] small channel logo/avatar in the top navbar
UI_ChannelName = 0;		// [&] channel custom brand name
UI_HeaderDropMenu = 0;		// [&] additional header dropdown menu
UI_RemoveLayoutMenu = 0;	// removing 'Layout' menu from the header
UI_MOTDAutoLogo = 0;		// [&] big channel logo inserted into MOTD
UI_MOTDTabs = 0;		// [&] switchable MOTD tabs application for homepage-like channel header
UI_MOTDDelete = 0;		// deleting previous MOTD after accepting/loading script
UI_RulesBtn = 0;		// [&] button displaying channel rules
UI_AttentionBar = 0;		// [&] imageboard-style attention bar (requires external application)
UI_ChannelAnnouncement = 0;	// [&] additional custom channel announcement
UI_FullTitleBar = 0;		// full-width video title bar
UI_ProgressBar = 0;		// YouTube/Dailymotion progress bar
				// [ REQUIRE: UI_FullTitleBar enabled ]
UI_TitleIcon = 0;		// [&] full-width title bar icon
				// [ REQUIRE: UI_FullTitleBar enabled ]
UI_TitleBarDescription = 0;	// [&] custom title bar description (default "Currently Playing:")
UI_JoinText = 0;		// [&] chat message after user joining
UI_LeaveText = 0;		// [&] chat message after user leaving
UI_UserCommands = 0;		// [&] additional commands in the chat window
UI_UserMarks = 0;		// [&] special signs/avatars before every message for defined users
UI_Squavatars = 0;		// automatic squavatars (2-colored square avatars) before every message
				// [ REQUIRE: UI_UserMarks enabled ]
UI_UsernameMark = 1;		// [&] custom mark after username (default ":")
UI_MessagesSuffix = 0;		// [&] text added to random chat messages
UI_CustomPingSound = 1;		// [&] custom sound for chat notifications
UI_SoundFilters = 0;		// [&] chat sounds played after sending certain words
UI_ChatSpeak = 0;		// text speaking after '!say' and '!mow' commands (english and polish)
UI_IndependentEmotes = 0;	// [&] additional settings-independent emotes
UI_IndependentFilters = 0;	// [&] additional settings-independent filters
UI_FontsBtn = 0;		// button displaying box with clickable chat fonts
				// [ REQUIRE: INSTALLATION (see above) ]
UI_UnicodeChars = 1;		// [&] additional buttons in the fonts panel with unicode characters
				// [ REQUIRE: UI_FontsBtn enabled ]
UI_EmotesBtn = 1;		// button displaying box with clickable chat emotes
UI_GroupEmotes = 1;		// [&] emotes panel pagination, display limited number of emotes at one time
				// [ REQUIRE: UI_EmotesBtn enabled ]
UI_CommandsBtn = 0;		// button displaying modal window with chat commands help
UI_ModPanel = 0;		// [&] panel with messages and help for moderators
UI_CustomCaptions = 0;		// [&] custom captions for add, refresh, voteskip buttons, and welcome text
UI_PlayerOptions = 0;		// [&] additional player options
UI_TransformationBtns = 0;	// player transformation buttons
UI_ChannelDatabase = 0;		// [&] box with embed additional media database
UI_ChannelGalleries = 0;	// [&] box with embed galleries
UI_DisplayModeSel = 1;		// selector with player display modes
UI_ChannelTheme = 0;		// [&] additional default channel theme
UI_EmbeddingMedia = 1;		// [&] possibility to embedding (displaying) images and .webm videos on the chat
UI_MediaControls = 1;		// embedded video preloaded controls
				// [ REQUIRE: UI_EmbeddingMedia enabled ]
UI_QuickCommandsBtns = 1;	// buttons with '/clear' and '/afk' functions
UI_VolumeBtns = 0;		// additional volume buttons for YouTube player
UI_EmptyCornerBackground = 0;	// [&] random background image for empty playlist row corner
UI_ExtendedGetURLs = 0;		// extended 'Get URLs' function
UI_DefaultNonTemp = 0;		// default unchecking "Add as temporary" checkbox after loading for registered users
UI_CustomFooter = 0;		// [&] custom channel footer
UI_CustomRightFooter = 0;	// [&] right-sided footer box
UI_UserStatistics = 0;		// displaying in the footer user visits number and current online time
UI_ExternalScript = 0;		// [&] additional external script file
UI_ChannelCache = 0;		// caching script emotes, additional media database and default gallery

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

// NOTES:
// a) values for 'MOTDAutoLogo_Mode': 1 = first logo; 2 = random logo; 3 = logo rotation; 7 = weekdays logos
// b) in 'SoundFilters_Array' use .ogg or .wav files, some browsers has problems with embedded .mp3
// c) in 'ModPanel_Array' item leave empty first (username) field to make a message to all moderators
// d) in 'EmbeddingMedia_Images' and 'EmbeddingMedia_Videos' you can define acceptable file extensions
//    use CSS syntax: e.g. 'a[href$=""]' defines acceptable end of an URL (file extension)
//    you can also define URL fragments: 'a[href*=""]', or add excluding clause: '.not(\'a[href*=""]\'), etc.

	/* -- single variables -- */

GroupEmotes_Number = 100;

	/* -- arrays -- */

	/* -- HTML/CSS -- */

EmbeddingMedia_Images = 'a[href$=".jpg"], a[href$=".jpg:large"], a[href$=".jpeg"], a[href$=".JPG"], a[href$=".png"], a[href$=".tiff"], a[href$=".gif"]';

EmbeddingMedia_Videos = 'a[href$=".webm"]';


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

/* ----- Initial channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reload script after unexpected re-connection or script URL change

var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';

/* ----- getting and setting channel options ----- */

if (UI_DefaultSynchtube=="1") {
	defplayer="left"; defuserlist="right"; defqueue="left";
} else {
	defplayer="right"; defuserlist="left"; defqueue="right";
}

var DEFTHEME = (UI_ChannelTheme=="1" && ChannelThemeURL!="") ? ChannelThemeURL : "/css/themes/slate.css";

var USERCONFIG = {
	"player":getOrDefault(CHANNEL.name+"_player", defplayer),
	"userlist":getOrDefault(CHANNEL.name+"_userlist", defuserlist),
	"queue":getOrDefault(CHANNEL.name+"_queue", defqueue),
	"qsize":getOrDefault(CHANNEL.name+"_qsize", "wide"),
	"main":getOrDefault(CHANNEL.name+"_main", "top"),
	"motd":getOrDefault(CHANNEL.name+"_motd", "top"),
	"logo":getOrDefault(CHANNEL.name+"_logo", "no"),
	"logourl":getOrDefault(CHANNEL.name+"_logourl", ""),
	"logoht":getOrDefault(CHANNEL.name+"_logoht", 250),
	"header":getOrDefault(CHANNEL.name+"_header", "detached"),
	"css":getOrDefault(CHANNEL.name+"_css", "no"),
	"csscode":getOrDefault(CHANNEL.name+"_csscode", ""),
	"modhash":getOrDefault(CHANNEL.name+"_modhash", ""),
}
var USERTHEME = getOrDefault(CHANNEL.name+"_theme", DEFTHEME);
var FLUID = getOrDefault(CHANNEL.name+"_fluid", false);
var LAYOUTBOX = getOrDefault(CHANNEL.name+"_layoutbox", true);
var SOUNDSLVL = getOrDefault(CHANNEL.name+"_soundslvl", 3);
var EMBEDIMG = getOrDefault(CHANNEL.name+"_embedimg", true);
var EMBEDVID = getOrDefault(CHANNEL.name+"_embedvid", true);
var AUTOVID = getOrDefault(CHANNEL.name+"_autovid", true);
var USERVISITS = getOrDefault(CHANNEL.name+"_visits", 0);

var DEFDESCR = true;		// standard item description in the player header
var NOPLAYER = false;		// removed player in silent mode
var CHATFUNC = false;		// admin chat functions panel visibility
var COMMAND = false;		// aditional command occuring in the chat message
var VOICES = false;		// chat sounds not disabled by user
var EMOTES = false;		// emotes have been loaded into emotes panel
var CLEARING = false;		// auto clearing messages window
var ANTIAFK = false;		// enabled anti-AFK function
var SOUNDSPANEL = false;	// chat sounds panel visibility
var PINNED = false;		// playlist pinned to player
var FULLPL = false;		// expanded playlist view
var MINIMIZED = false;		// minimized layout
var CHANDB = false;		// channel database has been loaded
var GALLERY = false;		// channel galleries have been loaded
var GALLVIS = false;		// channel galleries have been viewed by user
var ALTERCHATFORMAT = false;	// using altered 'formatChatMessage' built-in function

var PREVTIME = 0;		// previous read of a current item time for the progress bar
var LASTADD = 0;		// timestamp of the last adding random item from the channel database
var USERONLINE = 0;		// user minutes online
var BGCHANGE = 0;		// number of background changes for the easter egg function

var MUTEDVOICES = new Array();		// list of users with muted chat sounds by user
var CHATSTAT = {"n":0, "l":0, "m":[]};	// array with user messages statistics
var ADDEDLINKS = new Array();		// array of links added from channel database by user

var HASH = '';			// simple hash for comparing if the new messages have appeared in the mod panel

WEBKIT="webkitRequestAnimationFrame" in window;
SOUNDSVALUES=new Array(0, 0.1, 0.2, 0.4, 0.7, 1);
SPEAKLINK='http://webanywhere.cs.washington.edu/cgi-bin/espeak/getsound.pl';
IMBA=new Audio("https://dl.dropboxusercontent.com/s/xdnpynq643ziq9o/inba.ogg");
CHATSOUND.volume=0.6;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Global functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// toggle elements visibility

function toggleDiv(div) {
	$(div).css('display')=="none" ? $(div).show() : $(div).hide();
}

// refresh player

function refreshPlayer() {
	PLAYER.type="";
	PLAYER.id="";
	socket.emit("playerReady");
}

// add link to playlist

function addToPlaylist(link, stand) {
	parsed=parseMediaLink(link);
	parsed["id"]!=null ? socket.emit("queue", {id:parsed["id"], pos:stand, type:parsed["type"]}) : '';
}

// get text content from inner HTML

function getText(html) {
	div=document.createElement("div");
	div.innerHTML=html;
	return div.textContent||div.innerText;
}

// create modal window

function createModal(title) {
	hidePlayer();
	outer = $('<div class="modal fade" />').appendTo($("body"));
	modal = $('<div class="modal-dialog" />').appendTo(outer);
	modal = $('<div class="modal-content" />').appendTo(modal);
	head = $('<div class="modal-header" />').appendTo(modal);
	$('<button class="close" data-dismiss="modal" aria-hidden="true" />').html('&times;').appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body = $('<div class="modal-body" />').appendTo(modal);
	footer = $('<div class="modal-footer" />').appendTo(modal);
	outer.on("hidden", function() {
		outer.remove();
		unhidePlayer();
	});
	outer.modal();
}

// toggle "/clear" button depends on rank

function toggleClearBtn() {
	hasPermission("chatclear") ? clearbtn.show() : 'clearbtn.hide()';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- UI events functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// display list of emotes

function showEmotes() {
	if (typeof GroupEmotes_Number!=="number" || GroupEmotes_Number<1) {
		GroupEmotes_Number=100;
	}
	len=CHANNEL.emotes.length;
	if (len<1) {
		emotespanel.addClass('row');
		makeAlert("No emotes available", "Ask channel administrator.").appendTo(emotespanel);
	} else if (UI_GroupEmotes!="1" || len<=GroupEmotes_Number) {
		for (i in CHANNEL.emotes) {
			$('<img onclick="insertText(\''+CHANNEL.emotes[i].name+' \')" />')
		 	 .attr({'src':CHANNEL.emotes[i].image, 'title':CHANNEL.emotes[i].name})
		  	.appendTo(emotespanel);
		}
	} else {
		var arr = new Array();
		stop=GroupEmotes_Number-1;
		gr=Math.ceil(CHANNEL.emotes.length/GroupEmotes_Number);
		html='';

		for (i=0; i<len; i++) {
			html += '<img src="'+CHANNEL.emotes[i].image+'" '
			  + 'onclick="insertText(\''+CHANNEL.emotes[i].name+' \')" />';
			if (i%GroupEmotes_Number==stop) {
				arr.push(html);
				html='';
			}
		}
		len%GroupEmotes_Number!=0 ? arr.push(html) : '';

		for (i=0; i<gr; i++) {
			div = $('<div id="emotes-'+i+'" class="groupemotes" style="display:none" />')
			  .html(arr[i])
			  .appendTo(emotespanel);
		}
		arr='';

		emotesbtnwrap = $('<div id="emotesbtnwrap" />').appendTo(emotespanel);
		emotesbtngroup = $('<div id="emotescontrols" class="btn-group">').appendTo(emotesbtnwrap);

		for (i=0; i<gr; i++) {
			btn = $('<button class="btn btn-sm btn-default emotesbtn" group="'+i+'">'+(i+1)+'</button>')
			  .appendTo(emotesbtngroup)
			  .on("click", function() {
				$(".emotesbtn").removeClass('active');
				$(this).addClass('active');
				$(".groupemotes").hide();
				nr=$(this).attr('group');
				$("#emotes-"+nr).show();
		  	});
		}
		$("#emotes-0").show();
		$("#emotescontrols button:nth-child(1)").addClass('active');
	}
	EMOTES=true;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- User Interface ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// adding chat emotes button

if (UI_EmotesBtn=="1") {
	emotesbtn = $('<button id="emotes-btn" class="btn btn-sm btn-default" title="Display emotes panel" />')
	  .html('<i class="glyphicon glyphicon-picture"></i>')
	  .appendTo(chatcontrols)
	  .on("click", function() {
		toggleDiv(emotespanel);
		(UI_ChannelCache!="1" && !EMOTES) ? showEmotes() : '';
	  });
}

// creating fonts and emotes main row

if (UI_FontsBtn=="1" || UI_EmotesBtn=="1") {
	chatpanel = $('<div id="chatpanel" class="row" />').insertBefore("#playlistrow");
}

// adding fonts panel

if (UI_FontsBtn=="1") {
	fontspanel = $('<div id="fontspanel" style="display:none" />').appendTo(chatpanel);
	fontsbtnwrap = $('<div id="fontsbtnwrap" />').appendTo(fontspanel);

	FontsArray = [
		['background:white', 'white', '■'],
		['background:gold', 'yellow', '■'],
		['background:orange', 'orange', '■'],
		['background:#FFBBFF', 'pink', '■'],
		['background:red', 'red', '■'],
		['background:limegreen', 'lime', '■'],
		['background:green', 'green', '■'],
		['background:aqua', 'aqua', '■'],
		['background:blue', 'blue', '■'],
		['background:#660099', 'violet', '■'],
		['background:#660000', 'brown', '■'],
		['background:silver', 'silver', '■'],
		['background:black', 'black', '■'],
		['background:black; color:white', 'bw', 'a'],
		['background:white; font-weight:bold; color:black', 'b', 'B'],
		['background:white; font-style:italic; color:black', 'i', 'I'],
		['background:white; text-decoration:underline; color:black', 'u', 'U'],
		['background:white; text-decoration:line-through; color:black', 's', 's'],
		['background:gold; color:red', 'd', 'D'],
		['background:black; color:gold; font-family:impact, sans-serif', 'f', 'F'],
		['background:black; color:white', 'sp', 'sp'],
		['background:white; color:black; border:solid 2px red', '\\/', '\[\/\]'],
	];

	for (i in FontsArray) {
		$('<button id="cbtn'+i+'" onclick="insertText(\'['+FontsArray[i][1]+']\')" />')
	  	  .addClass('btn btn-default').attr('style', FontsArray[i][0]).text(FontsArray[i][2])
	 	  .appendTo(fontsbtnwrap);
		  i%13==12 ? fontsbtnwrap.append('<br />') : false;
	}

	if (UI_UnicodeChars=="1" && UnicodeChars_Array.length>0) {
		unibtnwrap = $('<div id="unibtnwrap" />').appendTo(fontspanel);
		for (i in UnicodeChars_Array) {
			btn=$('<button onclick="insertText(\''+UnicodeChars_Array[i]+'\')" />')
			  .addClass('btn btn-default').text(UnicodeChars_Array[i])
			  .appendTo(unibtnwrap);
		}
	}
}

// adding emotes panel

if (UI_EmotesBtn=="1") {
	emotespanel = $('<div id="emotespanel" style="display:none" />').appendTo(chatpanel);
	UI_ChannelCache=="1" ? showEmotes() : '';
}

// adding embedding options

if (UI_EmbeddingMedia=="1" && (EmbeddingMedia_Images!="" || EmbeddingMedia_Videos!="")) {
	embedform = $('<div id="embedform" class="form-group" />').appendTo(configwell);
	$('<div class="col-lg-5 col-md-5 conf-cap">Embeds <span id="embed-help">[?]</span></div>')
	  .appendTo(embedform);
	embedwrap = $('<div id="embedwrap" class="col-lg-7 col-md-7" />').appendTo(embedform);

	$("#embed-help").on("click", function() {
		txt = 'This option lets you see images or videos directly on the chat, instead of links.\n'
		  + 'Click on image or double click on video to open in the new tab.\n'
		  + 'All videos are muted by default, if autoplay - click to unmute, else click to play.\n\n'
		  + 'This channel supports following types of links (specified as CSS codes):\n'
		  + '■ Images - ';
		  (EmbeddingMedia_Images!="") ? txt+=EmbeddingMedia_Images : 'none';
		txt += '\n■ Videos - ';
		  (EmbeddingMedia_Videos!="") ? txt+=EmbeddingMedia_Videos : 'none';
		alert(txt);
	});

	if (EmbeddingMedia_Images!="") {
		embedimg = $('<label class="checkbox-inline" />').appendTo(embedwrap);
		cbox = $('<input type="checkbox" id="embed-img" checked>')
		  .appendTo(embedimg)
		  .on("click", function() {
			EMBEDIMG = !EMBEDIMG;
				setOpt(CHANNEL.name+"_embedimg", EMBEDIMG);
		  });
		cbox.after(' img');
		!EMBEDIMG ? cbox.removeAttr('checked') : '';
	}

	if (EmbeddingMedia_Videos!="") {
		embedvid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
		cbox = $('<input type="checkbox" id="embed-webm" checked>')
		  .appendTo(embedvid)
		  .on("click", function() {
			EMBEDVID = !EMBEDVID;
			setOpt(CHANNEL.name+"_embedvid", EMBEDVID);
			EMBEDVID ? autovid.show() : autovid.hide();
		  });
		cbox.after(' video');
		!EMBEDVID ? cbox.removeAttr('checked') : '';

		autovid = $('<label class="checkbox-inline" />').appendTo(embedwrap);
		cbox = $('<input type="checkbox" id="auto-webm" checked>')
		  .appendTo(autovid)
		  .on("click", function() {
			AUTOVID = !AUTOVID;
			setOpt(CHANNEL.name+"_autovid", AUTOVID);
	 	 });
		cbox.after(' autoplay');
		!AUTOVID ? cbox.removeAttr('checked') : '';
		!EMBEDVID ? autovid.hide() : '';
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Chat and window extensions and events ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(UI_EmbeddingMedia=="1" && (EmbeddingMedia_Images!="" || EmbeddingMedia_Videos!="")) ? ALTERCHATFORMAT=true : '';
(UI_UserMarks=="1" || UI_IndependentEmotes=="1" || UI_IndependentFilters=="1") ? ALTERCHATFORMAT=true : '';

// Google Analytics code

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53755606-1', 'auto');
ga('send', 'pageview');

// adding external script file

if (UI_ExternalScript=="1" && ExternalScript_URL!="") {
	$.getScript(ExternalScript_URL);
}

/* ----- END OF LIBRARY ----- */
