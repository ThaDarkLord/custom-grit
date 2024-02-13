const handleUserInput = async (event) => {
  event.preventDefault();
  console.log("good click");
  // const weight = document.querySelector('#weight').value.trim();
  const experience = document.querySelector("#experience").value.trim();
  const muscularGoal = document.querySelector("#muscularGoal").value.trim();
  const cardioGoal = document.querySelector("#cardioGoal").value.trim();
  const availability = document.querySelector("#availability").value.trim();
  console.log(experience, muscularGoal, cardioGoal, availability);

  if (experience && muscularGoal && cardioGoal && availability) {
    const response = await fetch("/api/workoutInfo/", {
      method: "POST",
      body: JSON.stringify({
        experience,
        muscularGoal,
        cardioGoal,
        availability,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/routine");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".input_form")
  .addEventListener("submit", handleUserInput);
