import axios from "axios";
import { serverApi } from "../lib/config";
import { Member } from "../lib/data/types/member";
class MemberService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }
  public async getTopUsers(): Promise<Member[]> {
    try {
      let url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers:", result);
      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers:", err);
      throw err;
    }
  }

  public async getAcademia(): Promise<Member[]> {
    try {
      let url = this.path + "/member/academia";
      const result = await axios.get(url);
      console.log("getAcademia:", result);
      const academia: Member = result.data;
      return academia as unknown as Member[];
    } catch (err) {
      console.log("Error, getAcademia:", err);
      throw err;
    }
  }
}
export default MemberService;
