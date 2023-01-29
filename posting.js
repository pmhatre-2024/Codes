const postList = [];

class post{
  constructor(titulo, description, city, state, dater, picname , namey, phoneNumber){
    this.titulo = titulo;
    this.description = description;
    this.city = city;  
    this.state = state;
    this.dater = dater;
    this.picName = picname;
    this.namey = namey;
    this.phoneNumber = phoneNumber;  
    this.numInterested = 0;
  }
  
  
  getTitle(){
    return this.titulo;
  }
  getDesc(){
    return this.description;
  }
  getCity(){
    return this.city;
  }
  getState(){
    return this.state;
  }
  getDate(){
    return this.dater;
  }
  getPicName(){
    return this.picName;
  }
  getName(){
    return this.name;
  }
  getPhoneNumber(){
    return this.phoneNumber;
  }
  getNumInterested(){
    return this.numInterested;
  }
  addInterested(){
    numInterested  += 1;
    return getNumInterested();
  }
}


function submitPost() {
  var thefile = document.getElementById('picture');
  let tfv = thefile.value;
  var tfvs = tfv.substring(12);
  tfvs.toString();
  let tt = document.getElementById('titulo');
  tt = new post(document.getElementById('titulo').value, document.getElementById('jname').value, document.getElementById('city').value, document.getElementById('state').value, document.getElementById('dater').value, tfvs, document.getElementById('orgname').value, document.getElementById('phonenum').value);
  postList.push(tt);  
}



function webSetup(){
  //initialize array and fill example values
  var post1 = new post("Book Reading For Kids", "Reading Books For those that need out help ", "Livonia", "MI", 202311081600, "book_reading.jpg", "National Honor Society", "3503207953");
  var post2 = new post("Hand out Candy for Webster Kids", "Hand out candy to kids coming into the event", "Livonia", "MI", 202301181700, "Candy_handout.jpg", "Science National Honor Society", "4805252029");
  var post3 = new post("Handing out Grocery Bags", "Help those in need with their groceries", "Livonia", "MI", 202312141430, "grocery_vol.jpeg", "Mu Alpha Theta", "7049094087");
  var post4 = new post("Learning Jobs around us", "Leading A Math Lesson for Middle Schoolers ", "Livonia", "MI", 202311141530, "house_working.jpg", "Mu Alpha Theta", "7049094087");
  var post5 = new post("Help tutor other students", "Help the teacher assist other students during math help room", "Livonia", "MI", 202304161430, "students_helping_teachers.jpg", "National Honor Society", "3503207953");
  var post6 = new post("Homework House Tutors", "Helping Those Who Need Help With Homework or Studying After School ", "Livonia", "MI", 202301311430, "teen-girl-tutoring-a-student.jpg", "Churchill Requests", "8354023360");
  var post7 = new post("Help run a kids party", "Helping Run a kids party", "Livonia", "MI", 202301071530, "volunteer_orlando.jpg", "Churchill Requests", "8354023360");
  var post8 = new post("Trash Pickup", "Help clean the litter from around us ", "Livonia", "MI", 202312091700, "trash_pickup_v.jpg", "National Honor Society", "3503207953");
  var post9 = new post("Trash Pickup Day 2", "Help clean the litter from around us", "Livonia", "MI", 202303110900, "trash_pickup_v2.jpg", "National Honor Society", "3503207953");
  postList[0] = post1;
  postList[1] = post2;
  postList[2] = post3;
  postList[3] = post4;
  postList[4] = post5;
  postList[5] = post6;
  postList[6] = post7;
  postList[7] = post8;
  postList[8] = post9;
}

function generatePost(pst, k) {
      var h = document.getElementById("deez");
      h.insertAdjacentHTML("afterend", 
      "<div class='container3' id='" + "poster" + k.toString() + "'>" +
      "<div class='img'>" +
      "<img src='images/" + pst.getPicName() + "'></img>" +
  "</div>" +
  "<div class='pe2'>" +
      "<p>" +  "<span style='font-weight: bold;'>" + pst.getTitle() + "</span>" + "</p>" +
      "<p>" + pst.getDesc() + "</p>" + "<br>" +
      "<p>" + pst.getCity() + ", " + pst.getState() + "</p>" + 
      "<p>" + pst.getDate().substring(4,6) + "/" + pst.getDate().substring(6, 8) + "/" + pst.getDate().substring(0,4) + " " + pst.getDate().substring(8, 10) + ":" + pst.getDate().substring(10,12) + "</p>" +                                                                                                                         
    "</div>" /*+ 
    
      "<div class='container'>" +
          "<div class='center'>" + 
              "<button class='d' type='button' style='background-color:#65ecb8;width:200;height:70' onclick='location.href = 'Home.html';'>" + "I'm Interested" + "</button>" +
          "</div>" +
      "</div>"*/);
}

function makePosts(){
  for(let i = 0; i < postList.length; i++){
  generatePost(postList[i], i);
  }
}
/*function generatePost(pst, k) {
    if(k == 0){
        var h = document.getElementById("deez");
        h.insertAdjacentHTML("afterend", 
        "<div class='container3'>" +
        "<div class='img'>" +
        "<img src='images/" + pst.getPicName() + "'></img>" +
    "</div>" +
    "<div class='pe2'>" +
        "<p>" +  "<span class='bolded'>" + pst.getName() + "</span>" + "</p>" +
        "<p>" + pst.getDescription() + "</p>" + "<br>" +
        "<p>" + pst.getCity() + ", " + pst.getState() + "</p>" + "<br>" +
        "<p>" + pst.getDate().substring(4,6) + "/" + pst.getDate().substring(6, 8) + "/" + pst.getDate().substring(0,4) + " " + pst.getDate().substring(9, 11) + ":" + pst.getDate().substring(11,13) + "</p>" +                                                                                                                         
      "</div>" + 
      
        "<div class='container'>" +
            "<div class='center'>" + 
                "<button class='d' type='button' style='background-color:#65ecb8;width:200;height:70' onclick='location.href = 'Home.html';'>" + "Home" + "</button>" +
            "</div>" +
        "</div>");
    }
    else {
        let st = 
        var h = document.getElementById('deez')
        h.insertAdjacentHTML("afterend", 
        "<div class='container3'>" +
        "<div class='img'>" +
        "<img src='images/" + pst.getPicName() +"'></img>" +
    "</div>" +
    "<div class='pe2'>" +
        "<p1>" +  "<span class='bolded'>" + pst.getName() + "</span>" + "</p1>" +
        "<p1>" + pst.getDescription() + "</p1>" + "<br>" +
        "<p1>" + pst.getCity() + ", " + pst.getState() + "</p1>" + "<br>" +
        "<p1>" + pst.getDate().substring(4,6) + "/" + pst.getDate().substring(6, 8) + "/" + pst.getDate().substring(0,4) + " " + pst.getDate().substring(9, 11) + ":" + pst.getDate().substring(11,13) + "</p1>" +                                                                                                                         
      "</div>" + 
      
        "<div class='container'>" +
            "<div class='center'>" + 
                "<button class='d' type='button' style='background-color:#65ecb8;width:200;height:70' onclick='location.href = "Home.html";'>" + "Home" + "</button>" +
            "</div>" +
        "</div>"
    } 
}/**/



/*/<body>
<div>
<h2>Welcome to</h2>
<h1><u>GeeksforGeeks.!</u></h1>
<h2 id="main"> This is Example of</h2>
</div>
<br>
<button onclick="myFunction()">Click me.!</button>

<script>
function myFunction() {
    var h = document.getElementById("main");
    h.insertAdjacentHTML("afterend",
        "<span style='color:green; " +
        "background-color: lightgrey;" +
        "font-size: 25px; " +
        "padding-left: 30px;" +
        "padding-right: 30px;" +
        "width: 50%;'>" +
        "HTML DOM insertAdjacentHTML() Method" +
        "</span>");
}
</script>

</body> */