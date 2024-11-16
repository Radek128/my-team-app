import * as signalR from "@microsoft/signalr";

interface Member {
  id: number;
  name: string;
  email: string;
}

class SignalRClient {
  private connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:5000/newTeamMember") // URL do huba SignalR
      .withAutomaticReconnect()
      .build();

    this.connection.on("MemberAdded", (member: Member) => {
      console.log("Nowy członek:", member);
    });
  }

//   public async start() {
//     this.connection.start().then(() => {
//         // Wywołaj JoinTeamGroup z odpowiednim teamId, aby dołączyć do grupy
//         this.connection.invoke("JoinTeamGroup", teamId);
//     }).catch(err => console.error(err));
//   }

  public async addMember(member: Member) {
    await this.connection.invoke("AddMember", member);
  }
}

export default SignalRClient;