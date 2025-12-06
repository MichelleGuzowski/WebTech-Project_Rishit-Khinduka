window.addEventListener('load', function() {
  
  // RANDOM DIAMOND FACT
  var factElement = document.getElementById("random-fact");
  
  if (factElement) {
    var diamondFacts = [
      "Most diamonds are over 1 billion years old—some are even 3.5 billion years old.",
      "Diamond is the hardest natural material on Earth, rating 10 on the Mohs scale.",
      "Diamonds form under extreme heat and pressure 100 miles beneath the Earth's surface.",
      "A diamond's brilliant sparkle comes from its ability to refract and reflect light perfectly.",
      "Only about 20% of mined diamonds are gem quality—the rest are used industrially.",
      "The word 'diamond' comes from the Greek word 'adamas,' meaning invincible or indestructible.",
      "Diamonds are made of pure carbon, the same element found in graphite and coal.",
      "The largest diamond ever discovered was the Cullinan Diamond at 3,106 carats (1.37 pounds).",
      "Colored diamonds are extremely rare—only 1 in 10,000 diamonds has a natural color.",
      "Ancient Romans believed that diamonds were splinters of fallen stars.",
      "It takes 1 to 3 billion years for a diamond to form naturally in the Earth's mantle.",
      "The Hope Diamond, one of the most famous gems, is valued at over $250 million."
    ];
    
    var randomNumber = Math.floor(Math.random() * diamondFacts.length);
    factElement.textContent = diamondFacts[randomNumber];
  }

  // AUCTIONS PAGE - Load from JSON
  var upcomingList = document.getElementById("upcoming-auctions");
  var pastList = document.getElementById("past-auctions");

  if (upcomingList || pastList) {
    
    // Auction data directly in JavaScript (no external JSON file needed)
    var auctionData = {
      "upcoming": [
        {
          "name": "Magnificent Jewels",
          "date": "June 15, 2025",
          "location": "Christie's Geneva",
          "highlight": "Featuring a 25-carat D-flawless diamond and pieces from royal collections."
        },
        {
          "name": "Important Diamonds & Colored Stones",
          "date": "July 8, 2025",
          "location": "Sotheby's New York",
          "highlight": "Rare Kashmir sapphire ring expected to exceed $5 million."
        },
        {
          "name": "Spring High Jewelry Sale",
          "date": "May 22, 2025",
          "location": "Bonhams London",
          "highlight": "Art Deco pieces from the estate of a European aristocrat."
        }
      ],
      "past": [
        {
          "name": "Exceptional Jewels & Watches",
          "date": "November 12, 2024",
          "location": "Christie's Hong Kong",
          "highlight": "A Burmese ruby necklace sold for $18.3 million, setting a new record."
        },
        {
          "name": "Magnificent Jewels Auction",
          "date": "October 10, 2024",
          "location": "Sotheby's Geneva",
          "highlight": "The Winston Legacy Diamond achieved $26.7 million."
        },
        {
          "name": "Noble Jewels",
          "date": "September 18, 2024",
          "location": "Sotheby's London",
          "highlight": "Historic pieces from European royalty, including a tiara worn at coronations."
        }
      ]
    };

    // Load upcoming auctions
    if (upcomingList) {
      upcomingList.innerHTML = ""; // Clear "Loading..."
      auctionData.upcoming.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = '<div class="auction-name">' + item.name + '</div>' +
                      '<div class="auction-date">' + item.date + ' • ' + item.location + '</div>' +
                      '<div>' + item.highlight + '</div>';
        upcomingList.appendChild(li);
      });
    }

    // Load past auctions
    if (pastList) {
      pastList.innerHTML = ""; // Clear "Loading..."
      auctionData.past.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = '<div class="auction-name">' + item.name + '</div>' +
                      '<div class="auction-date">' + item.date + ' • ' + item.location + '</div>' +
                      '<div>' + item.highlight + '</div>';
        pastList.appendChild(li);
      });
    }
  }

  // CONTACT FORM
  var form = document.getElementById("contact-form");
  
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("message");
      var formMessage = document.getElementById("form-message");
      
      var hasError = false;
      formMessage.textContent = "";
      formMessage.className = "";
      
      if (nameInput.value.trim() === "") hasError = true;
      if (emailInput.value.trim() === "") hasError = true;
      if (messageInput.value.trim() === "") hasError = true;
      
      var emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(emailInput.value.trim())) {
        hasError = true;
      }
      
      if (hasError) {
        formMessage.textContent = "Please fill all fields correctly.";
        formMessage.classList.add("message-error");
        return;
      }
      
      formMessage.textContent = "Thank you for your message! We will reply soon.";
      formMessage.classList.add("message-success");
      
      form.reset();
    });
  }
  
});