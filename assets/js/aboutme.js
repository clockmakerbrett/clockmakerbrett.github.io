$(document).ready(() => {
  $("#click-here").on("click", () => {
    $("#span-to-hide").addClass("hideme");
    $("#span-to-show").removeClass("hideme");
    confetti({
      particleCount: 250,
      origin: {
        x: 0.2,
        y: 0.8,
      },
    });
  });
});

//maybe make position: relative?
//<canvas style="position: fixed; top: 0px; left: 0px; pointer-events: none; z-index: 100;" width="1270" height="863"></canvas>
