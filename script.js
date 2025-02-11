const events = [
    {
      title: "Seafood Expo",
      date: new Date("2025-02-10"),
      location: "Malindi, Kenya",
      attendees: new Set(["Alvin", "Calvo", "Kamau"])
    },
    {
      title: "Culinary Workshop",
      date: new Date("2025-02-15"),
      location: "Kinshasa,Congo ",
      attendees: new Set(["Sharon", "Wahome", "Josephine"])
    },
    {
      title: "Hospitality Summit",
      date: new Date("2025-03-05"),
      location: "Kigali, Rwanda",
      attendees: new Set(["Grace", "Hannah", "Ian"])
    },
    {
      title: "Sustainable Seafood Conference",
      date: new Date("2025-03-20"),
      location: "Capetown, South Africa",
      attendees: new Set(["Jack", "Kelly", "Liam"])
    }
  ];
  
  
  const today = new Date();
  const upcomingEvents = events
    .filter(event => {
      const diffTime = event.date - today;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 7;
    })
    .map(event => ({
      title: event.title,
      date: event.date.toDateString(),
      location: event.location
    }));
  
  console.log("Upcoming Events in the Next 7 Days:", upcomingEvents);
  
  


  const eventOrganizers = new WeakMap();
  events.forEach(event => {
    eventOrganizers.set(event, `Organizer of ${event.title}`);
  });
  
 

  
  console.log("Event Details:");
  console.table(
    events.map(({ title, date, location }) => ({
      Title: title,
      Date: date.toDateString(),
      Location: location
    }))
  );
  
 


  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
      console.log(`Added ${attendeeName} to ${eventTitle}.`);
    } else {
      console.log(`Event "${eventTitle}" not found.`);
    }
  }
  
  addAttendee("Seafood Expo", "Derek");
  
 


  function eventsToJSON(eventsArray) {
    return JSON.stringify(eventsArray, (key, value) => {
      if (key === "date") {
        return {
          original: value,
          formattedDate: new Date(value).toLocaleDateString("en-US")
        };
      }
      return value;
    }, 2);
  }
  
  console.log("Events JSON:", eventsToJSON(events));
  
  


  const firstEvent = events[0];
  console.log("Event Keys:", Object.keys(firstEvent));
  console.log("Event Values:", Object.values(firstEvent));
  console.log("Event Entries:", Object.entries(firstEvent));
  
 


  events.forEach(({ title, date }) => {
    console.log(`Event: ${title}, Date: ${date.toDateString()}`);
  });
  
 


  function deleteEvent(eventTitle) {
    const index = events.findIndex(event => event.title === eventTitle);
    if (index !== -1) {
      events.splice(index, 1);
      console.log(`Deleted event: ${eventTitle}`);
    } else {
      console.log(`Event "${eventTitle}" not found.`);
    }
  }
  
  deleteEvent("Hospitality Summit");
  
  console.log("Updated Events List:", events);
  