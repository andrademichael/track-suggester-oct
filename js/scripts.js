$( document ).ready(function() {
  $("form#trackQuizForm").submit(function() {
    event.preventDefault();
    alert("It's working so far.");
    var creativityAnswer = $("input:radio[name=creativity]:checked").val();
    console.log(creativityAnswer);
    var riskAnswer = $("input:radio[name=risk]:checked").val();
    var frontOrBackAnswer = $("input:radio[name=frontOrBack]:checked").val();
    var osAllegienceAnswer = $("input:radio[name=osAllegience]:checked").val();
    var randomAnswer = $("input:radio[name=randomQuestion]:checked").val();
    // $("#output").text(result);
    // if (creativityAnswer === 1)
  });
});
