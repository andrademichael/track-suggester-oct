// Business Time

var quizCruncher = function(name, gullibilityTest, creativityAnswer, risk, frontOrBackAnswer, osAllegienceAnswer, randomAnswer) {

  $("#nameHelp").removeClass("has-error");
  $("#creditCardHelp").removeClass("has-error");
  $(".input").removeClass("has-error");
  $(".help-block").text("");

  var cSharp = 0;
  var css = 0;
  var ruby = 0;

  var retry = 0;

  if (!name) {
    $("#nameBox").addClass("has-error");
    $("#nameHelp").text("People without names can't take classes at Epicodus... at least I don't think so. Please enter something here.");
  } else if (gullibilityTest) {
      $("#creditCardHelp").addClass("has-error");
      $("#creditCardHelp").text("What? Seriously? No no no, don't EVER put your credit card number into strange, amateurish websites! Delete everything in this box and try again.");
  } else {
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

    $("#displayArea").text("");
    if (retry === 0) {
    $("#displayArea").text(randomResponse + " Also, " + name + ", based on Math I think you might like the " + trackChoice + " track at Epicodus, ");
    $('#displayArea').append("<a href=" + trackURL + ">" + 'check it out!'+ "</a>");
    } else
    alert("Hmm, I can't make a decision based on these answers, could you change one please?");
  }
}
    // Interfacing Users

$(document).ready(function() {
  $("form#trackQuizForm").submit(function() {
    event.preventDefault();
    $(".help-block").removeClass("has-error");
    var nameInput = $("#nameField").val();
    var gullibilityInput = $("#gullibilityTest").val();
    var creativityAnswer = parseInt($("input:radio[name=creativity]:checked").val());
    var riskAnswer = parseInt($("input:radio[name=risk]:checked").val());
    var frontOrBackAnswer = parseInt($("input:radio[name=frontOrBack]:checked").val());
    var osAllegienceAnswer = parseInt($("input:radio[name=osAllegience]:checked").val());
    var randomAnswer = parseInt($("input:radio[name=randomQuestion]:checked").val());

    quizCruncher(nameInput, gullibilityInput, creativityAnswer, riskAnswer, frontOrBackAnswer, osAllegienceAnswer, randomAnswer);
  });
});
