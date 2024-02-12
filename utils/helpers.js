module.exports = {
    typeOfWorkout: (experience, muscularGoal ) => {
        if (experience === 1 && muscularGoal === 1) {
          return `/img/advancedStrength.png`;
        } else if (experience === "Advanced" && muscularGoal === "Size") {
          return `/img/advancedSize.png`;
        } else if (experience === "Advanced" && muscularGoal === "Sharpen") {
          return `/img/advancedSharpen.png`;
        } else if (
          experience === "Intermediate" &&
          muscularGoal === "Strength"
        ) {
          return `/img/`;
        } else if (experience === "Intermediate" && muscularGoal === "Size") {
          return `/img/`;
        } else if (experience === "Intermediate" && muscularGoal === "Sharpen") {
          return `/img/`;
        } else {
            return `/img/weightlifter.jpeg`
        }
        }
    }
