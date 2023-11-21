import kobe from "./kobe.jpg"

const players = [
    {
      name: "Kobe bryant",
      team: "Lakers",
      nationality: "USA",
      jerseyNumber: 38,
      age: 36,
      image: kobe,
    },
    {
      name: "Stephen curry",
      team: "Golden states warriors",
      nationality: "USA",
      jerseyNumber: 30,
      age: 35,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgsqACoPCr6gIzO-lTULe3gRxSjge6RHQyzdHCMOQlXEOxxP6VnN1fQFXCrnI9gnKTeA&usqp=CAU",
    },
    {
      name: "Lebron james",
      team: "Lakers",
      nationality: "USA",
      jerseyNumber: 23,
      age: 35,
      image: "data:image/jpeg;base64,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",
    },
    {
      name: " Kyrie irving",
      team: "Mavericks",
      nationality: "USA",
      jerseyNumber: 11,
      age: 31,
      image: "data:image/jpeg;base64,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",
    },
    
  ];
  
  export default players;