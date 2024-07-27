  //multidimentional array for each Zodiac sign
  const zodiacSigns = [
    { sign: "Aries", startMonth: 2, startDay: 21, endMonth: 3, endDay: 20, img: "aries.png", fortune: "There will be times over the next few days when you seriously begin to wonder if you are doing the right thing. Confront those doubts but don’t let them overwhelm you. You are still heading in the right direction, so make nothing more than minor changes."},
    { sign: "Taurus", startMonth: 3, startDay: 21, endMonth: 4, endDay: 20, img: "taurus.png", fortune: "Cosmic activity in your opposite sign will make it easier for you to understand why partners and loved ones act the way they do, but only if you make a genuine effort to see things from their point of view. Not everyone thinks like you Taurus!"},
    { sign: "Gemini", startMonth: 4, startDay: 21, endMonth: 5, endDay: 21, img: "gemini.png", fortune: "You are certainly no stranger to hard work but with both the Sun and Mars moving through the wellbeing area of your chart at the moment you must take care not to overdo it either physically or mentally. Go easy on yourself today."},
    { sign: "Cancer", startMonth: 5, startDay: 22, endMonth: 6, endDay: 22, img: "cancer.png", fortune: "Your attitude towards life has improved no end over the past week or so and long may that continue. Now you can see that some of those “bad” things that caused you so much grief were actually blessings in disguise. The universe is still on your side."},
    { sign: "Leo", startMonth: 6, startDay: 23, endMonth: 7, endDay: 22, img: "leo.png", fortune: "Your way with words will open doors that had previously been locked to you but don’t rush blindly through them. Make sure you have a fair idea of what lies beyond each of those doors, because if you take the wrong one there could be an unpleasant surprise."},
    { sign: "Virgo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 21, img: "virgo.png", fortune: "Mercury, your ruler and planet of communication, is on fine form at the moment. Even if you are the sort of Virgo who prefers not to go into detail about what you are up to it will pay you to be more open today – but not too much!"},
    { sign: "Libra", startMonth: 8, startDay: 22, endMonth: 9, endDay: 22, img: "libra.png", fortune: "If you allow your confidence to lull you into a false sense of security you could regret it later on when you realize you are heading down the wrong path. Retrace your footsteps if you have to – better still, don’t make the wrong choice in the first place."},
    { sign: "Scorpio", startMonth: 9, startDay: 23, endMonth: 10, endDay: 21, img: "scorpio.png", fortune: "Cosmic activity in your birth sign is so intense at the moment that your outlook on life is sure to be challenged. The good news is that your enhanced way of looking at the world will enable you to perceive opportunities you previously managed to miss."},
    { sign: "Sagittarius", startMonth: 10, startDay: 22, endMonth: 11, endDay: 21, img: "sagittarius.png", fortune: "What a friend or colleague tells you today may sound convincing but can you be sure they know what they are talking about? The planets warn you need to be on your guard at every moment, while testing everything you hear, even from trusted sources."},
    { sign: "Capricorn", startMonth: 11, startDay: 22, endMonth: 0, endDay: 19, img: "capricorn.png", fortune: "Look closely at what you are currently working on and ask yourself honestly if you are making the best use of your time and energy. If in doubt don’t be afraid to get a second opinion from someone who has been there and done it before you."},
    { sign: "Aquarius", startMonth: 0, startDay: 20, endMonth: 1, endDay: 18, img: "aquarius.png", fortune: "You know you have what it takes to move higher up the ladder of success but you also know that sacrifices will have to be made. Make it your number one task today to assess the pros and cons of the commitment your ambitions will require of you."},
    { sign: "Pisces", startMonth: 1, startDay: 19, endMonth: 2, endDay: 20, img: "pisces.png", fortune: "Any doubts you have about what you are working on, either on your own or as part of a team, will disappear today. Not only is it a good idea but it may actually be a great idea, the kind that has the power to transform your existence."},
  ];

function getZodiacSign(birthday) {
    // Get the month (0-11) and day (1-31) from the birthday
    const month = birthday.getMonth();
    const day = birthday.getDate();
  
    // Find the Zodiac sign that matches the date
    for (const sign of zodiacSigns) {
      if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) {
        return sign.sign;
      }
    }
}

function horoscope() {
    const birthdayInput = document.getElementById("birthday");
    const birthday = new Date(birthdayInput.value);
    birthday.setDate(birthday.getDate() + 1);

    // check for invalid entries
    if (isNaN(birthday)) {
      alert("Please enter a valid date of birth.");
      return;
    }

    const zodiacSign = getZodiacSign(birthday);

    const resultDiv = document.getElementById("result");

     // Find the zodiac sign object in the array
    const zodiacInfo = zodiacSigns.find(sign => sign.sign === zodiacSign);

    // birthday
    const birthdayhtml = document.createElement("p");
    birthdayhtml.textContent = "Your birthday is: " + birthday.toLocaleDateString();
    
    // zodiac sign
    const signhtml = document.createElement("p");
    signhtml.textContent = "You are a " + zodiacSign + "!";
    
    // image
    const signImage = document.createElement("img");
    signImage.src = "imgs/" + zodiacInfo.img;
    signImage.alt = zodiacSign;

    // fortune
    const fortunehtml = document.createElement("p");
    fortunehtml.textContent = zodiacInfo.fortune;


    // append elements to the resultDiv
    resultDiv.innerHTML = ''; // Clear the previous content
    resultDiv.appendChild(birthdayhtml);
    resultDiv.appendChild(signhtml);
    resultDiv.appendChild(signImage);
    resultDiv.appendChild(fortunehtml);
}