let urlString = window.location.search;
let urlParams = new URLSearchParams(urlString);
let pageType = urlParams.get('page_type');
if (!localStorage.getItem("page_type")) {
     localStorage.setItem("page_type", pageType);
} else if (pageType && (pageType !== localStorage.getItem("page_type"))) {
     localStorage.setItem("page_type", pageType);
}
let json = "";
if (pageType=="banking"){
     json = {
    "companyName": "FinCX",
    "navBarItems": ["Products","Latest News", "Resources"],
    "dropdownOptns": ["Mortgages", "Savings", "Credit Cards"],
    "alternatingImgStyle": [["",""], ["style='float: right'", "style='left: 0;'"], ["",""]],
    "coverImg": "hometopimg.jpg",
    "imgTitle": "Personalized Banking",
    "images": ["mortgage.jpg", "savings.jpg", "creditcard.jpg"],
    "imgTextTitle": "Student Accounts",
    "imgText": "FinCX student accounts provide the most benefits for you as you start in college",
    "subtext": [{
        "title": "Mortgages",
        "text1": "Mortgages designed for your lifestyle",
        "text2": "Our range of mortgages offer choice and flexibility no matter where you are on your journey"
    },
    {
        "title": "Savings",
        "text1": "Savings products built around you",
        "text2": "FinCX offers the most competetive rates with a host of added benefits."
    },
    {
        "title": "Credit Cards",
        "text1": "Personal and Commercial Credit Cards",
        "text2": "Credit card products designed to meet the needs of both personal and commercial customers."
    }]
};
} else if (pageType=="insurance") {
    json = {
    "companyName": "InsCX",
    "navBarItems": ["Products","Latest News", "Resources"],
    "dropdownOptns": ["Student Insurance", "Standard Insurance", "Financing"],
    "alternatingImgStyle": [["",""], ["style='float: right'", "style='left: 0;'"], ["",""]],
    "coverImg": "cover.jpg",
    "imgTitle": "Personalized Insurance",
    "images": ["yellowporsche.jpg", "greenporsche.jpg", "redporsche.jpg"],
    "imgTextTitle": "Student Insurance",
    "imgText": "InsCX student insurance provide the most benefits for you as you start in college",
    "subtext": [{
        "title": "Yellow Porsche 992 GT3 RS",
        "text1": "Engine: 4.1L Turbo",
        "text2": "Colour: Yellow"
    },
    {
        "title": "Green Porsche 992 GT3 RS",
        "text1": "Engine: 3.9L Standard",
        "text2": "Colour: Green"
    },
    {
        "title": "Red Porsche 992 GT3 RS",
        "text1": "Engine: 4.8L Twin Turbo",
        "text2": "Colour: Red"
    }]  
};
}
let productsjson = {
    "products": [["Education Saver", "students.jpg"],["SimplySavings","family.jpg"],["Junior Saver", "backpack.jpg"]],
    "description": ["Our Education Saver accounts are designed for families as they get ready for college expenses. Suitable for both regular and lump deposits","Our SimplySavings is designed to meet your regular savings needs. Save as much as you want monthly and adjust according to your needs.","Our Junior Saver account is designed for those wishing to start their banking journey. Save according to your needs."],
    "features": [["Save as much as you wish","Direct Debit Option","Flexible Access"],["Save Monthly", "Adjust amount regularly","Direct Debit Options"],["Save as frequently as you wish", "Mobile access","Instant access to funds"]],
    "benefits": [["Attractive interest rates", "Online access"],["Instant access to funds", "Attractive Interest Rates"],["Attractive Interest rates", "Discounts from a range of stores"]],
    "dividerdisplay": ["block","block","none"],
    "dividertext": [["Cybersecurity Awareness", "Our cybersecurity ensures the safety of your everyday banking so you can be confident managing your accounts and payments."],["Register for Online Banking","Get active in minutes."],["",""]],
    "dividerlink": ["Visit Cybersecurity Zone","Register Now",""],
    "findOutMoreText": ["With the Education Saver Account from FinCX, you set your monthly savings amount and we do the rest. You choose the amount you want to save each month (from €1 to €1,000).  Earn 1.00% Gross / AER (variable) interest rate on balances up to €50,000.99. Earn 0.01% Gross / AER (variable) interest rate on the entire balance (including interest) if your balance exceeds €50,000.99.<br><br>You’ll receive your interest, minus Deposit Interest Retention Tax (DIRT), on the first working day after 20th November each year. A variable rate means that your interest may change from time to time. Annual Equivalent Rate (AER) illustrates what the interest would be if interest was paid and compounded each year. Our AER calculation assumes that the account is held for a year and that the interest rate remains constant.","Apply online in minutes and start your savings habit. Save monthly by Direct Debit from large to small amounts. Minimum €5 – Maximum €2,500. Get instant access to your money in any FinCX branch. Available to 16 years of age and over. Can only be funded from one personal current account. Get our best fixed savings rate 2.00% AER (Annual Equivalent Rate), for 12 months, (Interest is subject to Deposit Interest Retention Tax (DIRT) at the prevailing rate). Receive a €100 refund on your home or car insurance policy purchased or renewed with FinCX.","If you are a Student Saver between the ages of 12 – 17 inclusive, you can open a Junior Saver Account. If you are under 16 years old, we will need to make sure that your Parent/Guardian is happy for you to start saving with us. This account is only available as a sole account in your name. You can save as little or as much as you like, there is no minimum or maximum limit. You can save an amount that suits you monthly or just top up your balance as you choose. You have the flexibility to withdraw any amount, any time.<br><br> To reward your savings, we will give you a great interest rate on balances up to €1,000. All amounts above €1,000 will earn a lower rate of interest. Interest is variable, calculated daily and paid into your account in April and October. When you reach the age of 19, your account will automatically change to a suitable demand deposit account. We will give two months notice before this change is made We don't charge maintenance or transaction fees but there may be other service charges. For details see \"A Guide to Fees and Charges for Personal Accounts\"."],

}

var sessionId = sessionStorage.getItem("sessionId");
if (sessionId == null) {
    sessionId = Math.floor(Math.random() * 100000);
    sessionStorage.setItem("sessionId", sessionId);
}
/* Load the Analytics
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="SDfgj9GHaQwyoSSDOzvT8G1itoJSbd74";;analytics.SNIPPET_VERSION="4.16.1";
    analytics.load("SDfgj9GHaQwyoSSDOzvT8G1itoJSbd74");
    analytics.page({
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null")
    });
}}();
*/
function checkLogin() {
    var x = localStorage.getItem("usrnm", "null");
    if (x == null) {
        document.getElementById("loginbtn").innerHTML = "Login";
    } else {
        document.getElementById("loginpfp").style.display = "block";
    }
}

function findOutMore(product, savingsIndex) {
    // Unhide the find out more section
    document.getElementById("findOutMore" + savingsIndex).style.display = 'block';
    x = document.getElementById("findOutMore" + savingsIndex);
    x.scrollIntoView({ behavior: "smooth", block: "end" });

    analytics.track("Savings", {
        sessionId: sessionId,
        username: localStorage.getItem("usrnm", "null"),
        channel: "Web",
        product: product,
    });
}

function login(email) {
    localStorage.setItem("id", Math.floor(Math.random() * 101));
    if (email=="alex@joulica.io"){
        localStorage.setItem("name", "Alex")
    } else if (email=="tony@joulica.io") {
        localStorage.setItem("name", "Tony")
    } else if (email=="john@joulica.io") {
        localStorage.setItem("name", "John")
    } else if (email=="joe@joulica.io") {
        localStorage.setItem("name", "Joe")
    } else if (email=="kimaya@joulica.io") {
        localStorage.setItem("name", "Kimaya")
    } else if (email=="declan@joulica.io") {
        localStorage.setItem("name", "Declan")
    }
    localStorage.setItem("usrnm", email);
    document.getElementById("loginbtn").innerHTML = "Logged In: " + localStorage.getItem("usrnm");

    window.location = window.location;
}

function productsDropdown() {
    document.getElementById("productsDropdown").classList.toggle("show");
}

function loginDropdown() {
    if (localStorage.getItem("usrnm")) {
        // Logout
        localStorage.removeItem("usrnm");
        window.location = window.location;
    } else {
        // Show Login
        console.log("Show Login");
        document.getElementById("loginDropdown").classList.toggle("show");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function loadDemo() {
    let navigationBar = [`
    <div class="navbar">
        <a style="width: 20%; font-weight: bolder; font-size: 50px;" onclick="window.location.href = 'https://main.dogpsqsj8hdt0.amplifyapp.com/?page_type=${localStorage.getItem("page_type")}';">${json.companyName}</a>
        <div class="dropdown">
            <button style="font-weight: bolder;" class="dropbtn" onclick="productsDropdown()">${json.navBarItems[0]}</button>
            <div class="dropdown-content" id="productsDropdown">
                <a style="padding: 20px 32px 20px 32px">${json.dropdownOptns[0]}</a>
                <a style="padding: 20px 32px 20px 32px" onclick="window.location.href = 'savings.html?page_type=${localStorage.getItem("page_type")}';">${json.dropdownOptns[1]}</a>
                <a style="padding: 20px 32px 20px 32px">${json.dropdownOptns[2]}</a>
            </div>
        </div> 
        
        <a style="width: 20%; padding: 41px 0px 40px 0px;">${json.navBarItems[1]}</a>
        <a style="width: 20%; padding: 41px 0px 40px 0px;">${json.navBarItems[2]}</a>
        <div onload="checkLogin()" class="dropdown">
            <button style="font-weight: bolder;" id="loginbtn" class="dropbtn" onclick="loginDropdown()">Login</button>
            <div class="dropdown-content" id="loginDropdown"></div>
        </div>
    </div>`
    ];
    document.getElementsByTagName("body")[0].innerHTML = navigationBar + document.getElementsByTagName("body")[0].innerHTML;

    let users = [
        ["Tony", "tony@joulica.io"],
        ["Alex", "alex@joulica.io"],
        ["John", "john@joulica.io"],
        ["Joe", "joe@joulica.io"],
        ["Declan", "declan@joulica.io"],
        ["Kimaya", "kimaya@joulica.io"]
    ];

    // Check if user is logged in
    if (!localStorage.getItem("usrnm")) {
        // Add users to login dropdown
        for (let i = 0; i < users.length; i++) {
            document.getElementById("loginDropdown").innerHTML += `<a style="padding: 20px 32px 20px 32px" onclick="login('${users[i][1]}')">${users[i][0]}</a>`;
        }
    } else {
        document.getElementById("loginbtn").innerHTML = "Logout of " + localStorage.getItem("usrnm");
    }
    (function(w, d, x, id){
        s=d.createElement('script');
        s.src='https://dg9yx063wiiht.cloudfront.net/amazon-connect-chat-interface-client.js';
        s.async=1;
        s.id=id;
        d.getElementsByTagName('head')[0].appendChild(s);
        w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
    })(window, document, 'amazon_connect', 'e365379e-7723-4c5c-9b9b-2109e7c8c9ac');
    amazon_connect('styles', { openChat: { color: '#ffffff', backgroundColor: '#0080ff'}, closeChat: { color: '#ffffff', backgroundColor: '#0080ff'} });
    amazon_connect('snippetId', 'QVFJREFIamdsRVl4aTRZOWtaSkdZSFNPQ0JZNE53UGdNdWFZUGJMdGZFWEdLazhGTndHWlhrMVpWTDRaVVpBdWRzTHdUby9sQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNVmhXcFpmeWtiYWErUStrc0FnRVFnQ3ZsaTdhSU85THZ2UFNpWE8rbStBZzlOMGJnR1A3NEtoclNiTllPQzNUZ1BkNDJZSnNRYlI1S2xsaGI6OjlwNEQwNkM1eXMzRER3NmlrSkJPck1IQmxucFVvTWJUeGNiSStwUW45MThkUUZiSGRnaEFZVFZoSXNnenZHbmFPOW43Q3ZPSDNmZWtEa0Q0cTZwcVRPUWZTMWJGci9RSEUwRWw5WTEvWE54K05ndEw5OVRWUHBmNUhkWU9malk4ZGp3dkhieHdXME5hVEpMSk5Za3BOdnR4MG9MZFZ6ST0=');
    amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown' ]);
    amazon_connect("customerDisplayName", function(callback) {
        const displayName = localStorage.getItem("name", "null");
        callback(displayName);
      });
    let utcStr = Math.floor(Date.now() / 1000);
    let exp = utcStr + 600;
    let payload = {
        "sub": "e365379e-7723-4c5c-9b9b-2109e7c8c9ac",
        "iat": utcStr,
        "exp": exp,
        "attributes": {"name": name, "email": localStorage.getItem("usrnm", "null"),},
    };
    let header = {
        "typ": "JWT",
        "alg": "HS256",
    };
    let token = KJUR.jws.JWS.sign("HS256", JSON.stringify(header), JSON.stringify(payload), 'DR/pwpuOtHT+z0D5UQe0KsJ8JDStihUHHaDgeS4Yi9U=' );
    console.log(token);
    amazon_connect('authenticate', function(callback) {
        callback(token)
    });
    document.getElementById("webTitle").innerHTML = json.companyName;
}

function addSavingsToProductPage() {
    for (let i = 0; i < productsjson.products.length; i++) {
        let productsHTML = `
        <div class="info">
            <div style="width: auto" class="inner">
                    <h1 style="padding: 10px 0px 30px 40px; margin: 0px; text-align: left; font-size: 22px;">${productsjson.products[i][0]}</h1>
                    <img src="${productsjson.products[i][1]}" class="image">             
            </div>
            <div style="position: relative; padding: 6px 6px 6px 18px; font-size 15px;"class="inner">
                <br><br><br>
                <p style="width: 100%;">${productsjson.description[i]}</p>
                <br />
                <div style="float: left;">
                <h2>Features:</h2>
                <ul>
                <li>${productsjson.features[i][0]}</li><br>
                <li>${productsjson.features[i][1]}</li><br>
                <li>${productsjson.features[i][2]}</li><br>
                </ul>
                </div>
                <div style="float: left; position: relative; left: 10%">
                <h2>Benefits</h2>
                <ul>
                <li>${productsjson.benefits[i][0]}</li><br>
                <li>${productsjson.benefits[i][1]}</li><br>
                </ul>
                </div>
                <div id="buttons">
                <center>
                    <button class="applyOnline">Apply Online</button>
                    <br /><br />
                    <button onclick="findOutMore('${productsjson.products[i][0]}', ${i})" class="findOutMore">Find Out More</button>
                    <br /><br /><br /><br />
                </center>
            </div>
            </div>
            <div style="margin: 0px 45px 0px 45px; padding: 10px 0 20px 0;" id="findOutMore${i}" hidden>
            <p style="font-size: 22px; line-height: 1.5">${productsjson.findOutMoreText[i]}</p>
            </div>
            <div style="display: ${productsjson.dividerdisplay[i]} "class="divider">
            <h1>${productsjson.dividertext[i][0]}</h1>
            <br>
            <p>${productsjson.dividertext[i][1]}</p>
            <a style="bottom: 44px; position: relative; right: 0; font-size: 20px; float: right; font-weight: bolder;">${productsjson.dividerlink[i]} <span>→</span></a>
            </div>
        </div>`;

        document.getElementsByTagName("body")[0].innerHTML += productsHTML;
    }
}
function addContainerstoHomePage() {
    for (let i = 0; i < 3; i++) {
        let homeHTML = `
        <div style="margin: -4px 0 0 0;" class="subcontainer">
        <img ${json.alternatingImgStyle[i][0]}class="subimage" src=${json.images[i]}>
        <div ${json.alternatingImgStyle[i][1]} class="subtext" style="color: black">
            <div style="position: relative; left: 5%; max-width: 90%;">
                <h1>${json.subtext[i].title}</h1>
                <p>${json.subtext[i].text1}</p>
                <p>${json.subtext[i].text2}</p>
                <br>
                <a class="getstarted">Get Started ></a>
            </div>
        </div>
        </div>`
        document.getElementsByTagName("body")[0].innerHTML += homeHTML;
    }
}
function loadSite() {
    let topHTML = 
    `<div id="container">
    <div class="title">
    <h1>${json.imgTitle}</h1>
    </div>
    <img style="width: 100%; height: 654px; object-fit: cover;"class="mainimg" src=${json.coverImg} alt="img1">
    <div style="background-color: rgba(15, 74, 168, 0.7)" class="text">
        <h1>${json.imgTextTitle}</h1>
        <p>${json.imgText}</p>
        <br><br>
        <button class="btn">Find Out More</button>
    </div>
    </div>`
    document.getElementsByTagName("body")[0].innerHTML += topHTML;
}
//configuring AWS SDK
let accessKeyId = null;
let secretAccessKey = null;
AWS.config.credentials = new AWS.Credentials(accessKeyId, secretAccessKey, null);
const chime = new AWS.Chime({region: 'eu-west-1'});
chime.endpoint = new
AWS.Endpoint('https://service.chime.aws.amazon.come/console');

//creating a meeting
const meeting = await chime.createMeeting({
    ClientRequestToken: clientRequestId,
    MediaRegion: mediaRegion,
    NotificationsConfiguration: {
        SqsQueueArn: sqsArn,
        SnsTopicArn: SnsTopicArn,
    }
}).promise();

//creating an attendee
const attendee = await chime.createAttendee({
    MeetingId: meeting.MeetingId,
    ExternalUserId: externalUserId,
}).promise();

//setting up the meeting session
const config = new MeetingSessionConfiguration(createMeetingResponse, createAttendeeResponse);
const logger = new ConsoleLogger('SDK', LogLevel.DEBUG);
const deviceController = new DefaultDeviceController(logger);
const meetingSession = new DefaultMeetingSession(config, logger, deviceController);
const audioVideo = meetingSession.audioVideo;

//registering for callbacks and starting audio-video
audioVideo.realtimeSubscribeToMuteAndUnmuteLocalAudio(handler);
audioVideo.realtimeSubscribeToVolumelndicator(attendeeld, callback);
audioVideo.addDeviceChangeObserver(this);
audioVideo.addObserver(this);
audioVideo.start();

