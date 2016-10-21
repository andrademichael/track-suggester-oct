// Business Time

  var quizCruncher = function(name, creativityAnswer, risk, frontOrBackAnswer, osAllegienceAnswer, randomAnswer) {

    var cSharp = 0;
    var ruby = 0;
    var css = 0;
    var retry = 0;

    if (creativityAnswer === 1) {
      cSharp ++;
    } else if (creativityAnswer === 4) {
      css ++;
    } else {
      ruby ++;
    }

    if (risk === 1) {
      cSharp ++;
    } else if (risk === 3) {
      ruby ++;
    } else {
      css ++;
    }

    if (frontOrBackAnswer === 1) {
      ruby ++;
    } else if (frontOrBackAnswer === 2) {
      cSharp ++;
    } else {
      css ++;
    }

    if (osAllegienceAnswer === 1) {
      cSharp ++;
    } else if (osAllegienceAnswer === 2) {
      css ++;
    } else if (osAllegienceAnswer === 3) {
      ruby ++;
    } else {
      alert("Wow, you're braver than I am...")
    }

    if (randomAnswer === 1) {
      randomResponse = "Cowabunga, dude!";
    } else if (randomAnswer === 2) {
      randomResponse = "We're gonna get her...";
    } else if (randomAnswer === 3) {
      randomResponse = "Rogue or Gambit, cherie?";
    } else {
      randomResponse = "Sufferin' succotash!";
    }
    console.log(cSharp, ruby, css);
    if (cSharp > ruby && cSharp > css) {
      alert("C-sharp is running");
      trackChoice = "C-Sharp";
      trackURL = "http://www.epicodus.com/c-sharp";
    } else if (ruby > css && ruby > cSharp) {
      trackChoice = "Ruby";
      trackURL = "http://www.epicodus.com/ruby";
    } else if (css > ruby && css > cSharp) {
      trackChoice = "CSS";
      trackURL = "http://www.epicodus.com/css";
    } else {
      var retry = 1;
    }
    if (retry === 0) {
    $("#displayArea").text(randomResponse + " Also, " + name + ", based on Math I think you might like the " + trackChoice + " track at Epicodus, check it out: " + trackURL);
    } else
    alert("Hmm, I can't make a decision based on these answers, could you change one please?");

  }
    // Interfacing Users

$( document ).ready(function() {
  $("form#trackQuizForm").submit(function() {
    event.preventDefault();

    var nameInput = $("#nameBox").val();

    var creativityAnswer = parseInt($("input:radio[name=creativity]:checked").val());
    var riskAnswer = parseInt($("input:radio[name=risk]:checked").val());
    var frontOrBackAnswer = parseInt($("input:radio[name=frontOrBack]:checked").val());
    var osAllegienceAnswer = parseInt($("input:radio[name=osAllegience]:checked").val());
    var randomAnswer = parseInt($("input:radio[name=randomQuestion]:checked").val());
    console.log(nameInput, creativityAnswer, riskAnswer, frontOrBackAnswer, osAllegienceAnswer, randomAnswer);
    quizCruncher(nameInput, creativityAnswer, riskAnswer, frontOrBackAnswer, osAllegienceAnswer, randomAnswer);
  });
});
