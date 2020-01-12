class ActorModel {
  constructor(FirstName, LastName, Birthday, Image, IMDBLink) {
    {
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Birthday = Birthday;
      this.Image = Image;
      this.IMDBLink = IMDBLink;
    }
  }

  actorAge() {
    const currentYear = new Date().getFullYear();
    const yearOfBorn = Number(this.Birthday.split("-")[0]);
    return currentYear - yearOfBorn;
  }
}
export default ActorModel;
