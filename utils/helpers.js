module.exports = {
    typeOfWorkout: (experience, muscularGoal ) => {
        if (experience === 3 && muscularGoal === 2) {
          return `/img/advancedStrength.png`;
        } else if (experience === 3 && muscularGoal === 1) {
          return `/img/advancedSize.png`;
        } else if (experience === 3 && muscularGoal === 3) {
          return `/img/advancedSharpen.png`;
        } else if (
          experience === 2 &&
          muscularGoal === 2
        ) {
          return `/img/INTstrength.png`;
        } else if (experience === 2 && muscularGoal === 1) {
          return `/img/INTSize.png`;
        } else if (experience === 2 && muscularGoal === 3) {
          return `/img/INTSharpen.png`;
        } else {
            return `/img/Beginner.png`
        }
        },
        cardio : (cardioGoal) => {
          if (cardioGoal === 1){
            return `/img/HIIT.png`
          } else {
            return `/img/LISS.png`
          }
        }
    }
